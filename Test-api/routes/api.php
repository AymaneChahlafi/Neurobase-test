<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});

Route::get('/api/products', [ProductController::class, 'index']);
Route::get('/api/products/{id}', [ProductController::class, 'show']);
Route::post('/api/product/create', [ProductController::class, 'store']);
Route::put('/api/products/{id}', [ProductController::class, 'update']);
Route::delete('/api/products/{id}', [ProductController::class, 'destroy']);


