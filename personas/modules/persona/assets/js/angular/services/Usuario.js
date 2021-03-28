app.service('Usuario', function($http) {
    
   return{

        getListaUsuarios:function(tipo_usuario){
            return $http.get(APIURL+'/consulta/listarusuario/'+tipo_usuario).then(function(resp){
                return resp.data;
            });
        },
        detalle:function(id){
            return $http.get(APIURL+'/consulta/datosusuario/'+id).then(function(resp){
                return resp.data;
            });
        }

        
    };

});


