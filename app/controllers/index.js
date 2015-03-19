var data = [];

if (Ti.Platform.osname == 'android') {

	function loop3() {
		for (var i = 0; i < 6; i++) {
			var row = Ti.UI.createTableViewRow({
				height : 50,
				name : i,
				selectedColor : 'blue',
				name : 'n' + i,

			});

			var etiqueta = Ti.UI.createLabel({
				text : 'row ' + i,
				color : 'black',
				left : 12

			});
			var etiqueta2 = Ti.UI.createLabel({
				text : 'row ' + i + 1,
				color : 'black',
				left : 190

			});

			var etiqueta3 = Ti.UI.createLabel({
				text : 'row ' + i + 2,
				color : 'black',
				right : 140

			});
			var btnBorrar = Ti.UI.createButton({
				right : 12,
				height : 30,
				width : 35,
				font : {
					fontSize : 18,
				},
				title : 'X',
				color : 'white',
				backgroundColor : 'red',
				name : 'n' + i
			});

			row.add(etiqueta);
			row.add(etiqueta2);
			row.add(etiqueta3);
			row.add(btnBorrar);
			
			data.push(row);

			btnBorrar.addEventListener('click', function(e) {
				var rows = Ti.UI.createTableViewRow({
					title : "nuevos",
					name : 'inuevo'
				});
				data.push(rows);
			});

		}
	
		$.productosEleg.data = data;
		data=[];
	};
	loop3();
	
	setInterval(function() {
		loop3();
	}, 6000);



	$.productosEleg.addEventListener('longclick', function(e) {
		var index = $.productosEleg.getIndexByName(e.rowData.name);
		$.productosEleg.deleteRow(index);

	});

} else {
	alert('this is an android application :)');
}

$.index.open();
