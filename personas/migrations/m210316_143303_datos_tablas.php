<?php

use yii\db\Migration;

/**
 * Class m210316_143303_datos_tablas
 */
class m210316_143303_datos_tablas extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
               
            
        $this->insert('persona', array(
            'nombre'=>'Miguel',
            'apellido'=>'Sachez',
            'dni'=>'12345678',
            'telefono'=>'445776',
        ));
        $this->insert('persona', array(
            'nombre'=>'Lorena',
            'apellido'=>'Muñoz',
            'dni'=>'554433552',
            'telefono'=>'9987622',
        ));
        $this->insert('direccion',array(
            'calle'=>'San Martin',
            'numero'=>'445',
        ));
        $this->insert('direccion',array(
            'calle'=>'Moreno',
            'numero'=>'12480',
        ));
        $this->insert('persona_direccion', array(
            'dni_persona'=>'12345678',
            'id_direccion'=>1,
            'activo'=>true
        ));
        $this->insert('persona_direccion', array(
            'dni_persona'=>'554433552',
            'id_direccion'=>2,
            'activo'=>true
        ));
        
        
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m210316_143303_datos_tablas cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m210316_143303_datos_tablas cannot be reverted.\n";

        return false;
    }
    */
}
