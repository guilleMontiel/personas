<?php

namespace app\modules\persona\controllers;
use \app\modules\persona\models\Persona;

class PersonaController extends \yii\web\Controller
{
    
    public function actionAdmin(){
        $personas = Persona::find()->all();
        return $this->render('admin',array('personas'=>$personas));
    }
    
    public function actionNew(){
        
    }
    
    
    public function actionView(){
        return $this->render('view');
    }
    
    public function actionDelete($id){
        
    }
    
    public function actionUpdate(){
        
    }

}
