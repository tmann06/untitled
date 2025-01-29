input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("F F G F A - G - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("F F F G A - F - ", 120), music.PlaybackMode.UntilDone)
})
