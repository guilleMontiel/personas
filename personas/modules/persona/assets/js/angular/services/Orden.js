app.service('Orden', function($http) {
    
   return{

        nuevaOrden:function(datos){
            return $http.post(APIURL+'/orden/nuevo',{datos:datos}).then(function(resp){
                return resp.data;
            });
        },
        listar:function(id){
            return $http.get(APIURL+'/orden/listar/'+id).then(function(resp){
                return resp.data;
            });
        },
        detalle:function(id){
            return $http.get(APIURL+'/orden/detalle/'+id+'?expand=Responsable.Usuario.Persona,Estado,Inmueble,Tipotarea,Estadodescripcion,Supervisor.Persona').then(function(resp){
                return resp.data;
            });
        },
        aceptar:function(orden,usuario){
            return $http.put(APIURL+'/orden/aceptar',{orden:orden,user:usuario}).then(function(resp){
                return resp.data;
            });
        },
        rechazar:function(orden,usuario,observacion){
            return $http.put(APIURL+'/orden/rechazar',{orden:orden,user:usuario,observacion:observacion}).then(function(resp){
                return resp.data;
            });
        },
        filtrar:function(datos){
           return $http.post(APIURL+'/orden/filtrar',{datos:datos}).then(function(resp){
                return resp.data;
            }); 
        },
        listarArchivos:function(id){
            return $http.get(APIURL+'/orden/archivolistar/'+id).then(function(resp){
                return resp.data;
            }); 
        },
        subirArchivo: function(form_data){
            return $http.post(APIURL+'/orden/subirarchivo', form_data, {transformRequest: angular.identity, headers: {'Content-Type': undefined,'Process-Data': false}}).then(function(response){
                return response;
            });
        },
        descargarArchivo:function(idarchivo){
            return $http.get(APIURL+'/orden/descargararchivo/'+idarchivo,{ responseType: 'arraybuffer' }).then(function(resp){
                return resp.data;
            });
        },
        finalizar:function(orden,estado,observacion){
            return $http.put(APIURL+'/orden/finalizar',{orden:orden,estado:estado,observacion:observacion}).then(function(resp){
                return resp.data;
            });
        },
        anular:function(orden,observacion){
            return $http.put(APIURL+'/orden/anular',{orden:orden,observacion:observacion}).then(function(resp){
                return resp.data;
            });
        }
        
    };

});


