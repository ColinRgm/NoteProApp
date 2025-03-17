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
        $grades = Grade::with('branch:id,name')
            ->select('id', 'branch_id', 'pdf', 'grade', 'created_at')
            ->orderBy('created_at', 'desc')
            ->limit(5)
            ->get();

        return Inertia::render('dashboard', [
            'grades' => $grades
        ]);
    }

    public function firstYearGrade()
    {
        $grades = Grade::with('branch:id,name')
            ->select('id', 'branch_id', 'pdf', 'grade', 'semester')
            ->orderBy('created_at', 'desc')
            ->whereIn('semester', [1, 2])
            ->get();

        return Inertia::render('firstYear', [
            'grades' => $grades
        ]);
    }

    public function secondYearGrade()
    {
        $grades = Grade::with('branch:id,name')
            ->select('id', 'branch_id', 'pdf', 'grade', 'semester')
            ->orderBy('created_at', 'desc')
            ->whereIn('semester', [3, 4])
            ->get();

        return Inertia::render('secondYear', [
            'grades' => $grades
        ]);
    }

    public function thirdYearGrade()
    {
        $grades = Grade::with('branch:id,name')
            ->select('id', 'branch_id', 'pdf', 'grade', 'semester')
            ->orderBy('created_at', 'desc')
            ->whereIn('semester', [5, 6])
            ->get();

        return Inertia::render('thirdYear', [
            'grades' => $grades
        ]);
    }

    public function fourthYearGrade()
    {
        $grades = Grade::with('branch:id,name')
            ->select('id', 'branch_id', 'pdf', 'grade', 'semester')
            ->orderBy('created_at', 'desc')
            ->whereIn('semester', [7, 8])
            ->get();

        return Inertia::render('fourthYear', [
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
