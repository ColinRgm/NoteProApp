<?php
use App\Http\Controllers\API\DashboardController;
use App\Http\Controllers\API\GradesController;
use App\Http\Controllers\API\UsersController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');



Route::middleware(['auth'])->group(function () {



    /* -- Dashboard ------------------------------------------------------------------------------------------------- */
    Route::resource('dashboard', DashboardController::class)->only('index');



    /* -- Grades ---------------------------------------------------------------------------------------------------- */
    Route::resource('grades', GradesController::class)->except('show');

    Route::resource('addGrade', GradesController::class)->only('create');



    /* -- Student Page ---------------------------------------------------------------------------------------------- */
    Route::resource('users', UsersController::class)->except('show');

});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
