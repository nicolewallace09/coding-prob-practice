// function priceRange(firstDate, lastDate) {
//     const https = require('https')
//     let URL = `https://jsonmock.hackerrank.com/api/stocks/search?date=${firstDate}`; 
//     https.get(URL, (res) => {
//         let data = ''
//         res.on('data', apiData => {
//             data += apiData
//         })
//         res.on('end', () => {
//             let jsonData = JSON.parse(data.toString())
//             let date = jsonData.data[0].date; 
//             let openPrice = jsonData.data[0].open; 
//             let closePrice = jsonData.data[0].close; 
//             console.log(date + " " + openPrice + " " + closePrice)
//         })
//     }) 

// }

// priceRange('5-January-2000')


function priceRange(firstDate, lastDate) {
    const axios = require('axios')
    let URL = `https://jsonmock.hackerrank.com/api/stocks/search?date=${firstDate}`; 
    axios.get(URL)
        .then(response => {
            let apiData = response.data.data[0]; 
            let date = apiData.date; 
            let openPrice = apiData.open; 
            let closePrice = apiData.close; 
            console.log(date + " " + openPrice + " " + closePrice)
        })
}

priceRange('5-January-2000')