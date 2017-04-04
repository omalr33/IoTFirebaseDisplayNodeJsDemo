'use strict'
const five = require('johnny-five')
const firebaseHelper = require('./firebaseHelper')

var board = new five.Board()

board.on('ready', () => {

    var lcd = new five.LCD({
        pins: [4, 5, 6, 7, 8, 9],
        backlight: 6,
        rows: 2,
        cols: 20
    })
    
    lcd.clear().print('Board ready!')
    
    firebaseHelper.showMeHumidity(lcd)
    firebaseHelper.showMeTemperature(lcd)
})