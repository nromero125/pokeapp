/*
 *  Document   : db_pop.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Pop Dashboard Page
 */

var DbPop = function() {
    // Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
    var initPopChartJS = function () {
        // Set Global Chart.js configuration
        Chart.defaults.global.defaultFontColor              = '#7c7c7c';
        Chart.defaults.scale.gridLines.color                = "#f1f1f1";
        Chart.defaults.scale.gridLines.zeroLineColor        = "#f1f1f1";
        Chart.defaults.scale.display                        = true;
        Chart.defaults.scale.ticks.beginAtZero              = true;
        Chart.defaults.global.elements.line.borderWidth     = 2;
        Chart.defaults.global.elements.point.radius         = 6;
        Chart.defaults.global.elements.point.hoverRadius    = 12;
        Chart.defaults.global.tooltips.cornerRadius         = 2;
        Chart.defaults.global.legend.display                = false;

        // Chart Containers
        var chartPopLinesCon  = jQuery('.js-chartjs-pop-lines');
        var chartPopLinesCon2 = jQuery('.js-chartjs-pop-lines2');

        // Chart Variables
        var chartPopLines, chartPopLines2;

        // Lines Charts Data
        var chartPopLinesData = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'This Week',
                    fill: true,
                    backgroundColor: 'rgba(56,56,56,.4)',
                    borderColor: 'rgba(56,56,56,.9)',
                    pointBackgroundColor: 'rgba(56,56,56,.9)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(56,56,56,.9)',
                    data: [75, 88, 34, 49, 52, 89, 96]
                }
            ]
        };

        var chartPopLinesOptions = {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMax: 100
                    }
                }]
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItems, data) {
                        return ' ' + tooltipItems.yLabel + ' Sales';
                    }
                }
            }
        };

        var chartPopLinesData2 = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'This Week',
                    fill: true,
                    backgroundColor: 'rgba(230,76,60,.4)',
                    borderColor: 'rgba(230,76,60,.9)',
                    pointBackgroundColor: 'rgba(230,76,60,.9)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(230,76,60,.9)',
                    data: [750, 880, 398, 420, 590, 630, 930]
                }
            ]
        };

        var chartPopLinesOptions2 = {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMax: 1000
                    }
                }]
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItems, data) {
                        return ' $ ' + tooltipItems.yLabel;
                    }
                }
            }
        };

        // Init Charts
        if ( chartPopLinesCon.length ) {
            chartPopLines  = new Chart(chartPopLinesCon, { type: 'line', data: chartPopLinesData, options: chartPopLinesOptions });
        }

        if ( chartPopLinesCon2.length ) {
            chartPopLines2 = new Chart(chartPopLinesCon2, { type: 'line', data: chartPopLinesData2, options: chartPopLinesOptions2 });
        }
    };

    return {
        init: function () {
            // Init Chart.js Charts
            initPopChartJS();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ DbPop.init(); });
