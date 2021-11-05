<?php
/**
 * Plugin Name: Algori Social Share Buttons Lite
 * Plugin URI: https://github.com/kevinbazira/algori-social-share-buttons-lite/
 * Description: <strong>Algori Social Share Buttons</strong> is a Gutenberg Block Plugin that enables you add Social Media Share Buttons to your website. Adding popular social share buttons enables your site visitors to easily send and share your site content with their friends. <strong>This will boost user engagement and grow your site audience</strong>.
 * Author: Kevin Bazira
 * Author URI: http://kevinbazira.com/
 * Version: 1.0.9
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package Algori_Social_Share_Buttons
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
