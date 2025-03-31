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
        $grades = Grade::with('branch:id,name', 'user')
            ->select('id', 'branch_id', 'pdf', 'grade', 'semester', 'created_at', 'user_id')
            ->get();

        /* Regroupement des notes par semestre et les ajouter à la bonne année */
        $organizedGrades = $grades->groupBy(function ($grade) {
            $year = floor(($grade->semester - 1) / 2) + 1;
            return "{$year}ère année";
        });

        return Inertia::render('grades', [
            'grades' => $organizedGrades
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
     * @return Response
     *
     * Show a preview of the grade
     *
     *  Récupérer :
     *      -- Table branches --
     *          Nom de la branche (via ID)
     *
     *      -- Table grades --
     *          Note (via ID)
     *          PDF de le note (via ID)
     */
    public function show($id)
    {
        $gradeInfo = Grade::with('branch:id,name', 'user')
            ->select('id', 'branch_id', 'pdf', 'grade')
            ->get();

        return Inertia::render('grades', [
            'grades' => $gradeInfo
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
