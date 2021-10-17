zatimco = True
basic.show_string("HAZENI KOSTKY")
basic.show_string("MANUAL SE SPUSTI, KDYZ KLIKNETE NA A PRITOM I NA B")
kostka = 10
while zatimco == True:
    if input.button_is_pressed(Button.A):
        if kostka == 6:
            for index in range(randint(1, 6)):
                led.plot(randint(1, 5), randint(1, 5))
    if kostka == 10:
        for index2 in range(randint(1, 10)):
            led.plot(randint(1, 5), randint(1, 5))

def on_forever():
    global zatimco
    zatimco = True
    if input.button_is_pressed(Button.AB):
        basic.show_string("MAME DVE KOSTKY. JEDNU 6STENNOU A 10STENNOU ")
        basic.show_string("TECKY ZNACI POCET NA KOSTCE KDYBY NECO, TAK VAM TO I PIPNE PODLE POCTU NA KOSTCE")
    if input.logo_is_pressed():
        if kostka == 6:
            kostka2 = 10
            basic.show_leds("""
                . # . # #
                                # # . # #
                                . # . # #
                                . # . # #
                                . # . # #
            """)
        if kostka == 10:
            kostka2 = 6
            basic.show_leds("""
                . # # # .
                                . # . . .
                                . # # # .
                                . # . # .
                                . # # # .
            """)
basic.forever(on_forever)
