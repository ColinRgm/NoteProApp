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
            ->get();


        $byGroup = Group::select(
            'groups.name',
            'groups.rounding',
        )->with([
            'grades' => function ($query) {
                $query->select(
                    'grades.id',
                    'grades.grade',
                );
            },
            'branches' => function ($query) {
                $query->select(
                    'branches.group_id',
                    'branches.weight',
                    'branches.rounding',
                );
            }
        ])
            ->get()->toArray();

        dd($byGroup);

        /**
         * $averageGrade = $grades->avg('grade')
         * ->where('groups.id', '=', 'branches.group_id');
         *
         * $byGroup = $grades->groupBy(function ($grade) {
         * return $grade->branch->group_id;
         * });
         *
         * $averageByGroup = $byGroup->map(function ($groupGrades) {
         * return $groupGrades->avg('grade');
         * });
         *
         * foreach ($averageByGroup as $groupeId => $averageGrade) {
         * echo "Groupe $groupeId : Moyenne des grades = $averageGrade";
         * }
         *
         */

        return Inertia::render('dashboard', [
            'grades' => $grades,
            'byGroup' => $byGroup,
            /*'averages' => [
                'general' => $avgGeneral,
                'ecg' => $ecgAvg,
                'baseElargie' => $baseElargieAvg,
                'informatique' => $informatiqueAvg,
                'tpi' => $tpiAvg,
            ]*/
        ]);
    }
}
