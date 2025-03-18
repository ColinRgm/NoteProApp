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

    /* Dashboard page */
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('Home_Page');

    Route::get('dashboard',
        [GradeController::class, 'dashboardGrade'])
        ->name('Last_Five_Grades');

    /* Add Grade */
    Route::get('addGrade',
        [BrancheController::class, 'index'])
        ->name('addGrade');

    /* For each year */
    Route::get('{year}Year', [GradeController::class, 'gradesPerYear'])
        ->where('Grades_Per_Year', '[first, second, third, fourth]');

    /**
    // First year page
    Route::get('firstYear',
        [GradeController::class, 'firstYearGrade'])
        ->name('First_Year_Grades');

     // Second year page
    Route::get('secondYear',
        [GradeController::class, 'secondYearGrade'])
        ->name('Second_Year_Grades');

    // Third year page
   Route::get('thirdYear',
        [GradeController::class, 'thirdYearGrade'])
        ->name('Third_Year_Grades');

    // Fourth year page
    Route::get('fourthYear',
        [GradeController::class, 'fourthYearGrade'])
        ->name('Fourth_Year_Grades');
    */


    /* Student page */
    Route::get('students',
        [RegisteredUserController::class, 'getStudents'])
        ->name('All_Students');



    // Route::get('dashboard', [UserController::class, 'average']);

});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
