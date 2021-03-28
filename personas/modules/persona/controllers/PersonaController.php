<?php

namespace app\modules\persona\controllers;
use \app\modules\persona\models\Persona;

class PersonaController extends \yii\web\Controller
{
    
    public function actionAdmin(){
        $personas = Persona::find()->all();
        return $this->render('admin',array('personas'=>$personas));
    }

}
