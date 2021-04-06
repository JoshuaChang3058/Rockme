input.onButtonPressed(Button.A, function () {
    累計 = 0
    pins.servoWritePin(AnalogPin.P0, 90)
    搖動中 = 0
})
input.onGesture(Gesture.Shake, function () {
    累計 = 累計 + randint(0, 10)
    搖動中 = 1
    搖動計時器 = input.runningTime()
    pins.servoWritePin(AnalogPin.P0, 180)
})
let 搖動計時器 = 0
let 搖動中 = 0
let 累計 = 0
pins.servoWritePin(AnalogPin.P0, 86)
basic.forever(function () {
    basic.showNumber(累計)
    if (搖動中 && input.runningTime() - 搖動計時器 >= 1000) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . # . # .
            `)
        pins.servoWritePin(AnalogPin.P0, 100)
        basic.pause(200 * (累計 % 10))
        pins.servoWritePin(AnalogPin.P0, 86)
        累計 = 0
        搖動中 = 0
    }
})
