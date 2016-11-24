bootcards.init({
    offCanvasBackdrop: false,
    offCanvasHideOnMainClick: false,
    enableTabletPortraitMode: false,
    disableRubberBanding: false,
    disableBreakoutSelector: 'a.no-break-out'
});

var financeCharts = function() {
    $("#financesChart").empty();
    Morris.Bar({
        element: 'financesChart',
        data: [
            { month: 12, sales: 1 },
            { month: 1, sales: 4 },
            { month: 2, sales: 2 },
            { month: 3, sales: 7 }
        ],
        xkey: 'month',
        ykeys: ['sales'],
        labels: ['Tokens'],
        hideHover: 'auto'
    });
}

var growthCharts = function() {
    $("#growthChart").empty();
    Morris.Bar({
        element: 'growthChart',
        data: [
            { month: 12, growth: 23 },
            { month: 1, growth: 7 },
            { month: 2, growth: 48 },
            { month: 3, growth: 22 }
        ],
        xkey: 'month',
        ykeys: ['growth'],
        labels: ['Percentage (%)'],
        hideHover: 'auto'
    });
}

$(document).ready(function() {
    financeCharts();
    growthCharts();
});
$(window).on('resize', function() {
    financeCharts();
    growthCharts();
});
$(window).on('click', function() {
    financeCharts();
    growthCharts();
});

function comp(nameid) {
    $('.cards').addClass('hidden');
    $(nameid).removeClass('hidden').addClass('visible');
}