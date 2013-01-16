<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'muskego4_wrd2');

/** MySQL database username */
define('DB_USER', 'muskego4_jared');

/** MySQL database password */
define('DB_PASSWORD', 'B@seB@ll2');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'TOYmeQ1X1qX9ysy8cr1zy1NKDZ5z9da9eNn7dghfMpUBccLPkh4eOEXzC0B3gMdm');
define('SECURE_AUTH_KEY',  'pi2RjjRHUPYoXv83EcikIDVa1AcVhG4niGPwTRDb3g77S0RYwT9L53itIOAuVfMD');
define('LOGGED_IN_KEY',    '3MQX1pOHYmj9cDVxEKOtLGDdf4rA7HcZqJl6Lf4Oc9MwIZR3UqB4ABFu2NViKZCx');
define('NONCE_KEY',        '9WQNMydOXmGK4sfr8lH9HYJfiaF0AchnoiHkGeaEaOPXXxf7Py0OBpoxhQk3Aqhb');
define('AUTH_SALT',        'KDXBQ29wNd74pgGGapKEVm3D6rhKU4fpW5rT9Fq44IDiyWlsB2xPKQRRt24QzaCU');
define('SECURE_AUTH_SALT', 'VPk3UUrXmnUgaFtGgg27XrB2bDzqMVbewXz7TpYin6aKCrL12VwTRtrLMBIYzsrM');
define('LOGGED_IN_SALT',   '9OYsnV5Bzg8WxJDAWRTe9L8OEVdDWFOBCvmL2vm1vj6REi4B1lDxae29wd3hOh6X');
define('NONCE_SALT',       'yOJN0X5hlqcrxnTxnIIYicg7ZmNWxdbFTbTQRDMWzJVkgPd3MQHgwKbYZ8362FaY');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
