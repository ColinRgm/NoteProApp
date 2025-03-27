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

        $grades = Grade::select(
            'grades.id',
            'grades.branch_id',
            'grades.user_id',
            'grades.grade'
        )->with([
            'branch' => function ($query) {
                $query->select(
                    'branches.id',
                    'branches.name',
                    'branches.group_id'
                );
            },
            'group' => function ($query) {
                $query->select(
                    'groups.id',
                    'groups.name'
                );
            }
        ])
            ->get()->toArray();


        /**
         * Calcule de la moyenne de chaque groupe
         *
         * Trouver comment faire l'arrondi et comment utiliser les pondérations
         */
        $byGroup = Group::select(
            'groups.id',
            'groups.name',
            'groups.rounding'
        )->with([
            'grades' => function ($query) {
                $query->select(
                    'grades.id',
                    'grades.grade',
                );
            },
            'branches' => function ($query) {
                $query->select(
                    'branches.name',
                    'branches.group_id',
                    'branches.weight',
                    'branches.rounding',
                );
            }
        ])
            ->withAvg('grades as moyenne_branche', 'grades.grade')
            ->get()
            ->map(function ($groupAvg) {
                $groupAvg->moyenne_branche = round($groupAvg->moyenne_branche, $groupAvg->rounding);
                return $groupAvg;
            })
            ->toArray();




        /**
         * Calcule de la moyenne générale
         *
         * Trouver comment faire l'arrondi et comment utiliser les pondérations
         */
        $totalMoyenne = 0;
        $totalGroups = 0;

        foreach ($byGroup as $group) {
            if (isset($group['moyenne_branche']) && $group['moyenne_branche'] !== null) {
                $totalMoyenne += $group['moyenne_branche'];
                $totalGroups++;
            }
        }

        $globalAverage = $totalGroups > 0 ? $totalMoyenne / $totalGroups : 0;

        // dd($byGroup);

        return Inertia::render('dashboard', [
            'grades' => $grades,
            'byGroup' => $byGroup,
            'generalAvg' => $globalAverage,
        ]);
    }
}
