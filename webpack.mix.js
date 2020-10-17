const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
	.js('resources/js/bootstrap.js', 'public/js')
	//.js('resources/js/bootstrap.min.js', 'public/js')
	.js('resources/js/jquery.nice-select.min.js', 'public/js')
	.js('resources/js/jquery.slicknav.js', 'public/js')
	.js('resources/js/jquery-3.3.1.min.js', 'public/js')
	.js('resources/js/main.js', 'public/js')
	.js('resources/js/mixitup.min.js', 'public/js')
	.js('resources/js/owl.carousel.min.js', 'public/js')
	.sass('resources/sass/app.scss', 'public/css')
	.sass('resources/sass/_base.scss', 'public/css')
	.sass('resources/sass/_blog.scss', 'public/css')
	.sass('resources/sass/_blog-details.scss', 'public/css')
	.sass('resources/sass/_blog-sidebar.scss', 'public/css')
	.sass('resources/sass/_breadcrumb.scss', 'public/css')
	.sass('resources/sass/_checkout.scss', 'public/css')
	.sass('resources/sass/_contact.scss', 'public/css')
	.sass('resources/sass/_footer.scss', 'public/css')
	.sass('resources/sass/_header.scss', 'public/css')
	.sass('resources/sass/_hero.scss', 'public/css')
	.sass('resources/sass/_home-page.scss', 'public/css')
	.sass('resources/sass/_mixins.scss', 'public/css')
	.sass('resources/sass/_responsive.scss', 'public/css')
	.sass('resources/sass/_shop-details.scss', 'public/css')
	.sass('resources/sass/_shop-grid.scss', 'public/css')
	.sass('resources/sass/_shoping-cart.scss', 'public/css')
	.sass('resources/sass/_sidebar.scss', 'public/css')
	.sass('resources/sass/_variable.scss', 'public/css')
	.sass('resources/sass/style.scss', 'public/css');
