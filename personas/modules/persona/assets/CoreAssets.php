<?php

namespace app\modules\persona\assets;
use yii\web\AssetBundle;

class CoreAssets extends AssetBundle
{
    // the alias to your assets folder in your file system
    public $sourcePath = '@persona-assets';

    // finally your files.. 
    public $css = [
      'css/bootstrap4.min.css',
      'css/fontawesome5/css/all.css', 
      'css/style.css',
    ];
    public $js = [
        'js/core/jquery3.3.1.min.js',
        'js/core/bootstrap.min.js',
        'js/core/moment.js',
        'js/angular/angular.js',
                
    ];
    
    
    
} 