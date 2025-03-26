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
            ->toArray();

        $totalMoyenne = 0;
        $totalGroups = 0;

        foreach ($byGroup as $group) {
            if (isset($group['moyenne_branche']) && $group['moyenne_branche'] !== null) {
                $totalMoyenne += $group['moyenne_branche'];
                $totalGroups++;
            }
        }

// Calcul de la moyenne globale
        $globalAverage = $totalGroups > 0 ? $totalMoyenne / $totalGroups : 0;

        // dd($byGroup);

        return Inertia::render('dashboard', [
            'grades' => $grades,
            'byGroup' => $byGroup,
            'generalAvg' => $globalAverage,
        ]);
    }
}
