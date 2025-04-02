<?php
use App\Http\Controllers\API\DashboardController;
use App\Http\Controllers\API\GradesController;
use App\Http\Controllers\API\UsersController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');


Route::middleware(['auth'])->group(function () {

    Route::resource('dashboard', DashboardController::class);


    Route::resource('grades', GradesController::class);


    Route::resource('users', UsersController::class);

});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
