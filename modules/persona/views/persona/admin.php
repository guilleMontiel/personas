<div class="card mb-2">
    <div class="card-body">
        <h2>Lista de Personas</h2>
    </div>
</div>
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="<?= Yii::$app->urlManager->createUrl('/persona')?>">Home</a></li>
      <li class="breadcrumb-item active">Lista de Personas</li>
  </ol>
</nav>
<div class="container">
<div class="card">
    <div class="card-header">
        <a href="#" class="btn btn-info text-white"><i class="fa fa-plus-circle"></i> Nueva Persona</a>
    </div>
    <div class="card-body">
        <table class="table table-sm">
            <thead>
                <tr>
                    <th>NOMBRE Y APELLIDO</th>
                    <th>DNI</th>
                    <th>TELEFONO</th>
                    <th>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($personas as $persona){ ?>
                <tr>
                    <td><?= $persona->nombre.' '.$persona->apellido ?></td>
                    <td><?= $persona->dni ?></td>
                    <td><?= $persona->telefono ?></td>
                    <td>
                        <a href="<?= Yii::$app->urlManager->createUrl('view') ?>"><i class="fa fa-eye"></i></a>
                        <a class="text-danger" href="<?= Yii::$app->urlManager->createUrl('delete') ?>"><i class="fa fa-times-circle"></i></a>
                        <a href="<?= Yii::$app->urlManager->createUrl('direccion/administrar/persona').'/'.$persona->dni ?>"><i class="fa fa-home"></i></a>
                    </td>
                </tr>
                <?php } ?>
            </tbody>
        </table>
    </div>
</div>
</div>