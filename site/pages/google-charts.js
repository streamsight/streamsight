/********************************************************************

Nucleus Admin's JavaScript Document for Google Chart Examples
Created By: Amazyne Themes

*********************************************************************/


$(function() {
	
	/* Loading Core Package */
	
	google.charts.load('current', {packages: ['corechart']});
	
	/* Area Chart */
	
	function drawAreaChart() {
		var data = google.visualization.arrayToDataTable([
		  ['Year', 'Sales', 'Expenses'],
		  ['2013',  1000,      400],
		  ['2014',  1170,      460],
		  ['2015',  660,       1120],
		  ['2016',  1030,      540]
		]);

		var options = {
		  title: 'Company Performance',
		  titleTextStyle: {
			color: '#a2a7b1'
		  },
		  hAxis: {title: 'Year',  titleTextStyle: {color: '#a2a7b1'}, textStyle:{color: '#a2a7b1'}, gridlines: {color: '#a2a7b1'}},
		  vAxis: {minValue: 0,  titleTextStyle: {color: '#a2a7b1'}, textStyle:{color: '#a2a7b1'}, gridlines: {color: '#a2a7b1'}},
		  backgroundColor: 'transparent',
		  "legend" : { "textStyle" : { "color" : "#a2a7b1"} }
		};

		var chart = new google.visualization.AreaChart(document.getElementById('gc-area'));
		chart.draw(data, options);
	}
	
	/* Bar Chart */
	
	function drawBarChart() {

		var data = google.visualization.arrayToDataTable([
			['City', '2010 Population',],
			['New York City, NY', 8175000],
			['Los Angeles, CA', 3792000],
			['Chicago, IL', 2695000],
			['Houston, TX', 2099000],
			['Philadelphia, PA', 1526000]
		]);

		var options = {
			title: 'Population of Largest U.S. Cities',
			  titleTextStyle: {
				color: '#a2a7b1'
			  },
			backgroundColor: 'transparent',
			chartArea: {width: '50%'},
			hAxis: {
			  title: 'Total Population',
			  minValue: 0,  titleTextStyle: {color: '#a2a7b1'}, textStyle:{color: '#a2a7b1'}, gridlines: {color: '#a2a7b1'}
			},
			vAxis: {
			  title: 'City',  titleTextStyle: {color: '#a2a7b1'}, textStyle:{color: '#a2a7b1'}, gridlines: {color: '#a2a7b1'}
			},
			"legend" : { "textStyle" : { "color" : "#a2a7b1"} }
		};

		var chart = new google.visualization.BarChart(document.getElementById('gc-bar'));
		chart.draw(data, options);
		
	}
	
	/* Combo Chart */
	
	function drawComboChart() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
			['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
			['2004/05',  165,      938,         522,             998,           450,      614.6],
			['2005/06',  135,      1120,        599,             1268,          288,      682],
			['2006/07',  157,      1167,        587,             807,           397,      623],
			['2007/08',  139,      1110,        615,             968,           215,      609.4],
			['2008/09',  136,      691,         629,             1026,          366,      569.6]
		]);

		var options = {
		  title : 'Monthly Coffee Production by Country',
		  titleTextStyle: {
			color: '#a2a7b1'
		  },
		  backgroundColor: 'transparent',
		  vAxis: {title: 'Cups',  titleTextStyle: {color: '#a2a7b1'}, textStyle:{color: '#a2a7b1'}, gridlines: {color: '#a2a7b1'}},
		  hAxis: {title: 'Month',  titleTextStyle: {color: '#a2a7b1'}, textStyle:{color: '#a2a7b1'}, gridlines: {color: '#a2a7b1'}},
		  seriesType: 'bars',
		  series: {5: {type: 'line'}},
		  "legend" : { "textStyle" : { "color" : "#a2a7b1"} }
		};

		var chart = new google.visualization.ComboChart(document.getElementById('gc-combo-chart'));
		chart.draw(data, options);
	}

	/* Histogram */
	
	function drawHistogram() {
		var data = google.visualization.arrayToDataTable([
			['Dinosaur', 'Length'],
			['Acrocanthosaurus (top-spined lizard)', 12.2],
			['Albertosaurus (Alberta lizard)', 9.1],
			['Allosaurus (other lizard)', 12.2],
			['Apatosaurus (deceptive lizard)', 22.9],
			['Archaeopteryx (ancient wing)', 0.9],
			['Argentinosaurus (Argentina lizard)', 36.6],
			['Baryonyx (heavy claws)', 9.1],
			['Brachiosaurus (arm lizard)', 30.5],
			['Ceratosaurus (horned lizard)', 6.1],
			['Coelophysis (hollow form)', 2.7],
			['Compsognathus (elegant jaw)', 0.9],
			['Deinonychus (terrible claw)', 2.7],
			['Diplodocus (double beam)', 27.1],
			['Dromicelomimus (emu mimic)', 3.4],
			['Gallimimus (fowl mimic)', 5.5],
			['Mamenchisaurus (Mamenchi lizard)', 21.0],
			['Megalosaurus (big lizard)', 7.9],
			['Microvenator (small hunter)', 1.2],
			['Ornithomimus (bird mimic)', 4.6],
			['Oviraptor (egg robber)', 1.5],
			['Plateosaurus (flat lizard)', 7.9],
			['Sauronithoides (narrow-clawed lizard)', 2.0],
			['Seismosaurus (tremor lizard)', 45.7],
			['Spinosaurus (spiny lizard)', 12.2],
			['Supersaurus (super lizard)', 30.5],
			['Tyrannosaurus (tyrant lizard)', 15.2],
			['Ultrasaurus (ultra lizard)', 30.5],
			['Velociraptor (swift robber)', 1.8]
		]);

		var options = {
			title: 'Lengths of dinosaurs, in meters',
		  titleTextStyle: {
			color: '#a2a7b1'
		  },
			backgroundColor: 'transparent',
			legend: { position: 'none' },
			hAxis: {
				titleTextStyle: {color: '#a2a7b1'}, textStyle:{color: '#a2a7b1'}, gridlines: {color: '#a2a7b1'}
			},
			vAxis: {
				titleTextStyle: {color: '#a2a7b1'}, textStyle:{color: '#a2a7b1'}, gridlines: {color: '#a2a7b1'}
			}
		};

		var chart = new google.visualization.Histogram(document.getElementById('gs-histogram'));
		chart.draw(data, options);
	}
	
	/* Curve Chart */
	
	function drawCurveChart() {
		var data = google.visualization.arrayToDataTable([
			['Year', 'Sales', 'Expenses'],
			['2004',  1000,  400],
			['2005',  1170, 460],
			['2006',  660, 1120],
			['2007',  1030, 540]
		]);

		var options = {
			title: 'Company Performance',
		  titleTextStyle: {
			color: '#a2a7b1'
		  },
			backgroundColor: 'transparent',
			curveType: 'function',
			legend: { position: 'bottom', "textStyle" : { "color" : "#a2a7b1"} },
			hAxis: {
				titleTextStyle: {color: '#a2a7b1'}, textStyle:{color: '#a2a7b1'}, gridlines: {color: '#a2a7b1'}
			},
			vAxis: {
				titleTextStyle: {color: '#a2a7b1'}, textStyle:{color: '#a2a7b1'}, gridlines: {color: '#a2a7b1'}
			}
		};

		var chart = new google.visualization.LineChart(document.getElementById('gc-curve'));
		chart.draw(data, options);
	}
	
	/* Line Chart */
	
	function drawLineChart() {
		var data = new google.visualization.DataTable();
		data.addColumn('number', 'X');
		data.addColumn('number', 'Dogs');
		data.addColumn('number', 'Cats');

		data.addRows([
			[0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
			[6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
			[12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
			[18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
			[24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
			[30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
			[36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
			[42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
			[48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
			[54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
			[60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
			[66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
		]);

		var options = {
			backgroundColor: 'transparent',
			hAxis: {
				title: 'Time',  titleTextStyle: {color: '#a2a7b1'}, textStyle:{color: '#a2a7b1'}, gridlines: {color: '#a2a7b1'}
			},
			vAxis: {
				title: 'Popularity',  titleTextStyle: {color: '#a2a7b1'}, textStyle:{color: '#a2a7b1'}, gridlines: {color: '#a2a7b1'}
			},
			series: {
				1: {curveType: 'function'}
			},
			"legend" : { "textStyle" : { "color" : "#a2a7b1"} }
		};

		var chart = new google.visualization.LineChart(document.getElementById('gc-line'));
		chart.draw(data, options);
	}
	
	/* Column Chart */
	  
	function drawMultSeries() {
		var data = new google.visualization.DataTable();
		data.addColumn('timeofday', 'Time of Day');
		data.addColumn('number', 'Motivation Level');
		data.addColumn('number', 'Energy Level');

		data.addRows([
			[{v: [8, 0, 0], f: '8 am'}, 1, .25],
			[{v: [9, 0, 0], f: '9 am'}, 2, .5],
			[{v: [10, 0, 0], f:'10 am'}, 3, 1],
			[{v: [11, 0, 0], f: '11 am'}, 4, 2.25],
			[{v: [12, 0, 0], f: '12 pm'}, 5, 2.25],
			[{v: [13, 0, 0], f: '1 pm'}, 6, 3],
			[{v: [14, 0, 0], f: '2 pm'}, 7, 4],
			[{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
			[{v: [16, 0, 0], f: '4 pm'}, 9, 7.5],
			[{v: [17, 0, 0], f: '5 pm'}, 10, 10],
		]);

		var options = {
			title: 'Motivation and Energy Level Throughout the Day',
		  titleTextStyle: {
			color: '#a2a7b1'
		  },
			backgroundColor: 'transparent',
			hAxis: {
				title: 'Time of Day',
				format: 'h:mm a',
				viewWindow: {
					min: [7, 30, 0],
					max: [17, 30, 0]
				},  titleTextStyle: {color: '#a2a7b1'}, textStyle:{color: '#a2a7b1'}, gridlines: {color: '#a2a7b1'}
			},
			vAxis: {
				title: 'Rating (scale of 1-10)',  titleTextStyle: {color: '#a2a7b1'}, textStyle:{color: '#a2a7b1'}, gridlines: {color: '#a2a7b1'}
			},
			"legend" : { "textStyle" : { "color" : "#a2a7b1"} }
		};

		var chart = new google.visualization.ColumnChart(document.getElementById('gc-column'));
		chart.draw(data, options);
    }
	
	/* Pie Chart */
	
	function drawPieChart() {

		var data = google.visualization.arrayToDataTable([
			['Task', 'Hours per Day'],
			['Work',     11],
			['Eat',      2],
			['Commute',  2],
			['Watch TV', 2],
			['Sleep',    7]
		]);

		var options = {
			title: 'My Daily Activities',
		  titleTextStyle: {
			color: '#a2a7b1'
		  },
			backgroundColor: 'transparent',
			"legend" : { "textStyle" : { "color" : "#a2a7b1"} }
		};

		var chart = new google.visualization.PieChart(document.getElementById('gc-pie'));
		chart.draw(data, options);
	}
	
	/* 3D Pie Chart */
	
	function draw3DPieChart() {
		var data = google.visualization.arrayToDataTable([
			['Task', 'Hours per Day'],
			['Work',     11],
			['Eat',      2],
			['Commute',  2],
			['Watch TV', 2],
			['Sleep',    7]
		]);

		var options = {
			title: 'My Daily Activities',
		  titleTextStyle: {
			color: '#a2a7b1'
		  },
			backgroundColor: 'transparent',
			is3D: true,
			"legend" : { "textStyle" : { "color" : "#a2a7b1"} }
		};

		var chart = new google.visualization.PieChart(document.getElementById('gc-3d-pie'));
			chart.draw(data, options);
	}
	
	/* Donut Chart */
	
	function drawDonutChart() {
		var data = google.visualization.arrayToDataTable([
			['Task', 'Hours per Day'],
			['Work',     11],
			['Eat',      2],
			['Commute',  2],
			['Watch TV', 2],
			['Sleep',    7]
		]);

		var options = {
			title: 'My Daily Activities',
		  titleTextStyle: {
			color: '#a2a7b1'
		  },
			backgroundColor: 'transparent',
			pieHole: 0.4,
			"legend" : { "textStyle" : { "color" : "#a2a7b1"} }
		};

		var chart = new google.visualization.PieChart(document.getElementById('gc-donut'));
		chart.draw(data, options);
	}
	
	/* Exploded Pie Chart */
	
	function drawExplodedPieChart() {
		var data = google.visualization.arrayToDataTable([
			['Language', 'Speakers (in millions)'],
			['Assamese', 13], ['Bengali', 83], ['Bodo', 1.4],
			['Dogri', 2.3], ['Gujarati', 46], ['Hindi', 300],
			['Kannada', 38], ['Kashmiri', 5.5], ['Konkani', 5],
			['Maithili', 20], ['Malayalam', 33], ['Manipuri', 1.5],
			['Marathi', 72], ['Nepali', 2.9], ['Oriya', 33],
			['Punjabi', 29], ['Sanskrit', 0.01], ['Santhali', 6.5],
			['Sindhi', 2.5], ['Tamil', 61], ['Telugu', 74], ['Urdu', 52]
		]);

		var options = {
			title: 'Language Use',
		  titleTextStyle: {
			color: '#a2a7b1'
		  },
			backgroundColor: 'transparent',
			legend: 'none',
			pieSliceText: 'label',
			slices: {  4: {offset: 0.2},
			12: {offset: 0.3},
			14: {offset: 0.4},
			15: {offset: 0.5},
			},
		};

		var chart = new google.visualization.PieChart(document.getElementById('gc-exploded-pie'));
		chart.draw(data, options);
	}
	
	/* Draw Area Chart */
	
	google.charts.setOnLoadCallback(drawAreaChart);
	
	/* Draw Bar Chart */
	
	google.charts.setOnLoadCallback(drawBarChart);
	
	/* Draw Combo Chart */
	
	google.charts.setOnLoadCallback(drawComboChart);
	
	/* Draw Histogram */
	
	google.charts.setOnLoadCallback(drawHistogram);
	
	/* Draw Curve Chart */
	
	google.charts.setOnLoadCallback(drawCurveChart);
	
	/* Draw Line Chart */
	
	google.charts.setOnLoadCallback(drawLineChart);
	
	/* Draw Multi Series Chart */
	
	google.charts.setOnLoadCallback(drawMultSeries);
	
	/* Draw Pie Chart */
	
	google.charts.setOnLoadCallback(drawPieChart);
	
	/* Draw 3D Pie Chart */
	
	google.charts.setOnLoadCallback(draw3DPieChart);
	
	/* Draw Donut Chart */
	
	google.charts.setOnLoadCallback(drawDonutChart);
	
	/* Draw Exploded Pie Chart */
	
	google.charts.setOnLoadCallback(drawExplodedPieChart);
  
	
});