<?php

// use App\Http\Controllers\Database\BranchController;
use App\Http\Controllers\API\BrancheController;
use App\Http\Controllers\API\GradeController;
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
        ->name('LastFiveGrades');

    /* Add Grade */
    Route::get('addGrade',
        [BrancheController::class, 'index'])
        ->name('addGrade');


    /* First year page */
    Route::get('firstYear',
        [GradeController::class, 'firstYearGrade'])
        ->name('FirstYearGrades');


    /* Second year page */
    Route::get('secondYear',
        [GradeController::class, 'secondYearGrade'])
        ->name('SecondYearGrades');

    /* Third year page */
    Route::get('thirdYear',
        [GradeController::class, 'thirdYearGrade'])
        ->name('ThirdYearGrades');

    /* Fourth year page */
    Route::get('fourthYear',
        [GradeController::class, 'fourthYearGrade'])
        ->name('FourthYearGrades');


    /* Student page */
    Route::get('students',
        [RegisteredUserController::class, 'getStudents'])
        ->name('students.getStudents');

});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
