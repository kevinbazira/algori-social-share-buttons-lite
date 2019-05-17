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
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function algori_social_share_buttons_cgb_block_assets() {
	// Styles.
	wp_enqueue_style( 'algori_social_share_buttons-bttn-css', plugins_url( '/dist/bttn-css/bttn.min.css', dirname( __FILE__ ) ) );
	wp_enqueue_style( 'algori_social_share_buttons-fontawesome-css', plugins_url( '/dist/fonts/css/fontawesome.min.css', dirname( __FILE__ ) ) );
	wp_enqueue_style( 'algori_social_share_buttons-fontawesome-brands-css', plugins_url( '/dist/fonts/css/brands.min.css', dirname( __FILE__ ) ) );
	wp_enqueue_style( 'algori_social_share_buttons-fontawesome-solid-css', plugins_url( '/dist/fonts/css/solid.min.css', dirname( __FILE__ ) ) );
	
	wp_enqueue_style( 
		'algori_social_share_buttons-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);
	
} // End function algori_social_share_buttons_cgb_block_assets().

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'algori_social_share_buttons_cgb_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function algori_social_share_buttons_cgb_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'algori_social_share_buttons-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ) // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ) // Version: File modification time.
	);

	// Styles.
	wp_enqueue_style(
		'algori_social_share_buttons-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);
} // End function algori_social_share_buttons_cgb_editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'algori_social_share_buttons_cgb_editor_assets' );
