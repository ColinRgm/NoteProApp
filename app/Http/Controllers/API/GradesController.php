<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Grade;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GradesController extends Controller
{
    /**
     * @return Response
     *
     * List of the grades
     */
    public function index(Request $request): Response
    {
        $grades = Grade::with('branch:id,name')
            ->select('id', 'branch_id', 'pdf', 'grade', 'created_at')
            ->orderBy('created_at', 'desc')
            ->get();

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

    /**
     * @param $id
     * @return void
     *
     * Show a preview of the grade
     */
    public function show($id)
    {
        //
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
