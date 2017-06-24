$(function() {

	// LINE CHART

	if(document.getElementById('morris-line-chart')){

		Morris.Area({
			element: 'morris-line-chart',
			data: [{
				period: '2011',
				seriesa: 60,
				seriesb: 50,
				seriesc: 10
			}, {
				period: '2012',
				seriesa: 100,
				seriesb: 200,
				seriesc: 40
			}, {
				period: '2013',
				seriesa: 50,
				seriesb: 30,
				seriesc: 90
			}, {
				period: '2014',
				seriesa: 60,
				seriesb: 70,
				seriesc: 140
			}, {
				period: '2015',
				seriesa: 100,
				seriesb: 110,
				seriesc: 170
			}, {
				period: '2016',
				seriesa: 105,
				seriesb: 100,
				seriesc: 70
			},
			 {
				period: '2017',
				seriesa: 250,
				seriesb: 150,
				seriesc: 200
			}],
			xkey: 'period',
			ykeys: ['seriesa', 'seriesb', 'seriesc'],
			labels: ['Series A', 'Series B', 'Series C'],
			pointSize: 3,
			fillOpacity: 0,
			pointStrokeColors:['#faca39', '#00c292', '#eb4b4b'],
			behaveLikeLine: true,
			gridLineColor: '#e0e0e0',
			lineWidth: 2,
			hideHover: 'auto',
			lineColors: ['#faca39', '#00c292', '#eb4b4b'],
			resize: true    ,
			redraw: true
		});
	
	}
	
	// AREA CHART

	if(document.getElementById('morris-area-chart')){
		
		Morris.Area({
			element: 'morris-area-chart',
			data: [{
				period: '2011',
				SiteA: 0,
				SiteB: 0,
				
			}, {
				period: '2012',
				SiteA: 130,
				SiteB: 100,
				
			}, {
				period: '2013',
				SiteA: 80,
				SiteB: 60,
				
			}, {
				period: '2014',
				SiteA: 70,
				SiteB: 200,
				
			}, {
				period: '2015',
				SiteA: 180,
				SiteB: 150,
				
			}, {
				period: '2016',
				SiteA: 105,
				SiteB: 90,
				
			},
			 {
				period: '2017',
				SiteA: 250,
				SiteB: 150,
			   
			}],
			xkey: 'period',
			ykeys: ['SiteA', 'SiteB'],
			labels: ['Site A', 'Site B'],
			pointSize: 2,
			fillOpacity: 1,
			pointStrokeColors:['#2eb7f3','#3f4d9f'],
			behaveLikeLine: false,
			gridLineColor: '#e0e0e0',
			lineWidth: 0,
			smooth: false,
			hideHover: 'auto',
			lineColors: ['#2eb7f3','#3f4d9f'],
			resize: true
			
		});
	}

	// Morris bar chart

	if(document.getElementById('morris-bar-chart')){
	
		Morris.Bar({
			element: 'morris-bar-chart',
			data: [{
				y: '2006',
				a: 120,
				b: 130,
				c: 50
			}, {
				y: '2007',
				a: 45,
				b: 25,
				c: 50
			}, {
				y: '2008',
				a: 30,
				b: 60,
				c: 70
			}, {
				y: '2009',
				a: 95,
				b: 75,
				c: 50
			}, {
				y: '2010',
				a: 120,
				b: 100,
				c: 30
			}, {
				y: '2011',
				a: 115,
				b: 75,
				c: 90
			}, {
				y: '2012',
				a: 100,
				b: 90,
				c: 40
			}],
			xkey: 'y',
			ykeys: ['a', 'b', 'c'],
			labels: ['A', 'B', 'C'],
			barColors:['#2eb7f3', '#4c5667', '#0c666a'],
			hideHover: 'auto',
			gridLineColor: '#eef0f2',
			resize: true,
			stacked:true
		});
	}
	
	// Morris Line 2
	
	if(document.getElementById('morris-line-chart-2')){
		Morris.Line({
			element: 'morris-line-chart-2',
			data: [
			{ y: '2006', a: 100, b: 90 },
			{ y: '2007', a: 75,  b: 65 },
			{ y: '2008', a: 50,  b: 40 },
			{ y: '2009', a: 75,  b: 65 },
			{ y: '2010', a: 50,  b: 40 },
			{ y: '2011', a: 75,  b: 65 },
			{ y: '2012', a: 100, b: 90 }
			],
			xkey: 'y',
			ykeys: ['a', 'b'],
			labels: ['Series A', 'Series B'],
			lineColors: ['#b4becb', '#805bbe'],
			resize: true,
			stacked:true
		});
	}
});
$(document).ready(function(){
	$('#morris-donut-chart').find('text').css('font-size','5px');
	$('#morris-donut-chart').find('text').attr('font-size','5px')
});