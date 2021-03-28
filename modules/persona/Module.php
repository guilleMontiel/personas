<?php

namespace app\modules\persona;

/**
 * persona module definition class
 */
class Module extends \yii\base\Module
{
    /**
     * {@inheritdoc}
     */
    public $controllerNamespace = 'app\modules\persona\controllers';

    /**
     * {@inheritdoc}
     */
    public function init()
    {
         parent::init();
        $this->setAliases([
            'persona-assets' => __DIR__ . '/assets'
        ]);

        // custom initialization code goes here
    }
}
