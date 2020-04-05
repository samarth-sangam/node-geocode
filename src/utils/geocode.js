const request = require('request')

const geocode = (address, callback) => {
    
    const token = 'pk.eyJ1Ijoic2FtYXJ0aC1zYW5nYW0iLCJhIjoiY2s4Z3Y1NTQ4MDFmajNncGV6b3Y5OGlsdCJ9.8v4Tqgp__6-9vzcLgyONWA'
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token='+ token

    request({url, json:true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another location!', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name,
                Country: body.features[0].context.slice(-1)[0].text
            })
        }
    })
}

module.exports = geocode