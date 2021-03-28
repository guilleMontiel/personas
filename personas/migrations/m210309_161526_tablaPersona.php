<?php

use yii\db\Migration;

/**
 * Class m210309_161526_tablaPersona
 */
class m210309_161526_tablaPersona extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
       

            $this->createTable('persona', array(
            'id'=>'int not null AUTO_INCREMENT PRIMARY KEY',
            'nombre'=>'character(60) not null',
            'apellido'=>'character(60) not null',
            'dni'=>'int not null unique',
            'telefono'=>'character varying(30) default null',
            ));
        
            
        
            $this->createTable('direccion', array(
                'id'=>'int not null AUTO_INCREMENT PRIMARY KEY',
                'calle'=>'character(60) not null',
                'numero'=>'int not null',
                'localidad'=>'int default null',
                'provincia'=>'int default null'
            ));
        
            
        
            $this->createTable('persona_direccion', array(
                'id'=>'serial not null AUTO_INCREMENT PRIMARY KEY',
                'dni_persona'=>'integer not null',
                'id_direccion'=>'integer not null',
                'activo'=>'boolean'
            ));
            
            
            $this->addForeignKey('personafk', 'persona_direccion', 'dni_persona','persona','dni');
            $this->addForeignKey('direccionfk', 'persona_direccion', 'id_direccion','direccion','id');
            
        
        echo 'EXITO';
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('persona');                
        echo 'FALLO';
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m210309_161526_tablaPersona cannot be reverted.\n";

        return false;
    }
    */
}
