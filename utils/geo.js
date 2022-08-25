const axios = require("axios")

const getGeo = (location) => {
    return new Promise((resolve,reject) => {
        const url = "http://api.openweathermap.org/geo/1.0/direct?q="+location+"&limit=1&appid=4d3ae75915ee2d8191df1f8cdd44c26f"

            axios.get(url)
            .then(function (response) {
                resolve({name:"Your location is " + response.data[0].name})
                // console.log("Your location is " + response.data[0].name)
            })
            .catch(function (error) {
                reject({error:"Unable to find the location"})
                // console.log("Unable to find the location");
            })
    })
}

module.exports = getGeo