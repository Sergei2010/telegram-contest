import { chart } from './chart'
//import { getChartData } from './data'
import data from './data.json'
import './styles.scss'

//const tgChart = chart(document.getElementById('chart'), getChartData())
const tgChart = chart(document.getElementById
    ('chart'), data[3])
tgChart.init()

/*
1. Checkbox
2. Animation
3. Few Charts on page
4. Dynamic theme change
5. Random
*/