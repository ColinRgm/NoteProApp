<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Grade;
use App\Models\Group;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Récupérer toutes les informations nécessaires en une seule requête
        $grades = Grade::select(
            'grades.id',
            'grades.grade',
            'grades.created_at',
            'branches.id as branch_id',
            'branches.name as branch_name',
            'branches.weight as branch_weight',
            'branches.rounding as branch_rounding',
            'groups.id as group_id',
            'groups.name as group_name',
            'groups.weight as group_weight',
            'groups.rounding as group_rounding'
        )
            ->join('branches', 'branches.id', '=', 'grades.branch_id')
            ->join('groups', 'groups.id', '=', 'branches.groupe_id')
            ->orderBy('grades.created_at', 'desc')
            ->get();

        // Calcul des moyennes pour chaque groupe
        $groupAverages = [];

        // Récupérer tous les groupes pour les calculs
        $groups = Group::all();

        foreach ($groups as $group) {
            $groupGrades = $grades->filter(function ($grade) use ($group) {
                return $grade->group_id == $group->id;
            });

            $weightedSum = 0;
            $weightSum = 0;

            // Calcul de la moyenne pondérée pour chaque branche du groupe
            foreach ($groupGrades as $grade) {
                $branchWeight = $grade->branch_weight;
                $gradeValue = $grade->grade;
                $weightedSum += $gradeValue * $branchWeight;
                $weightSum += $branchWeight;
            }

            // Vérification pour éviter la division par zéro
            if ($weightSum > 0) {
                // Moyenne pondérée du groupe
                $groupAverage = $weightedSum / $weightSum;
                $groupAverage = round($groupAverage, $group->rounding);  // Arrondi selon le group_rounding
            } else {
                // Si le poids total est 0, tu peux attribuer une valeur par défaut, comme 0
                $groupAverage = 0;
            }

            $groupAverages[$group->id] = $groupAverage;
        }

        // Calcul des moyennes générales
        // $generalAvg = 0;
        $ecgAvg = 0;
        $baseElargieAvg = 0;
        $informatiqueAvg = 0;
        $tpiAvg = 0;

        // Tu peux calculer la moyenne générale ou des moyennes spécifiques ici
        // Exemple :
        $generalAvg = ($ecgAvg + $baseElargieAvg + $informatiqueAvg + $tpiAvg) / 4;

        dd('dashboard', [
            'grades' => $grades,
            'groupAverages' => $groupAverages,
            'averages' => [
                'general' => $generalAvg,
                'ecg' => $ecgAvg,
                'baseElargie' => $baseElargieAvg,
                'informatique' => $informatiqueAvg,
                'tpi' => $tpiAvg,
            ]
        ]);
    }
}
