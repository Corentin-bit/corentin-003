input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            # . # . #
            `)
        basic.pause(500)
        basic.showLeds(`
            . # # # .
            . # # # .
            # # # # #
            # . # . #
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . # # # .
            # # # # #
            # . # . #
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            # # # # #
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
    }
})
basic.showNumber(input.temperature())
