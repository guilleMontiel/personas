app.controller('usuarioController',['$scope','Usuario','$window','$ngConfirm','Operario',function($scope,Usuario,$window,$ngConfirm,Operario) {

   $scope.usuario = null;
    $scope.lista_operarios = [];
   
   $scope.cargar = function(){
       Usuario.detalle($window.USER).then(function(usuario){
           $scope.usuario = usuario;
       });
       
        Operario.listarPorSupervisor($window.USER).then(function(operarios){
           $scope.lista_operarios = operarios;
        },function(error){
            console.error(error);
        });
   }
   
   $scope.cambiarPassword = function(){
       
   }
   
   $scope.cargar();
}]);        


