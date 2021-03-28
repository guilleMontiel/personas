app.controller('utilidadesController',['$scope','$window','$http','$interval',function($scope,$window,$http,$interval) {
    
    $scope.notificaciones = [];
    
    this.cargarNotificacion = function(){
        $http.get(APIURL+'/consulta/notificacion/'+$window.USER).then(function(resp){
                $scope.notificaciones = resp.data;
        });
    };
    
     //Put in interval, first trigger after 10 seconds 
        var theInterval = $interval(function(){
           this.cargarNotificacion();
        }.bind(this), 10000);    

         $scope.$on('$destroy', function () {
             $interval.cancel(theInterval)
         });


    $scope.verNotificacion = function(){
        $window.location.href = 'index.php?r=orden/notificacion/admin';
    }
   //invoke initialy
   this.cargarNotificacion();
       
}]);

app.controller('notificacionesController',['$scope','$window','$http','$ngConfirm',function($scope,$window,$http,$ngConfirm) {
    
    $scope.notificaciones = [];
    
    $scope.cargar = function(){
        $http.get(APIURL+'/consulta/notificacion/'+$window.USER).then(function(resp){
                $scope.notificaciones = resp.data;
        });
    };
    
    $scope.marcarLeido = function(notificacion){
        $http.put(APIURL+'/consulta/notificacionmarcar',{idnotificacion:notificacion}).then(function(resp){
           $scope.cargarExito(resp.data);
           $scope.cargar();
        },function(error){
            $scope.cargarError(error.data.message);
        });
    }
    
    $scope.marcarTodosLeido = function(){
        $http.put(APIURL+'/consulta/notificacionmarcartodo',{id_usuario:$window.USER}).then(function(resp){
             $scope.cargarExito(resp.data);
             $scope.cargar();   
        },function(error){
            $scope.cargarError(error.data.message);
        });
    }
    
    //CARGA LOS MENSAJES DE EXITO
    $scope.cargarExito = function(mensaje){
        $ngConfirm({
                    theme: 'material',
                    title: 'EXITO',
                    content: mensaje,
                    type: 'green',
                    buttons: {
                        OK: {
                            text: 'OK',
                            btnClass: 'btn-blue',
                            action: function(scope, button){

                            }
                        },
                    },
                });
    };
    
    //CARGA LOS MENSAJES DE ERROR
    $scope.cargarError = function(error){
        $ngConfirm({
                    theme: 'material',
                    title: 'ERROR',
                    content: error,
                    type: 'red',
                    buttons: {
                        OK: {
                            text: 'OK',
                            btnClass: 'btn-blue',
                            action: function(scope, button){

                            }
                        },
                    },
                });
    };
    
    $scope.cargar();   
}]);

