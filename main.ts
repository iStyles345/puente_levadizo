Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    if (Estado == 0) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Yellow)
        basic.pause(100)
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
        basic.pause(100)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
        basic.pause(100)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
        Estado = 1
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
Mbit_IR.onPressEvent(RemoteButton.Down, function () {
    if (Estado == 1) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Yellow)
        basic.pause(100)
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
        basic.pause(100)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
        basic.pause(100)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
        Estado = 0
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
let Estado = 0
Mbit_IR.init(Pins.P8)
