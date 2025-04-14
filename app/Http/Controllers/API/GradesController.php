<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Branch;
use App\Models\Grade;
use App\Models\Module;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GradesController extends Controller
{
    public function index()
    {
        $grades = Grade::with('branch:id,name', 'user', 'module:id,name')
            ->select('id', 'branch_id', 'pdf', 'grade', 'semester', 'created_at', 'user_id', 'module_id')
            ->orderBy('semester', 'desc')
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
            'branche_id' => 'required|exists:branches,id',
            'module_id' => 'required|exists:modules,id',
            // 'user_id' => 'required|exists:users,id',
            'grade' => 'required|numeric|min:1|max:6',
            'semester' => 'required|integer|min:1|max:8',
            // 'pdf' => 'nullable|file|mimes:pdf|max:2048',
        ]);

        Grade::create([
            'branche_id' => $validated['branche_id'],
            'module_id' => $validated['module_id'],
            'user_id' => auth()->id(),
            'grade' => $validated['grade'],
            'semester' => $validated['semester'],
            'pdf' => 'test.pdf',
        ]);

        return redirect('dashboard')->with('success', 'Note ajoutée avec succès');
    }


    public function show($id)
    {
        $uniqueGrade = Grade::with('branch:id,name', 'module:id,name')->findOrFail($id);

        return Inertia::render('grades/show', [
            'id' => $id,
            // 'pdf' => $uniqueGrade->pdf,
            'uniqueGrade' => $uniqueGrade,
        ]);
    }


    public function edit(Grade $grade)
    {
        //
    }


    public function update(Request $request, string $id)
    {
        //
    }


    public function destroy(string $id)
    {
        //
    }
}
