<!doctype html>
<?php $this->beginPage(); 
        
use app\modules\persona\assets\CoreAssets;

?>
<html lang="<?= Yii::$app->language ?>" >
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#563d7c">
    <!--<link rel="shortcut icon" href="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/15447218331582994871-512.png" type="image/x-icon" />-->
    <link href="images/person.svg" type="image/x-icon" rel="icon" />
    <?php CoreAssets::register($this); ?>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

    
    <title>Personas</title>
    <?php $this->head() ?>
  </head>
  <body >
      <?php $this->beginBody() ?>
        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="https://www.linkedin.com/in/c-g-montiel/" target="_blank"><i class="fab fa-linkedin"></i> Guillermo Montiel</a>
            
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>    
        </nav>
      
        
        <main role="main" >
            <div class="mt-1">
            <?= $content; ?>
            </div>
        </main>
                
      <?php $this->endBody() ?>
  </body>
</html>
<?php $this->endPage() ?>