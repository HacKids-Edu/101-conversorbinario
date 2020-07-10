input.onButtonPressed(Button.A, function () {
    vlrBinario = "" + vlrBinario + "0"
    basic.showString(vlrBinario)
    vlrDecimal = vlrDecimal * 2
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    vlrDecimal = 0
    vlrBinario = ""
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(vlrDecimal)
})
input.onButtonPressed(Button.B, function () {
    vlrBinario = "" + vlrBinario + "1"
    basic.showString(vlrBinario)
    vlrDecimal = vlrDecimal * 2 + 1
    basic.clearScreen()
})
let vlrBinario = ""
let vlrDecimal = 0
vlrDecimal = 0
vlrBinario = ""
