<?php

use App\Http\Controllers\API\GroupeController;
use Illuminate\Support\Facades\Route;

// Call controllers
use App\Http\Controllers\API\RoleUserController;
use App\Http\Controllers\API\GradeController;
use App\Http\Controllers\API\BrancheController;


Route::resources([
    'roles' => RoleUserController::class,
    'grades' => GradeController::class,
    'branches' => BrancheController::class,
    'groupes' => GroupeController::class,
]);

// Route::get('/branches', [BrancheController::class, 'index']);
