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
        //
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
