input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Meh)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Tortoise)
})
basic.showIcon(IconNames.Heart)
basic.showLeds(`
    # # # . .
    # . . # .
    # . # # #
    # . . . #
    # # # # #
    `)
