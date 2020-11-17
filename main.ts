serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showString(serial.readUntil(serial.delimiters(Delimiters.NewLine)))
})
input.onGesture(Gesture.Shake, function () {
    serial.writeLine(convertToText(input.acceleration(Dimension.X)))
    basic.showIcon(IconNames.No)
    basic.pause(500)
    basic.clearScreen()
})
serial.setBaudRate(BaudRate.BaudRate115200)
serial.redirectToUSB()
serial.setWriteLinePadding(0)
