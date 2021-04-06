累計 = 0

def on_gesture_shake():
    global 累計
    累計 += 1
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    basic.show_number(累計)
basic.forever(on_forever)
