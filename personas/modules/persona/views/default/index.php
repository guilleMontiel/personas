<div class="container">
    <div class="row" style="margin-top: 15vh;">
        <div class="col-sm-12 col-md-6">
            <div class="card text-center shadow-lg">
                <div class="card-header"><img src="images/persons.svg" width="140" class="img-responsive"></div>
                <div class="card-body">
                    <p><b>Administrar Personas</b></p>
                    <p>Desde aqui se pueden administrar todos los datos de las personas.</p>
                    <p>Tambien se administra la relacion con las direcciones.</p>
                    <p>Cada uno de estos datos son guardados en la base Mysql</p>                    
                    <a href="<?= Yii::$app->urlManager->createUrl('persona/persona/admin') ?>" class="btn btn-success" type="button">Ingresar</a>
                </div>
            </div>
        </div>
        
        <div class="col-sm-12 col-md-6">
            <div class="card text-center shadow-lg">
                <div class="card-header"><img src="images/home.svg" width="140" class="img-responsive"></div>
                <div class="card-body">
                    <p><b>Administrar Direcciones</b></p>
                    <p>Desde aqui se pueden administrar las direcciones de las personas.</p>
                    <p>Para cada persona puede existir mas de una direcci&oacute;n</p>
                    <p>Cada uno de estos datos son guardados en la base Mysql</p>
                    <a href="<?= Yii::$app->urlManager->createUrl('persona/direccion/admin') ?>" class="btn btn-success" type="button">Ingresar</a>
                </div>
            </div>
        </div>
    </div>
</div>
