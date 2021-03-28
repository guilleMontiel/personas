<?php

namespace app\modules\persona\models;

use Yii;

/**
 * This is the model class for table "persona".
 *
 * @property int $id
 * @property string|null $nombre
 * @property string|null $apellido
 * @property int|null $dni
 * @property int|null $cuit_cuil
 * @property string|null $telefono
 * @property string|null $sexo
 */
class Persona extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'persona';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id'], 'required'],
            [['id', 'dni', 'cuit_cuil'], 'integer'],
            [['nombre', 'apellido'], 'string', 'max' => 60],
            [['telefono'], 'string', 'max' => 30],
            [['sexo'], 'string', 'max' => 1],
            [['id'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'nombre' => 'Nombre',
            'apellido' => 'Apellido',
            'dni' => 'Dni',
            'cuit_cuil' => 'Cuit Cuil',
            'telefono' => 'Telefono',
            'sexo' => 'Sexo',
        ];
    }
}
