app.service('Inmueble', function($http) {
    
   return{
       
       listar:function(){
            return $http.get(APIURL+'/consulta/listarinmueble').then(function(resp){
                return resp.data;
            });
        },
        descripcionInmueble:function(id){
            return $http.get(APIURL+'/consulta/inmuebledescripcion/'+id).then(function(resp){
                return resp.data;
            });
        },

        
    };

});