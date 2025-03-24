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

        $grades = Grade::with(
            'branch:id,name'
        )
            ->select(
                'grades.id',
                'grades.branch_id',
                'grades.grade',

                'branches.id as b_id',
                'branches.name as b_name',
                'branches.weight as b_weight',
                'branches.rounding as b_rounding',

                'groups.id as g_id',
                'groups.name as g_name',
                'groups.weight as g_weight',
                'groups.rounding as g_rounding'
            )
            ->join(
                'branches',
                'branches.id',
                '=',
                'grades.branch_id'
            )
            ->join(
                'groups',
                'groups.id',
                '=',
                'branches.groupe_id'
            )
            ->get();


        // $generalAvg = ($ecgAvg + $baseElargieAvg + $informatiqueAvg + $tpiAvg) / 4;

        return Inertia::render('dashboard', [
            'grades' => $grades,
//            'averages' => [
//                'general' => $generalAvg,
//                'ecg' => $ecgAvg,
//                'baseElargie' => $baseElargieAvg,
//                'informatique' => $informatiqueAvg,
//                'tpi' => $tpiAvg,
//            ]
        ]);
    }
}
