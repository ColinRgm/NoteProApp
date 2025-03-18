<?php

// use App\Http\Controllers\Database\BranchController;
use App\Http\Controllers\API\BrancheController;
use App\Http\Controllers\API\GradeController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth'])->group(function () {


    Route::get('dashboard', [UserController::class, 'average'])->name('dashboard');


    /**
     * Get the last five grades and add them to the table on the dashboard
     */
    Route::get('dashboard',
        [GradeController::class, 'dashboardGrade'])
        ->name('Last_Five_Grades');


    /**
     * Get the branches name and add them to the select on the page to add grade
     */
    Route::get('addGrade',
        [BrancheController::class, 'index'])
        ->name('addGrade');


    /**
     * Get all the grades and add them to the right table by year
     */
    Route::get('{year}Year', [GradeController::class, 'gradesPerYear'])
        ->where('Grades_Per_Year', '[first, second, third, fourth]');


    /**
     * Get all the students and add them to the list in the page students
     */
    Route::get('students',
        [RegisteredUserController::class, 'getStudents'])
        ->name('All_Students');

});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
