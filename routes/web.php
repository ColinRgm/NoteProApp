<?php
use App\Http\Controllers\API\DashboardController;
use App\Http\Controllers\API\GradeController;
use App\Http\Controllers\API\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');



Route::middleware(['auth'])->group(function () {

    /* -- Dashboard -------------------------------------------------------------------------------------------- */
    Route::resource('dashboard', DashboardController::class);



    /* -- Grades ---------------------------------------------------------------------------------------------------- */
    Route::resource('grades', GradeController::class);



    /* -- Student Page ---------------------------------------------------------------------------------------------- */
    Route::resource('users', UserController::class);

});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
