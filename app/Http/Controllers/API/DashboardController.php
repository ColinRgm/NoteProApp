<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Grade;
use App\Models\Group;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $data = Group::with(['branches.grades' => function (Builder $query) {

        }])->get();

        $finalWeightedSum = 0;
        $finalWeight = 0;
        $groupAveragesRounded = [];

        foreach ($data as $group) {
            $branchesAveragesRounded = [];

            $groupWeightedSum = 0;
            $groupWeightSum = 0;

            /**
             * Moyennes par branches
             */
            foreach ($group->branches as $branch) {
                if ($branch->grades->count() > 0) {
                    $brancheAvg = $branch->grades->avg('grade');
                    $brancheAverageRounded = round($brancheAvg / $branch->rounding) * $branch->rounding;
                    $branchesAveragesRounded[] = $brancheAverageRounded;

                    $groupWeightedSum += $brancheAvg * $branch->weight;
                    $groupWeightSum += $branch->weight;
                } else {
                    dump("Aucune note pour la branche {$branch->name}");
                }
            }

            /**
             * Moyennes par groupe
             */
            if ($groupWeightSum > 0) {
                $groupeAvg = $groupWeightedSum / $groupWeightSum;
                $groupeAvgRounded = round($groupeAvg / $group->rounding) * $group->rounding;

                // Ajout dans le tableau
                $groupAveragesRounded[] = $groupeAvgRounded;

                // Calcul pour la moyenne finale
                $finalWeightedSum += $groupeAvg * $group->weight;
                $finalWeight += $group->weight;

                dump("Groupe : $group->name", [$groupeAvgRounded]);
            } else {
                dump("Aucune moyenne de branche disponible pour le groupe {$group->name}");
            }
        }


        /**
         * Moyenne finale
         */
        if ($finalWeight > 0) {
            $finalGrade = round($finalWeightedSum / $finalWeight, 1);
            dump("Moyenne générale", $finalGrade);
        } else {
            dump("Moyenne finale impossible à calculer");
        }
    }
}
