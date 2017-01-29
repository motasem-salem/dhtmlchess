<?php
/**
 * Created by IntelliJ IDEA.
 * User: alfmagne1
 * Date: 28/01/2017
 * Time: 14:06
 */

require_once("../YUICompressor.php");
error_reporting(E_ALL);
ini_set('display_errors', 'on');
date_default_timezone_set("Europe/Berlin");


Minify_YUICompressor::$jarFile = '../minify/yuicompressor-2.4.7/build/yuicompressor-2.4.7.jar';
Minify_YUICompressor::$tempDir = "/tmp";

function parseDirectory($dir, $filename)
{

    $js = "";
    if ($handle = opendir($dir)) {
        /* This is the correct way to loop over the directory. */
        while (false !== ($entry = readdir($handle))) {

            if(strstr($entry, ".js") && !strstr($entry, $filename)){

                $js .= file_get_contents($dir . $entry) . "\n";
            }

        }

        closedir($handle);
    }

    $minifiedJs = Minify_YUICompressor::minifyJs(trim($js));

    $prefix = "// (C) dhtmlchess.com, Alf Kalleland " . date("Y-m-d H:i:s") . "\n";
    file_put_contents($dir. $filename, $prefix . $minifiedJs);

    echo filesize($dir. $filename)."<br>";
}

parseDirectory('../src/wordpress/', "wordpress-editor-minified.js");
parseDirectory('./', "wordpress-templates-minified.js");
