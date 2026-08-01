<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::get('dashboard', [ProductController::class, 'index'])->name('dashboard');
    Route::post('products', [ProductController::class, 'store'])->name('parking.store');
    Route::put('products/{product}', [ProductController::class, 'update'])->name('parking.update');
    Route::delete('products/{product}', [ProductController::class, 'destroy'])->name('parking.destroy');
});

require __DIR__.'/settings.php';

