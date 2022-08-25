const axios = require("axios")


const getWeather = (lat,lon) => {
    return new Promise((resolve,reject) => {

        const url = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=4d3ae75915ee2d8191df1f8cdd44c26f"

        axios.get(url)
        
            .then(function (response) {
                resolve({weather:"Current Temparature is "+(response.data.main.temp-273.15)})
                // console.log("Current Temparature is "+(response.data.main.temp-273.15))
            })
        
            .catch(function (error) {
                reject({error:"Unable to find the location"})
                // console.log("Unable to find the location");
            })
        })
}

module.exports = getWeather