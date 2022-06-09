Chart.register(ChartDataLabels);


const d_ctx = document.getElementById("myDoughnutChart").getContext("2d");
const ctx = document.getElementById("myChart").getContext("2d");

const labels = [
    "7~18세",
    "19~29세",
    "30~39세",
    "40~49세",
    "50세 이상",
];


const d_data = {
    labels:["남자", "여자"],
    datasets:[{
        data: [25, 75],
        label: "남녀 이용자 데이터",
        fill: true,
        backgroundColor: ['rgb(58,123,213)','rgb(0,210,255)'],
        borderColor: '#eee',
        borderWidth: 1,
    },],
};

let delayed;

//Gradient Fill
let gradient = ctx.createLinearGradient(0, 0, 0, 400); //  동 남 서 북
gradient.addColorStop(0, 'rgba(58,123,213,1)');
gradient.addColorStop(1, 'rgba(0,210,255,0.6)');

const data = {
    labels,
    datasets: [{
        data: [51.5, 5.7, 22.4, 14.2, 6.3],
        label: "나이별 이용자 데이터",
        fill: true,
        backgroundColor: gradient,
        borderColor: '#eee',
        borderWidth: 1,
    },],
};

const d_config = {
    type: "doughnut",
    data: d_data,
    options:{
        aspectRatio: 1,
        responsive: true,
        plugins:{
            datalabels: {
                align:'middle',
                color:'white',
                font: {
                  weight: 'bold',
                  size: 16,
                },
            },
        },
    },
};

const config = {
    type: 'bar',
    data: data,
    options: {
        aspectRatio: 1,
        responsive: true,
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === "data" && context.mode === "default" && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                anchor: 'end',
                align: 'top',
                font: {
                  weight: 'bold',
                  size: 16,
                },
            },
        },
    },
};


const doughnutChart = new Chart(d_ctx, d_config);
const myChart = new Chart(ctx, config);