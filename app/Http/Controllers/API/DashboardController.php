<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Grade;
use App\Models\Group;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {


        $grades = Grade::with('branch:id,name', 'user', 'module')
            ->select('id', 'branch_id', 'pdf', 'grade', 'semester', 'created_at', 'user_id', 'module_id', 'test_name')
            ->orderBy('created_at', 'desc')
            ->paginate();

        $data = Group::with('branches.grades')->get();



        $finalWeightedSum = 0;
        $finalWeight = 0;

        $groupeAverages = [];

        foreach ($data as $group) {
            $branchesAveragesRounded = [];

            $groupWeightedSum = 0;
            $groupWeightSum = 0;

            /**
             * Moyenne par branches
             */
            foreach ($group->branches as $branch) {
                if ($branch->grades->count() > 0) {
                    $brancheAvg = $branch->grades->avg('grade');
                    $brancheAverageRounded = round($brancheAvg / $branch->rounding) * $branch->rounding;
                    $branchesAveragesRounded[] = $brancheAverageRounded;

                    $groupWeightedSum += $brancheAvg * $branch->weight;
                    $groupWeightSum += $branch->weight;

                }
            }

            /**
             * Moyenne par groupe
             */
            if ($groupWeightSum > 0) {
                $groupeAvg = $groupWeightedSum / $groupWeightSum;
                $groupeAvgRounded = round($groupeAvg / $group->rounding) * $group->rounding;

                $groupeAverages[] = [
                    'groupe_name' => $group->name,
                    'average' => $groupeAvgRounded
                ];

                // Calcul pour la moyenne finale
                $finalWeightedSum += $groupeAvg * $group->weight;
                $finalWeight += $group->weight;

            }
        }


        /**
         * Moyenne finale
         */
        if ($finalWeight > 0) {
            $finalGrade = round($finalWeightedSum / $finalWeight, 1);

        }


        return Inertia::render('dashboard', [
            'groupeAvg' => $groupeAverages,
            'generalAvg' => $finalGrade,
            'grades' => $grades,
        ]);
    }
}
