<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Mail\NewGrade;
use App\Models\Branch;
use App\Models\Grade;
use App\Models\Module;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class GradesController extends Controller
{
    public function index()
    {
        $grades = Grade::with('branch:id,name', 'user', 'module:id,name')
            ->select('id', 'branch_id', 'pdf', 'grade', 'semester', 'test_name', 'created_at', 'user_id', 'module_id')
            ->orderBy('grades', 'asc')
            ->paginate(6);

        return Inertia::render('grades', [
            'grades' => $grades,
        ]);
    }


    public function create()
    {
        $branches = Branch::all();

        $modules = Module::all();

        return inertia('grades/create', [
            'branches' => $branches,
            'modules' => $modules,
        ]);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'branch_id' => 'nullable|exists:branches,id',
            'module_id' => 'nullable|exists:modules,id',
            'grade' => 'required|numeric|min:1|max:6',
            'semester' => 'required|integer|min:1|max:8',
            'test_name' => 'nullable|string',
            'pdf' => 'nullable|file|mimes:pdf|max:2048',
        ]);

        if ($request->hasFile('pdf')) {
            $path = $request->file('pdf')->store('gradesPDF', 'public');
            $validated['pdf'] = $path;
        }

        $validated['user_id'] = auth()->id();

        $grade = Grade::create($validated);
        $module = null;
        $branch = null;

        if ($grade->module_id) {
            $module = Module::find($grade->module_id);
        }

        if ($grade->branch_id) {
            $branch = Branch::find($grade->branch_id);
        }

        // Récupérer les formateurs et coachs associés
        $user = auth()->user();
        $formatorEmail = $user->formateur_id ? User::find($user->formateur_id)->email : null;
        // $coachEmail = $user->coach_id ? User::find($user->coach_id)->email : null;

        $emails = [$user->email];

        if ($formatorEmail) {
            $emails[] = $formatorEmail;
        }

        /*if ($coachEmail) {
            $emails[] = $coachEmail;
        }*/

        Mail::to($emails)->send(new NewGrade($grade, $module, $branch));

        return redirect('dashboard')->with('success', 'Note ajoutée avec succès');
    }


    public function show($id)
    {
        $uniqueGrade = Grade::with('branch:id,name', 'module:id,name')->findOrFail($id);

        return Inertia::render('grades/show', [
            'id' => $id,
            'uniqueGrade' => $uniqueGrade,
        ]);
    }


    public function edit($id)
    {
        $branches = Branch::all();

        $modules = Module::all();

        $uniqueGrade = Grade::with('branch:id,name', 'module:id,name')->findOrFail($id);

        return inertia('grades/edit', [
            'branches' => $branches,
            'modules' => $modules,
            'uniqueGrade' => $uniqueGrade,
        ]);
    }


    public function update(Request $request, string $id)
    {
        // dd($request->all());

        $newData = $request->validate([
            'branch_id' => 'nullable|exists:branches,id',
            'module_id' => 'nullable|exists:modules,id',
            'grade' => 'nullable|numeric|min:1|max:6',
            'semester' => 'nullable|integer|min:1|max:8',
            'test_name' => 'nullable|string',
            'pdf' => 'nullable|file|mimes:pdf|max:2048',
        ]);

        if ($request->hasFile('pdf')) {
            $path = $request->file('pdf')->store('gradesPDF', 'public');
            $newData['pdf'] = $path;
        }

        $updateGrade = Grade::findOrFail($id);

        if ($updateGrade->user_id !== auth()->id()) {
            abort(403);
        }

        $updateGrade->update($newData);

        // dd($newData);

        return redirect('dashboard')->with('success', 'Note modifiée avec succès');
    }


    public function destroy(string $id)
    {
        $grade = Grade::findOrFail($id);

        if ($grade->user_id !== auth()->id()) {
            abort(403, 'Vous n\'êtes pas autorisé à supprimer cette note.');
        }

        $grade->delete();

        return redirect('dashboard')->with('success', 'Note supprimée avec succès');
    }
}
