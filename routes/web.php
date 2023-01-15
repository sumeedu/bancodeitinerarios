<?php

use App\Http\Controllers\FavouriteController;
use App\Http\Controllers\ItineraryController;
use App\Http\Controllers\ReviewController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

require __DIR__.'/auth.php';

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});

Route::get('/', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::resource('reviews', ReviewController::class)
    ->only(['store', 'delete'])
    ->middleware(['auth', 'verified']);


Route::controller(ItineraryController::class)->group(function() {

    Route::middleware(['auth', 'verified'])->group(function() {

        Route::get('/itinerarios/cadastrar', 'create')->name('itineraries.create');
        Route::post('/itinerarios', 'store')->name('itineraries.store');

        Route::get('/itinerarios/{itinerary}/edit', 'edit')->name('itineraries.edit');
        Route::put('/itinerarios/{itinerary}', 'update')->name('itineraries.update');

        Route::delete('/itinerarios', 'destroy')->name('itineraries.destroy');

        Route::resource('favourite', FavouriteController::class)->only([
            'index', 'store', 'destroy'
        ]);
    });

    Route::get('/itinerarios', 'index')->name('itineraries.index');
    Route::get('/itinerarios/categoria/{slug}', 'category')->name('itineraries.category');
    Route::get('/itinerarios/{itinerary}', 'show')->name('itineraries.show');
});
