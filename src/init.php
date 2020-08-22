<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package Algori_Social_Share_Buttons
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function algori_social_share_buttons_cgb_block_assets() { // phpcs:ignore

	// Enqueue Social Share Button styles.
	wp_enqueue_style( 'algori_social_share_buttons-bttn-css', plugins_url( '/dist/bttn-css/bttn.min.css', dirname( __FILE__ ) ) );
	wp_enqueue_style( 'algori_social_share_buttons-fontawesome-css', plugins_url( '/dist/fonts/css/fontawesome.min.css', dirname( __FILE__ ) ) );
	wp_enqueue_style( 'algori_social_share_buttons-fontawesome-brands-css', plugins_url( '/dist/fonts/css/brands.min.css', dirname( __FILE__ ) ) );
	wp_enqueue_style( 'algori_social_share_buttons-fontawesome-solid-css', plugins_url( '/dist/fonts/css/solid.min.css', dirname( __FILE__ ) ) );
	
	// Register block styles for both frontend + backend.
	wp_register_style(
		'algori_social_share_buttons-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register mobile share links script for both frontend + backend.
	wp_register_script(
		'algori_social_share_buttons_mobile_device_links-cgb-block-js', // Handle.
		plugins_url( '/dist/algori-social-share_buttons-mobile-device-links.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-editor' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor script for backend.
	wp_register_script(
		'algori_social_share_buttons-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'algori_social_share_buttons-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script(
		'algori_social_share_buttons-cgb-block-js',
		'cgbGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `cgbGlobal` object.
		]
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'algori-social-share-buttons/block-algori-social-share-buttons', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'algori_social_share_buttons-cgb-style-css',
			// Enqueue JS scripts on both frontend & backend.
			'script'         => 'algori_social_share_buttons_mobile_device_links-cgb-block-js',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'algori_social_share_buttons-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'algori_social_share_buttons-cgb-block-editor-css',
		)
	);
}

// Hook: Block assets.
add_action( 'init', 'algori_social_share_buttons_cgb_block_assets' );
