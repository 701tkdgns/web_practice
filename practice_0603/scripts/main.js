const ctx = document.getElementById("myChart").getContext("2d");

const labels = [
    "7~18세",
    "19~29세",
    "30~39세",
    "40~49세",
    "50세 이상",
];

const data = {
    labels,
    datasets: [{
        data:[51.5, 5.7, 22.4, 14.2, 6.3],
        label: "이용자 데이터",
        backgroundColor:[
            'blue',
            'white',
            'white',
            'white',
            'white'
        ],
    }],
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive:true,
        scales:{
            y:{
                ticks:{
                    fontColor: 'rgb(255,255,255)',
                    fontSize: 14
                }
            }
        },
        legend:{
            labels:{
                fontColor:"white",
                fontSize: 18,
            }
        }
    },
};

const myChart = new Chart(ctx, config);