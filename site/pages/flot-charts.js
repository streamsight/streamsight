
	// Real Time chart
			
	if(document.getElementById('live-chart')){
		
		$(function() {
		
			var data = [],
				totalPoints = 500;

			function getRandomData() {

				if (data.length > 0)
					data = data.slice(1);

				// Do a random walk

				while (data.length < totalPoints) {

					var prev = data.length > 0 ? data[data.length - 1] : 20,
						y = prev + Math.random() * 20 - 15;

					if (y < 0) {
						y = 0;
					} else if (y > 100) {
						y = 100;
					}

					data.push(y);
				}

				// Zip the generated y values with the x values

				var res = [];
				for (var i = 0; i < data.length; ++i) {
					res.push([i, data[i]])
				}

				return res;
			}
			
			// Set up the control widget

			var updateInterval = 30;
			$("#updateInterval").val(updateInterval).change(function () {
				var v = $(this).val();
				if (v && !isNaN(+v)) {
					updateInterval = +v;
					if (updateInterval < 1) {
						updateInterval = 1;
					} else if (updateInterval > 3000) {
						updateInterval = 3000;
					}
					$(this).val("" + updateInterval);
				}
			});
			
			var plot = $.plot("#live-chart", [ getRandomData() ], {
				series: {
					shadowSize: 0   // Drawing is faster without shadows
				},
				yaxis: {
					min: 0,
					max: 50
				},
				xaxis: {
					show: false
				},
				colors: ["#faca39"],
				grid: {
					color: "#AFAFAF",
					hoverable: true,
					borderWidth: 0
				},
				tooltip: true,
				tooltipOpts: {
					content: "Y: %y",
					defaultTheme: false
				}
			

			});

			function update() {

				plot.setData([getRandomData()]);

				// Since the axes don't change, we don't need to call plot.setupGrid()

				plot.draw();
				setTimeout(update, updateInterval);
			}

			update();
		});
	}

	//Flot Line Chart
		
	if(document.getElementById('line-chart')){
		
		var offset = 0;
		plot();

		function plot() {
			var sin = [],
				cos = [];
			for (var i = 0; i < 14; i += 1.5) {
				sin.push([i, Math.sin(i + offset)]);
				cos.push([i, Math.cos(i + offset)]);
			}

			var options = {
				series: {
					lines: {
						show: true
					},
					points: {
						show: true
					}
				},

				grid: {
					hoverable: true //IMPORTANT! this is needed for tooltip to work
				},
				yaxis: {
					min: -1.2,
					max: 1.2
				},
				  colors: ["#805bbe", "#ff7f5a"],   
				grid: {
					color: "#AFAFAF",
					hoverable: true,
					borderWidth: 0
				},
				tooltip: true,
				crosshair: {
					mode: "x"
				}
			};

			var plotObj = $.plot($("#line-chart"), [{
					data: sin,
					label: "sin(x)",
				   
				}, {
					data: cos,
					label: "cos(x)"
				}],
				options);
		}  
	}

	//Flot Pie Chart

	if(document.getElementById('pie-chart')){

		var data = [{
			label: "Series 0",
			data: 5,
			color: "#4c5667",
			
		}, {
			label: "Series 1",
			data: 5,
			color: "#24caa1",
		}, {
			label: "Series 2",
			data: 3,
			color:"#eb4b4b",
		}, {
			label: "Series 3",
			data: 1,
			color:"#3f4d9f",
		}];

		var plotObj = $.plot($("#pie-chart"), data, {
			series: {
				pie: {
					innerRadius: 0.7,
					show: true
				}
			},
			grid: {
				hoverable: true
			},
			color: null,
			tooltip: true,
			tooltipOpts: {
				content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
				shifts: {
					x: 20,
					y: 0
				},
				defaultTheme: false
			}
		});

	}

	//Flot Moving Line Chart
	if(document.getElementById('line-chart-moving')){
		
		$(function() {

			var container = $("#line-chart-moving");

			// Determine how many data points to keep based on the placeholder's initial size;
			// this gives us a nice high-res plot while avoiding more than one point per pixel.

			var maximum = container.outerWidth() / 2 || 300;

			//

			var data = [];

			function getRandomData() {

				if (data.length) {
					data = data.slice(1);
				}

				while (data.length < maximum) {
					var previous = data.length ? data[data.length - 1] : 50;
					var y = previous + Math.random() * 10 - 5;
					data.push(y < 0 ? 0 : y > 100 ? 100 : y);
				}

				// zip the generated y values with the x values

				var res = [];
				for (var i = 0; i < data.length; ++i) {
					res.push([i, data[i]])
				}

				return res;
			}

			//

			series = [{
				data: getRandomData(),

				lines: {
					fill: true
				}
			}];

			//

			var plot = $.plot(container, series, {
				colors: ["#0c666a"],
				grid: {
					borderWidth: 0,
					minBorderMargin: 20,
					labelMargin: 10,
					backgroundColor: {
						colors: ["#fff", "#fff"]
					},
					margin: {
						top: 8,
						bottom: 20,
						left: 20
					},

					markings: function(axes) {
						var markings = [];
						var xaxis = axes.xaxis;
						for (var x = Math.floor(xaxis.min); x < xaxis.max; x += xaxis.tickSize * 1) {
							markings.push({
								xaxis: {
									from: x,
									to: x + xaxis.tickSize
								},
								color: "#fff"
							});
						}
						return markings;
					}
				},
				xaxis: {
					tickFormatter: function() {
						return "";
					}
				},
				yaxis: {
					min: 0,
					max: 110
				},
				legend: {
					show: true
				}
			});

			// Update the random dataset at 25FPS for a smoothly-animating chart

			setInterval(function updateRandom() {
				series[0].data = getRandomData();
				plot.setData(series);
				plot.draw();
			}, 40);

		});
	}

	//Flot Bar Chart

	if(document.getElementById('bar-chart')){

		var barOptions = {
			series: {
				bars: {
					show: true,
					barWidth: 0.2,
					barSpacing: 2
				}
			},
			grid: {
				hoverable: true
			},
			legend: {
				show: false
			},
			grid: {
					color: "#AFAFAF",
					hoverable: true,
					borderWidth: 0
				},
			tooltip: true,
			tooltipOpts: {
				content: "x: %x, y: %y"
			}
		};
		var barData = {
			label: "bar",
			color: "#3f4d9f",
			data: [
				[6, 100],
				[4, 200],
				[3, 300],
				[16, 400],
				[7, 500],
				[19, 600],
				[14, 200],
				[10, 300],
				[8, 400],
				[17, 500],
				[12, 600]
			]
		};
		$.plot($("#bar-chart"), [barData], barOptions);

	}

	// sales bar chart

	if($('#sales-bar-chart').length >0){
			//some data
		var d1 = [];
		for (var i = 0; i <= 10; i += 1) {
			d1.push([i, parseInt(Math.random() * 30)]);
		}

		var d2 = [];
		for (var i = 0; i <= 10; i += 1) {
			d2.push([i, parseInt(Math.random() * 30)]);
		}

		var d3 = [];
		for (var i = 0; i <= 10; i += 1) {
			d3.push([i, parseInt(Math.random() * 30)]);
		}

		var ds = new Array();

		ds.push({
			label : "One",
			data : d1,
			bars : {
				order : 1
			}
		});
		ds.push({
			label : "Two",
			data : d2,
			bars : {
				order : 2
			}
		});
		ds.push({
			label : "Three",
			data : d3,
			bars : {
				order : 3
			}
		});

		var stack = 0,
			bars = true,
			lines = true,
			steps = true;

		var options = {
			bars : {
				show : true,
				barWidth : 0.2,
				fill : 1
			},
			grid : {
				show : true,
				aboveData : false,
				labelMargin : 5,
				axisMargin : 0,
				borderWidth : 1,
				minBorderMargin : 5,
				clickable : true,
				hoverable : true,
				autoHighlight : false,
				mouseActiveRadius : 20,
				borderColor : '#afafaf'
			},
			series : {
				stack : stack
			},
			legend : {
				position : "ne",
				margin : [0, 0],
				noColumns : 0,
				labelBoxBorderColor : null,
				labelFormatter : function(label, series) {
					// just add some space to labes
					return '' + label + '&nbsp;&nbsp;';
				},
				width : 30,
				height : 5
			},
			yaxis : {
				tickColor : '#afafaf',
				font : {
					color : '#bdbdbd'
				}
			},
			xaxis : {
				tickColor : '#afafaf',
				font : {
					color : '#bdbdbd'
				}
			},
			colors : ["#4F5467", "#0c666a", "#ff7f5a"],
			tooltip : true, //activate tooltip
			tooltipOpts : {
				content : "%s : %y.0",
				shifts : {
					x : -30,
					y : -50
				}
			}
		};

		$.plot($("#sales-bar-chart"), ds, options);
	}
