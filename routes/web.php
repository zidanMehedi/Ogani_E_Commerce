<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('index');
});
Route::get('blog', function () {
    return view('blog');
});
Route::get('blog-details', function () {
    return view('blog-details');
});
Route::get('checkout', function () {
    return view('checkout');
});
Route::get('contact', function () {
    return view('contact');
});
Route::get('shop-details', function () {
    return view('shop-details');
});
Route::get('shop-grid', function () {
    return view('shop-grid');
});
Route::get('shoping-cart', function () {
    return view('shoping-cart');
});