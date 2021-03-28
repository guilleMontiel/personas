app.service('Operario', function($http) {
    
   return{

        listarPorSupervisor:function(id){
            return $http.get(APIURL+'/consulta/listaroperarios/'+id+'?expand=Usuario.Persona').then(function(resp){
                return resp.data;
            });
        },        
    };

});


