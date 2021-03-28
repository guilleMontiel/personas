<?php

namespace app\modules\persona\assets;
use yii\web\AssetBundle;
/**
 *
 * @author guille
 */
class PersonaAssets extends AssetBundle
{
    // the alias to your assets folder in your file system
    public $sourcePath = 'persona-assets';

    // finally your files.. 
    public $css = [
        'css/angular-confirm.min.css'
    ];
    public $js = [
        
        'js/angular/angular-confirm.min.js',
        'js/angular/angular-locale_es-ar.js',
        'js/angular/angular-route.js',
        'js/angular/ui-bootstrap-tpls-3.0.6.min.js',
        'js/angular/app.js',
        'js/angular/services/Usuario.js',
        'js/angular/services/Codigo.js',
        'js/angular/services/Inmueble.js',
        'js/angular/services/Orden.js',
        'js/angular/services/Operario.js',
        'js/angular/controller/ordenController.js',
        'js/angular/controller/utilidadesController.js',
        'js/angular/controller/usuarioController.js'
    ];
    
     public $depends = [
        'app\modules\orden\assets\CoreAssets',
    ];
} 