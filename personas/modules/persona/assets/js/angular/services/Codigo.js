app.service('Codigo', function($http) {
    
   return{

        listarPorDominio:function(dominio){
            return $http.get(APIURL+'/consulta/listarpordominio/'+dominio).then(function(resp){
                return resp.data;
            });
        },

        
    };

});


