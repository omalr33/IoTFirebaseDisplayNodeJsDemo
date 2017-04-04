'use strict'
const firebase = require("firebase")

firebase.initializeApp({
    serviceAccount: "firebaseHelper/iot-hello-world-key.json",
    databaseURL: 'https://databaseName.firebaseio.com'
});

var db = firebase.database()
var refHumidity = db.ref("humedity")
var refTemperature = db.ref("temperature")

function showMeHumidity(lcd) {
    refHumidity.on("child_added", (snapshot) => {
        let value = `Hum: ${snapshot.val()} %`;
        console.log(value)
        lcd.clear().cursor(0, 0).print(value)
    })
}

function showMeTemperature(lcd) {
    refTemperature.on("child_added", (snapshot) => {
        let value = `Temp: ${snapshot.val()} C`
        console.log(value)
        lcd.cursor(1, 0).print(value)
    })

}

module.exports = {
    showMeHumidity,
    showMeTemperature
}