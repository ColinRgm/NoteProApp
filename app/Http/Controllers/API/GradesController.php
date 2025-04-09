<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Grade;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use function React\Promise\all;

class GradesController extends Controller
{
    public function index(Request $request): Response
    {
        $grades = Grade::with('branch:id,name', 'user')
            ->select('id', 'branch_id', 'pdf', 'grade', 'semester', 'created_at', 'user_id')
            ->orderBy('semester', 'desc')
            ->paginate(5); // Pagination par semestre

        return Inertia::render('grades', [
            'grades' => $grades
        ]);
    }

    /**
     * @return void
     *
     * Get the add grades form
     */
    public function create()
    {
        //
    }

    /**
     * @param Request $request
     * @return void
     *
     * Add grade in the database
     */
    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        $uniqueGrade = Grade::with('branch')
            ->where('id', $id)
            ->firstOrFail();

        return Inertia::render('grades/show', [
            'id' => $id,
            'pdf' => $uniqueGrade->pdf,
            'uniqueGrade' => $uniqueGrade
        ]);
    }

    /**
     * @param Grade $grade
     * @return void
     *
     * Get the edit grades form
     */
    public function edit(Grade $grade)
    {
        //
    }

    /**
     * @param Request $request
     * @param string $id
     * @return void
     *
     * Add the modification to the database
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * @param string $id
     * @return void
     *
     * Delete a grade
     */
    public function destroy(string $id)
    {
        //
    }
}
