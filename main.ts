let klik_logo = false
let kostka = 10
basic.showString("HAZENI KOSTKY")
basic.showString("MANUAL SE SPUSTI, KDYZ KLIKNETE NA A PRITOM I NA B")
basic.forever(function () {
    let kostka2: number;
if (input.buttonIsPressed(Button.AB)) {
        basic.showString("MAME DVE KOSTKY. JEDNU 6STENNOU A 10STENNOU ")
        basic.showString("TECKY ZNACI POCET NA KOSTCE KDYBY NECO, TAK VAM TO I PIPNE PODLE POCTU NA KOSTCE")
    }
    if (input.logoIsPressed()) {
        klik_logo = true
        if (kostka == 10) {
            kostka = 6
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . # . # .
                . # # # .
                `)
            basic.pause(2000)
            basic.clearScreen()
            klik_logo = false
        }
        if (klik_logo == true) {
            if (kostka == 6) {
                kostka = 10
                basic.showLeds(`
                    . # . # #
                    # # . # #
                    . # . # #
                    . # . # #
                    . # . # #
                    `)
                basic.pause(2000)
                basic.clearScreen()
            }
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (kostka == 6) {
            for (let index = 0; index < randint(1, 6); index++) {
                led.plot(randint(0, 4), randint(0, 4))
                music.playTone(440, music.beat(BeatFraction.Whole))
            }
            basic.pause(2000)
            basic.clearScreen()
            basic.showString("¨HAZEJ ZNOVA")
        }
        if (kostka == 10) {
            for (let index = 0; index < randint(1, 10); index++) {
                led.plot(randint(0, 4), randint(0, 4))
                music.playTone(440, music.beat(BeatFraction.Whole))
            }
            basic.pause(2000)
            basic.clearScreen()
            basic.showString("HAZEJ ZNOVA")
        }
    }
})
