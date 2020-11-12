Ext.require(['Ext.plugin.Viewport']);
Ext.onReady(function(){
	
	Ext.create('Ext.data.Store', {   
    storeId: 'datosSchedule', 
    fields:[ 'clave', 'materia','docente', 'hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'tipo', 'creditos'],
    data: [ 
        { tipo:'MN', creditos:'4', clave: '7g4C', materia: 'Programacion Logica y Funcional', docente: 'Ulises Juarez Martinez', hora: '07-08', lunes:'L5', martes:'L5', miercoles:'L5', jueves:'L5', viernes:''},
        { tipo:'MN', creditos:'5', clave: '7gAC', materia: 'Aplicaciones Enriquecidas De Internet', docente: 'Monica Ruiz Martinez', hora: '08-09', lunes:'L1', martes:'L1', miercoles:'L1', jueves:'L1', viernes:'L1'},
        { tipo:'MN', creditos:'5', clave: '7gBA', materia: 'Arquitectura De Software Para La Web', docente: 'Alejandro Vasquez Cancino', hora: '13-14', lunes:'L1', martes:'L1', miercoles:'L1', jueves:'L1', viernes:'L1'},
        { tipo:'MN', creditos:'4', clave: '7g7C', materia: 'Sistemas Programables', docente: 'Rafael Herrera Garcia', hora: '14-15', lunes:'LC02', martes:'LC02', miercoles:'LC02', jueves:'LC02', viernes:''},
        { tipo:'MN', creditos:'5', clave: '7g2B', materia: 'Conmutacion Y Enrutamiento De Redes De Datos', docente: 'Alfonso Flores Leal', hora: '15-16', lunes:'L10', martes:'L10', miercoles:'L10', jueves:'L10', viernes:'L10'},
        { tipo:'MN', creditos:'4', clave: '7g3B', materia: 'Taller De Investigacion I', docente: 'Laura Leticia Mendoza Cruz', hora: '16-17', lunes:'CB1', martes:'CB1', miercoles:'CB1', jueves:'CB1', viernes:''},
        { tipo:'MN', creditos:'5', clave: '7g1D', materia: 'Lenguajes Y Automatas II', docente: 'Jose Lauro Cortes Carrera', hora: '17-18', lunes:'LC02', martes:'LC02', miercoles:'LC02', jueves:'LC02', viernes:'LC02'}
		]
	});
	
	
	Ext.create('Ext.grid.Panel', {
		title: 'Horario',
		store: Ext.data.StoreManager.lookup('datosSchedule'), 
		columns: [
            { text: 'Tipo', dataIndex: 'tipo', flex: 1, menuDisabled:true},
			{ text: 'Creditos', dataIndex: 'creditos', flex: 1, menuDisabled:true},
			{ text: 'Clave', dataIndex: 'clave', sortable: false, hideable: false}, 
			{ text: 'Materia', dataIndex: 'materia', flex: 1, menuDisabled:true},
			{ text: 'Docente', dataIndex: 'docente', flex: 1, menuDisabled:true},
			{ text: 'Hora', dataIndex: 'hora', flex: 1, menuDisabled:true},
			{ text: 'Lunes', dataIndex: 'lunes', flex: 1, menuDisabled:true},
			{ text: 'Martes', dataIndex: 'martes', flex: 1, menuDisabled:true},
			{ text: 'Miercoles', dataIndex: 'miercoles', flex: 1, menuDisabled:true},
			{ text: 'Jueves', dataIndex: 'jueves', flex: 1, menuDisabled:true},
			{ text: 'Viernes', dataIndex: 'viernes',flex: 1,menuDisabled:true},
		],
		
		height: 250,width: 1365,renderTo: Ext.getBody() 
	});
});
