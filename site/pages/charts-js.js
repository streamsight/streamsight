$(window).resize(function() {
    
    var ctx1 = document.getElementById("chart1").getContext("2d");
    var data1 = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept"],
        datasets: [
            {
                label: "My Second dataset",
                fillColor: "rgba(243,245,246,1)",
                strokeColor: "rgba(243,245,246,1)",
                pointColor: "rgba(243,245,246,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(243,245,246,0.9)",
                data: [30, 25, 40, 19, 56, 27, 80, 100, 120]
            },
            {
                label: "My First dataset",
                fillColor: "rgba(255,127,90,0.5)",
                strokeColor: "rgba(255,127,90,0.5)",
                pointColor: "rgba(255,127,90,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(255,127,90,1)",
                data: [15, 20, 45, 28, 50, 15, 70, 95, 110]
            }
            
        ]
    };
    
    var chart1 = new Chart(ctx1).Line(data1, {
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.005)",
        scaleGridLineWidth : 0,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: true,
        bezierCurve : false,
        pointDot : true,
        pointDotRadius : 5,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 2,
        datasetStroke : true,
		tooltipCornerRadius: 1,
        datasetStrokeWidth : 1,
        datasetFill : true,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
        responsive: true
    });
    
    var ctx2 = document.getElementById("chart2").getContext("2d");
    var data2 = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept"],
        datasets: [
            {
                label: "First",
                fillColor: "rgba(250,202,57,0.6)",
                strokeColor: "rgba(250,202,57,0.6)",
                highlightFill: "rgba(250,202,57,1)",
                highlightStroke: "rgba(250,202,57,1)",
                data: [30, 20, 50, 31, 56, 85, 80, 100, 95]
            },
            {
                label: "Second",
                fillColor: "rgba(76,86,103,0.6)",
                strokeColor: "rgba(76,86,103,0.6)",
                highlightFill: "rgba(76,86,103,1)",
                highlightStroke: "rgba(76,86,103,1)",
                data: [18, 28, 50, 19, 36, 57, 90, 130, 85]
            }
        ]
    };
    
    var chart2 = new Chart(ctx2).Bar(data2, {
        scaleBeginAtZero : true,
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.005)",
        scaleGridLineWidth : 0,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: true,
        barShowStroke : true,
        barStrokeWidth : 1,
		tooltipCornerRadius: 0,
        barDatasetSpacing : 10,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
        responsive: true
    });
    
    var ctx3 = document.getElementById("chart3").getContext("2d");
    var data3 = [
        {
            value: 200,
            color:"#805bbe",
            highlight: "#805bbe",
            label: "Purple"
        },
        {
            value: 150,
            color: "#edf1f5",
            highlight: "#edf1f5",
            label: "Light"
        },
		 {
            value: 50,
            color: "#4c5667",
            highlight: "#4c5667",
            label: "Dark"
        },
		 {
            value: 90,
            color: "#2eb7f3",
            highlight: "#2eb7f3",
            label: "Blue"
        },
        {
            value: 70,
            color: "#24caa1",
            highlight: "#24caa1",
            label: "Green"
        }
    ];
    
    var myPieChart = new Chart(ctx3).Pie(data3,{
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 0,
        animationSteps : 100,
		tooltipCornerRadius: 0,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
        responsive: true
    });
    
    var ctx4 = document.getElementById("chart4").getContext("2d");
    var data4 = [
        {
            value: 200,
            color:"#0c666a",
            highlight: "#0c666a",
            label: "Dark Green"
        },
        {
            value: 150,
            color: "#3f4d9f",
            highlight: "#3f4d9f",
            label: "Dark Blue"
        },
        {
            value: 50,
            color: "#eb4b4b",
            highlight: "#eb4b4b",
            label: "Red"
        }
    ];
    
    var myDoughnutChart = new Chart(ctx4).Doughnut(data4,{
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 0,
        animationSteps : 100,
		tooltipCornerRadius: 2,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
        responsive: true
    });
    
    var ctx5 = document.getElementById("chart5").getContext("2d");
    var data5 =  [
        {
            value: 100,
            color:"#0c666a",
            highlight: "#0c666a",
            label: "Megna"
        },
        {
            value: 150,
            color: "#25a6f7",
            highlight: "#25a6f7",
            label: "Blue"
        },
        {
            value: 150,
            color: "#ff7f5a",
            highlight: "#ff7f5a",
            label: "Orange"
        },
        {
            value: 90,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        }

    ];
    
    var myPolarArea = new Chart(ctx5).PolarArea(data5, {
        scaleShowLabelBackdrop : true,
        scaleBackdropColor : "rgba(255,255,255,0.75)",
        scaleBeginAtZero : true,
        scaleBackdropPaddingY : 2,
        scaleBackdropPaddingX : 2,
        scaleShowLine : true,
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        animationSteps : 100,
		tooltipCornerRadius: 2,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
        responsive: true
    });
    
    var ctx6 = document.getElementById("chart6").getContext("2d");
    var data6 = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(19,218,254,0.8)",
                strokeColor: "rgba(19,218,254,1)",
                pointColor: "rgba(19,218,254,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(19,218,254,1)",
                data: [45, 32, 60, 21, 36, 25, 50]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(97,100,193,0.8)",
                strokeColor: "rgba(97,100,193,1)",
                pointColor: "rgba(97,100,193,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(97,100,193,1)",
                data: [18, 28, 30, 49, 56, 77, 100]
            }
        ]
    };
    
    var myRadarChart = new Chart(ctx6).Radar(data6, {
        scaleShowLine : true,
        angleShowLineOut : true,
        scaleShowLabels : false,
        scaleBeginAtZero : true,
        angleLineColor : "rgba(0,0,0,.1)",
        angleLineWidth : 1,
        pointLabelFontFamily : "'Arial'",
        pointLabelFontStyle : "normal",
        pointLabelFontSize : 10,
        pointLabelFontColor : "#666",
        pointDot : true,
        pointDotRadius : 3,
		tooltipCornerRadius: 2,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 20,
        datasetStroke : true,
        datasetStrokeWidth : 2,
        datasetFill : true,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
        responsive: true
    });
    
});