<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Branch;
use App\Models\Grade;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GradeController extends Controller
{

    public function create()
    {
        /**
         * Récupérer la valeur du select 'branch'
         * Récupérer la valeur du select 'grade'
         * Récupérer la valeur du select 'semester'
         * -> Les ajouter dans la base de données dans la table 'Grades'
         *
         * Récupérer le nom du fichier pdf
         * -> Ajouter le chemin du ficher dans la base de donnée dans la table 'Grades'
         */
    }

    /**
     * Display a listing of the resource.
     */
    public function dashboardGrade()
    {
        /*$grades = Grade::with('branch:id,name')
            ->select('id', 'branch_id', 'pdf', 'grade', 'created_at')
            ->orderBy('created_at', 'desc')
            ->limit(5)
            ->get();*/

        $grades = Grade::select(
            'branches.name as branch_name',
            'branches.weight as branch_weight',
            'branches.rounding as branch_rounding',
            'grades.grade',
            'groups.name as group_name',
            'groups.weight as group_weight',
            'groups.rounding as group_rounding'
        )
            ->join('branches', 'branches.id', '=', 'grades.branch_id')
            ->join('groups', 'groups.id', '=', 'branches.groupe_id')
            ->get();

        /**
         * Get columns in branches
         *
         * id
         * groupe_id
         * weight
         * rounding
         */
        $ecgAvg = 5;
        $baseElargieAvg = 5;
        $informatiqueAvg = 4.5;
        $tpiAvg = 4;

        /**
         * Get columns in groups
         *
         * id
         * weight
         * rounding
         */
        // $generalAvg = ($ecgAvg + $baseElargieAvg + $informatiqueAvg + $tpiAvg) / 4;

        return Inertia::render('dashboard', [
            'grades' => $grades,
            /*'averages' => [
                'general' => $generalAvg,
                'ecg' => $ecgAvg,
                'baseElargie' => $baseElargieAvg,
                'informatique' => $informatiqueAvg,
                'tpi' => $tpiAvg,
            ]*/
        ]);
    }


    public function gradesPerYear($year)
    {
        $semester = [
            'first' => [1, 2],
            'second' => [3, 4],
            'third' => [5, 6],
            'fourth' => [7, 8],
        ];

        $grades = Grade::with('branch:id,name')
            ->select('id', 'branch_id', 'pdf', 'grade', 'semester')
            ->orderBy('created_at', 'desc')
            ->whereIn('semester', $semester[$year])
            ->get();

        return Inertia::render("{$year}Year", [
            'grades' => $grades
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
