<?php

/* @var $this yii\web\View */

$this->title = 'Demo Personas';
?>
<div class="site-index">

    <div class="jumbotron">
        <h1>Bienvenido</h1>

        <p class="lead">En este proyecto encontraras el administrador de personas y direcciones.</p>
        <p>En este demo se pueden crea,modificar y eliminar las personas.</p>
        <p>Las direcciones se crean, se modifican y se eliminan.</p>
        <p>Las direcciones se deben asociar siempre a una persona. La persona puede tener N direcciones.</p>
        <a class="btn btn-success" href="<?= Yii::$app->urlManager->createUrl('/persona') ?>">Ingresar <i class="glyphicon glyphicon-log-in"></i></a>
    </div>

    <div class="body-content container">
        
        

    </div>
</div>
