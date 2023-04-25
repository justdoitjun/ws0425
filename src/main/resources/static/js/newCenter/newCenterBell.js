let newCenterBell = {
    init:()=>{
        newCenterBell.getData();
        setInterval(newCenterBell.getData, 5000);
    },//newCenterBell-init
    getData:(data)=>{
        $.ajax({
            url:'/getdata01'
        }).done((data)=>{
            //console.log(data);
            newCenterBell.display(data);
        })
            .fail(()=>{
                console.log("failed to load");
            })
    },//newCenterBell-getData
    display:(data)=>{
        console.log(data);
        Highcharts.chart('c2', {
            title: {
                text: 'Risk Variance of simultaneous fixed asset market in United States'
            },

            xAxis: [{
                title: {
                    text: 'Data'
                },
                alignTicks: false
            }, {
                title: {
                    text: 'Bell curve'
                },
                alignTicks: false,
                opposite: true
            }],

            yAxis: [{
                title: { text: 'Data' }
            }, {
                title: { text: 'Bell curve' },
                opposite: true
            }],

            series: [{
                name: 'Bell curve',
                type: 'bellcurve',
                xAxis: 1,
                yAxis: 1,
                baseSeries: 1,
                zIndex: -1
            }, {
                name: 'Data',
                type: 'scatter',
                data: data,
                accessibility: {
                    exposeAsGroupOnly: true
                },
                marker: {
                    radius: 1.5
                }
            }]
        });
    }
}

$(()=>{
    newCenterBell.init();
})