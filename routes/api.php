<?php

use Illuminate\Support\Facades\Route;

// Call controllers
use App\Http\Controllers\API\RoleUserController;
use App\Http\Controllers\API\GradeController;
use App\Http\Controllers\API\BrancheController;


Route::apiResources([
    'roles' => RoleUserController::class,
    'grades' => GradeController::class,
]);

Route::get('/addGrade', [BrancheController::class, 'show']);
