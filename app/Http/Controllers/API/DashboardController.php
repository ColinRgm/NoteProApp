<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Grade;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $grades = Grade::with('branch:id,name')
    ->select('id', 'branch_id', 'pdf', 'grade', 'created_at')
    ->orderBy('created_at', 'desc')
    ->limit(5)
    ->get();

        /*$grades = Grade::select(
            'branches.name as branch_name',
            'branches.weight as branch_weight',
            'branches.rounding as branch_rounding',
            'grades.grade',
            'groups.id as group_id',
            'groups.name as group_name',
            'groups.weight as group_weight',
            'groups.rounding as group_rounding'
        )
            ->join('branches', 'branches.id', '=', 'grades.branch_id')
            ->join('groups', 'groups.id', '=', 'branches.groupe_id')
            ->get();*/

        /**
         * Get columns in branches
         *
         * id
         * groupe_id
         * weight
         * rounding
         *
         * $ecgAvg = 5;
         * $baseElargieAvg = 5;
         * $informatiqueAvg = 4.5;
         * $tpiAvg = 4;
         */

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
}
