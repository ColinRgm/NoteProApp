<?php

// use App\Http\Controllers\Database\BranchController;
use App\Http\Controllers\API\BrancheController;
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
    })->name('dashboard');

    Route::get('addGrade', [BrancheController::class, 'index'])->name('addGrade');


    /* First year page */
    Route::get('firstYear', function () {
        return Inertia::render('firstYear');
    })->name('firstYear');


    /* Second year page */
    Route::get('secondYear', function () {
        return Inertia::render('secondYear');
    })->name('secondYear');


    /* Third year page */
    Route::get('thirdYear', function () {
        return Inertia::render('thirdYear');
    })->name('thirdYear');


    /* Fourth year page */
    Route::get('fourthYear', function () {
        return Inertia::render('fourthYear');
    })->name('fourthYear');


    /* Student page */
    Route::get('students', function () {
        return Inertia::render('students');
    })->name('students');

    Route::get('students', [RegisteredUserController::class, 'getStudents'])->name('students');


});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
