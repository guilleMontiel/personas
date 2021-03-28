app.directive("fileInput", function($parse){
    return{
        link: function($scope, element, attrs){
            element.on("change", function(event){
                var files = event.target.files;
                //console.log(files[0].name);
                $parse(attrs.fileInput).assign($scope, element[0].files);
                $scope.$apply();
            });
        }
    }
});
app.controller('newOrdenController',['$scope','Usuario','Codigo','Inmueble','Orden','Operario','$window','$ngConfirm',function($scope,Usuario,Codigo,Inmueble,Orden,Operario,$window,$ngConfirm) {

   $scope.orden = {tipo_tarea:{},fecha:new Date(),hora:new Date(),responsables:[],lugar_provincia:{},lugar_localidad:{},lugar_direccion:'',descripcion:''};
   $scope.usuarios = [];
   $scope.listaTareas = [];
   $scope.listaProvincias = [];
   $scope.listaLocalidades = [];
   $scope.dateOptions = { formatYear: 'yy', minDate: new Date(1989,1,1),startingDay:1};
   $scope.altInputFormats = ['M!/d!/yyyy'];
   $scope.format = "dd/MM/yyyy";
   $scope.picker1 = {opened: false};
   $scope.picker2 = {opened: false};
   $scope.hstep = 1;
   $scope.mstep = 1;
   $scope.ismeridian = false;
   $scope.guardando = 0; 
   $scope.operarios = [];
    
   $scope.cargarListas = function(){
       
        Usuario.getListaUsuarios('02').then(function(usuarios){
           $scope.usuarios = usuarios;
        },function(error){
            console.error(error);
        });

        Operario.listarPorSupervisor($window.USER).then(function(operarios){
           $scope.operarios = operarios;
        },function(error){
            console.error(error);
        });
        Codigo.listarPorDominio('tipo_tarea').then(function(tiposTareas){
            $scope.listaTareas = tiposTareas;
        },function(error){
            console.error(error);
        });

        Inmueble.listar().then(function(inmuebles){
           $scope.listaInmuebles = inmuebles; 
        });
    
   };
   
   $scope.abrirpicker = function(picker){
       if(picker==1){
        $scope.picker1.opened = true;
       }else if(picker == 2){
        $scope.picker2.opened = true;   
       }
       
   };
   
   $scope.agregarResponsable = function(){
       
       $scope.orden.responsables.push({nombre:'',apellido:'',id:''});
   };
        
   $scope.guardar = function(){
                     
       $scope.guardando = 1;
       var hora_formateada = moment($scope.orden.hora).format('LT');       
       $scope.orden.hora = hora_formateada;
       $scope.orden.id_supervisor = $window.USER;
       
       Orden.nuevaOrden($scope.orden).then(function(orden){
           
           $scope.guardando = 0;
           $ngConfirm({
                theme: 'material',
                title: 'EXITO',
                content: 'NUEVA ORDEN GENERADA',
                type: 'green',
                buttons: {
                    OK: {
                        text: 'OK',
                        btnClass: 'btn-blue',
                        action: function(scope, button){
                             window.location.href = 'index.php?r=orden/orden/view&id='+orden; 
                        }
                    },
                },
            }); 
       },function(error){
           
           $scope.guardando = 0;
           $scope.cargarError(error.data.message);          
       });
       
   };
 
  
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
    
   $scope.cargarListas();
}]);

app.controller('adminOrdenController',['$scope','Usuario','Codigo','Orden','$window','$ngConfirm','Operario',function($scope,Usuario,Codigo,Orden,$window,$ngConfirm,Operario) {
   
    $scope.listaOrdenes = [];
    $scope.listaTareas = [];
    $scope.listaUsuarios = [];
    $scope.listaEstados = [];
    $scope.cambiandoEstado = 0;
    $scope.orden_observacion = null;
    $scope.orden = null;
    $scope.filtros = {responsable:null,tarea:null,inicio_desde:null,inicio_hasta:null,fin_desde:null,fin_hasta:null};
    $scope.dateOptions = { formatYear: 'yy', minDate: new Date(1989,1,1),startingDay:1};
    $scope.altInputFormats = ['M!/d!/yyyy'];
    $scope.format = "dd/MM/yyyy";
    $scope.picker = {picker1:false,picker2:false,picker3:false,picker4:false};
    $scope.filters = {estado:'',tipotarea:{descripcion:''},responsable:{usuario:{persona:{nombre:'',apellido:''}}}};
    
    //ABRE EL DATEPICKER QUE SE HIZO CLICK
    $scope.abrirpicker = function(opcion){        
        if(opcion==1){
            $scope.picker.picker1 = true;
        }
         if(opcion==2){
            $scope.picker.picker2 = true;
        }
         if(opcion==3){
            $scope.picker.picker3 = true;
        }
         if(opcion==4){
            $scope.picker.picker4 = true;
        }
    }
    
    $scope.cargarListado = function(){
        
        Orden.listar($window.USER).then(function(ordenes){
            $scope.listaOrdenes = ordenes;
        },function(error){
            console.error(error.data.message);
        });
        
        
         Codigo.listarPorDominio('tipo_tarea').then(function(tiposTareas){
            $scope.listaTareas = tiposTareas;
        },function(error){
            console.error(error);
        });
         Codigo.listarPorDominio('estado_orden').then(function(estados){
            $scope.listaEstados = estados;
        },function(error){
            console.error(error);
        });
                
        Operario.listarPorSupervisor($window.USER).then(function(operarios){
           $scope.listaUsuarios = operarios;
        },function(error){
            console.error(error);
        });
        
    };
    
    //EL OPERARIO ACEPTA LA ORDEN DE TRABAJO
    $scope.aceptarOrden = function(orden){
        $scope.cambiandoEstado = 1;
        Orden.aceptar(orden,$window.USER).then(function(resp){
            $scope.cargarExito(resp);
            $scope.cambiandoEstado = 0;
            $scope.cargarListado();
        },function(error){
            $scope.cambiandoEstado = 0;
            $scope.cargarError(error.data.message);
        });
        
    };
    
    /*
     * ABRE EL MODAL PARA INGRESAR EL MOTIVO DE RECHAZO DE LA ORDEN.
     * 
     */
    $scope.modalrechazarOrden = function(orden){
        
        $scope.orden = null;        
        $ngConfirm({
            theme: 'material',
            title: '¡Atencion!',
            content: 'Se va a rechazar la orden '+orden,
            type: 'orange',
            buttons: {
                OK: {
                    text: 'aceptar',
                    action: function(scope, button){
                        $scope.orden = orden;
                        $("#observacionModal").modal('show');                                
                    }
                },
                Cancelar: {
                    text: 'Cancelar',
                    action: function(scope, button){

                    }
                },
            },
        });
    };
    
    /*
     * GUARDA LOS DATOS DEL MODAL RECHAZAR ORDEN
     */
    $scope.guardarRechazarOrden = function(){
        $scope.cambiandoEstado = 1;
         Orden.rechazar($scope.orden,$window.USER,$scope.orden_observacion).then(function(resp){
            $scope.cargarExito(resp);
            $scope.cambiandoEstado = 0;
            $scope.cargarListado();
            
            $("#observacionModal").modal('hide');
        },function(error){
            $scope.cambiandoEstado = 0;
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
                });
    };
    
    //CARGA LOS MENSAJES DE ERROR
    $scope.cargarError = function(error){
        $ngConfirm({
                    theme: 'material',
                    title: 'ERROR',
                    content: error,
                    type: 'red',                       
                });
    };
    
    $scope.aplicarFiltro = function(){
        
        $scope.filters.tipotarea.descripcion = ''; 
        $scope.filters.responsable.usuario.persona.nombre = '';
        $scope.filters.responsable.usuario.persona.apellido = '';
        $scope.filters.estado = '';
        
        if($scope.tareaElegida!=null){
            $scope.filters.tipotarea.descripcion = $scope.tareaElegida.descripcion;
        }
        
        if($scope.responsableElegido!=null){
            $scope.filters.responsable.usuario.persona.nombre = $scope.responsableElegido.Usuario.Persona.nombre;
            $scope.filters.responsable.usuario.persona.apellido = $scope.responsableElegido.Usuario.Persona.apellido;
        }
        
        if($scope.estadoElegido!=null){
            $scope.filters.estado = $scope.estadoElegido.codigo;
        }
        
    }
    
    $scope.filtrar = function(){
      $scope.filtros.user = $window.USER;
      Orden.filtrar($scope.filtros).then(function(ordenes){
          $scope.listaOrdenes = ordenes;
      },function(error){
          console.info(error);
      });
    };
            
    $scope.estadoClass = function(estado){
       
       return {"text-primary":estado=='01',"text-info":estado=='02',"text-success":estado=='03',"text-warning":estado=='04',"text-danger":estado=='05'};                    
    }
    
    $scope.cargarListado();
    
}]);

app.controller('viewOrdenController',['$scope','Orden','$window','$ngConfirm',function($scope,Orden,$window,$ngConfirm) {
   
    $scope.id = $window.ordenid;
    $scope.mensaje_error = null;
    $scope.orden = null;
    $scope.lista_archivos = [];
    $scope.anulando = 0;
    $scope.subiendo = 0;
    $scope.ordenRechazada = false;
    
    
    $scope.cargar = function(){
        Orden.detalle($scope.id).then(function(datos){
            $scope.orden = datos;
            
            Orden.listarArchivos($scope.orden.id).then(function(archivos){
                $scope.lista_archivos = archivos;
            });
            
            angular.forEach($scope.orden.Responsable,function(responsable){
                if(responsable.id_operario==$window.USER && (responsable.aceptado!=null && responsable.aceptado==false)){
                    $scope.ordenRechazada = true;
                }
            })
            
        },function(error){
            $scope.mensaje_error = error.data.message;
        });
        
    };
    
    //ABRE EL MODAL CON UN TEXTAREA PARA LA DESCRIPCION. SE REUTILIZA EN OTRAS FUNCIONES
    $scope.modalOrdenObservacion = function(opcion){
        $scope.opcion = opcion;        
        $("#observacionModal").modal('show');        
    };
    
    //SUBE UN ARCHIVO A LA API. SOLO LOS SUPERVISORES PUEDE SUBIR ARCHIVOS    
    $scope.subirArchivo = function(){
        
        $scope.subiendo = 1;
        var form_data = new FormData();
        angular.forEach($scope.files, function(file){
            form_data.append('file', file);
            form_data.append('orden', $scope.orden.num_orden);
        });

        Orden.subirArchivo(form_data).then(function(response){
            
            $ngConfirm({
                title:'EXITO',
                type: 'green',
                content: response.data,
                autoClose: 'ok|3500',
                buttons: {
                    ok: {
                        action: function () {
                            $scope.subiendo = 0;
                            $("#modalsubirarchivo").modal('hide');
                            $('body').removeClass('modal-open');
                            $('.modal-backdrop').remove();
                            $scope.cargar();
                        }
                    }
                },
            });
        },function(error){
            $scope.subiendo = 0;
            $ngConfirm({
                title:'ERROR',
                type: 'red',
                content: error.data.message,
                buttons: {
                    ok: {
                        action: function () {
                        }
                    }
                },
            });
        });
    }

    //DESCARGA EL ARCHIVO DESDE EL SERVIDOR
    $scope.descargarArchivo = function(idarchivo,nombre){
        
        Orden.descargarArchivo(idarchivo).then(function(data){
            if(data===null){
                $ngConfirm({title:'ERROR',content:'NO SE ENCONTRO EL ARCHIVO'});
                return false;
            }
            var file = new Blob([data], {
                type: 'application/pdf'
            });
            var fileURL = URL.createObjectURL(file);
            var a = document.createElement('a');
            a.href = fileURL;
            a.target = '_blank';
            a.download = nombre;
            document.body.appendChild(a); //crea un link "a"
            a.click(); //click en el link "a"
            document.body.removeChild(a); //elimina el elemento "a"


        },function(error){
            
            if ('TextDecoder' in window) {
                // Decode as UTF-8
                var dataView = new DataView(error.data);
                var decoder = new TextDecoder('utf8');
                var response = JSON.parse(decoder.decode(dataView));
            } else {
                
                var decodedString = String.fromCharCode.apply(null, new Uint8Array(error.data));
                var response = JSON.parse(decodedString);
            }
            console.log(response);
            $ngConfirm({title:'ERROR',type:'red',content:response.message});
        });
    };
    
    //MARCA LA ORDE COMO FINALIZA O FINALIZADA PARCIALMENTE    
    $scope.marcarFinalizada = function(estado){
      
        Orden.finalizar($scope.orden.num_orden,estado,$scope.orden_observacion).then(function(resp){
            $("#observacionModal").modal('hide');
            $scope.cargar();
            $scope.cargarExito(resp);
            
        },function(error){
            $scope.cargarError(error.data.message);
        });
        
    };
    
    //EL SUPERVISOR ANULA LA ORDEN
    $scope.anular = function(){
        $scope.anulando = 1;
        Orden.anular($scope.orden.num_orden,$scope.orden_observacion).then(function(resp){
            
            $scope.cargar();
            $scope.anulando = 0;
            $("#observacionModal").modal('hide');
            $scope.cargarExito(resp);
           
        },function(error){
            $scope.anulando = 0;
            $scope.cargarError(error.data.message);
        });
    }
    
   //SE ACEPTA LA ORDEN POR EL OPERARIO 
   $scope.aceptarOrden = function(orden){
        $scope.cambiandoEstado = 1;
        Orden.aceptar(orden,$window.USER).then(function(resp){
              $scope.cargar();
            $scope.cargarExito(resp);
            $scope.cambiandoEstado = 0;
          
        },function(error){
            $scope.cambiandoEstado = 0;
            $scope.cargarError(error.data.message);
        });
        
    };
    
    //DISPARA UN MENSAJE DE ALERTA CUANDO EL OPERARIO RECHAZA UNA ORDEN DE TRABAJO
    $scope.modalrechazarOrden = function(orden){
        
             
        $ngConfirm({
            theme: 'material',
            title: '¡Atencion!',
            content: 'Se va a rechazar la orden '+orden,
            type: 'orange',
            buttons: {
                OK: {
                    text: 'aceptar',
                    action: function(scope, button){
                        
                        $("#observacionModal").modal('show');                                
                    }
                },
                Cancelar: {
                    text: 'Cancelar',
                    action: function(scope, button){

                    }
                },
            },
        });
    };
    
    
    
    //GUARDA LOS DATOS DEL MODAL. SE RECHAZA LA ORDEN POR EL OPERARIO
    $scope.guardarRechazarOrden = function(){
        $scope.cambiandoEstado = 1;
         Orden.rechazar($scope.orden.num_orden,$window.USER,$scope.orden_observacion).then(function(resp){
            $scope.cargarExito(resp);
            $scope.cambiandoEstado = 0;
            $scope.cargar();
            
            $("#observacionModal").modal('hide');
        },function(error){
            $scope.cambiandoEstado = 0;
            $scope.cargarError(error.data.message);
        });
    }     
    
    //CLASE CSS CON LOS COLORES DEPENDIENDO EL ESTADO DE LA ORDEN
    $scope.estadoClass = function(estado){
       return {"text-primary":estado=='01',"text-info":estado=='02',"text-success":estado=='03',"text-warning":estado=='04',"text-danger":(estado=='05'||estado=='06')};
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