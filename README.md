# Temperature Controller Task

You have the task of building a temperature controller system that will eventually replace my old line of controllers for [glass door coolers](http://tor-rey-refrigeration.com/glass-door-coolers/). You will develop the temperature controller using two different web tools: Amalgam and Appliancizer.

## Temperature Controller Software 
The temperature controller software is provided in ```Your_Name/amalgamApp/app.html```

## Building the Temperature Controller with Amalgam (Measure the time you spent writing the CSS and building the Eagle PCB spearately)

After checking the ```app.html``` code it's time to indicate to the Amalgam tool which HTML elements you want them to be physical. The physcial electrical components will interact with a raspberry Pi 2/3/4 connector. 

From the HTML elements in ```app.html``` only the temperature text must remain. All other HTML elements must be physical. Follow the following list:    
1.-  __\<div\>__ text that shows the temperature in Celsius (e.g., 25°C). (Must remain on Screen)     
2.- __\<input\>__ temperature sensor input slider with range from -40°C to +125°C. (Must be a physical temp sensor)      
3.- __\<button\>__ temperature set point up (+1 °C). (Must be a physical button)   
4.- __\<button\>__ temperature set point down (-1 °C). (Must be a physical button)   
5.- __\<span\>__ text that will show "ON" if the temperature is greater than the temperature set point, else "OFF". (Must be a physical led)   


**FIRST TASK (CSS):** Add to the ```hardware.css``` file located in ```Your_Name/amalgamApp/``` the required hardware css selectors needed by Amalgam and that match the list above, follow the examples.   
    
Example 1: HTML button to physical button. 
```html
<!-- example.html -->
<button id="myInput"> BUTTON TEXT </button>
```
```css
/* hardware.css */
#myInput {
  hardware: physical-button(gpio:4);
}
```

Example 2: HTML Input slider to physcial i2c potentiometer
```html
<!-- example.html -->
<input type="range" id="mySensor" min="0" max="10" step="1" value="0">
```
```css
/* hardware.css */
#mySensor {
  hardware: physical-pot(i2c-port:url("/dev/i2c-1"), i2c-addr:0x40);
}
```

Is your task to figure out the electrical component name tag (e.g., physical-button) and required values (e.g, gpio:4) to use for a raspberry Pi connector. Use the following list to choose the correct electrical component name.

```css
#<YourElementId> {
  hardware: <electrical component name tag> (required value 1, requred value 2, ...);
}
```

| Electrical component name tag | Required values                                                                                                        | Electrical component Examples   |
|---------------------------|------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| physical-button           | gpio:<gpio_number>)                                                                                     | Push buttons, 1-bit Inputs      |
| physical-output           | gpio:<gpio_number>)                                                                                     | Leds, 1-bit Outputs             |
| physical-pot              | adc-channel: "<1,2,3 or 4>" <br> i2c-port:url("<i2c_port_path>") <br> i2c-addr:0x40                                                                         | Potentiometer using ADS1011 ADC |
| physical-rgb-led          | spi-port:url("<spi_port_path>")                                                                                        | SPI RGB LEDs                    |
| physical-servo-motor      | servo-channel: "<1,2,3 or 4>" <br> i2c-port:url("<spi_port_path>") <br> i2c-addr: 0x40                                          | I2C Servo motors                |
| physical-motorized-pot    | motora:<gpio_number> <br> motorb:"<gpio_number>" <br> touch:<gpio_number> <br> i2c-addr:0x48 <br> i2c-port:url("<i2c_port_path>") | I2C Motorized Potentiometer     |
| physical-temp-sensor      | i2c-port:url("<i2c_port_path>") <br> i2c-addr:0x18                                                                         | I2C Temperature sensor          |


| AVAILABLE RPI PORTS | PORT PATH  | GPIO Number |
| ----------| ----------------| ------------ |
| i2c       | "/dev/i2c-1"    | SDA: 2, SCL: 3 |
| spi       | "/dev/spidev0.0"| MOSI: 10, MISO: 9, SCLK: 11, CE0: 8 |
| serial    | "/dev/ttyS0"    | TXD: 14, RXD: 15 |
| gpio      |     N/A            | 4, 17, 27, 22, 5, 6, 13, 26, 18, 23, 24, 25, 12, 16, 19, 20, 21 |   


[raspberry pinout image](https://roboticsbackend.com/wp-content/uploads/2019/05/raspberry-pi-3-pinout-768x810.jpg)


**SECOND TASK (EAGLE):** 

For the second task you must make a PCB that will connect to a Raspberry Pi 40-pin connector. You will require a temperature sensor, two buttons, and a led. All eagle parts are provided in ```Your_Name/eaglePCB/tempControllerParts.lbr```. Connections must match the port paths and gpio numbers in the ```hardware.css``` file.    

Save your schematic (\*.sch) board (\*sch) and gerber files in ```Your_Name/amalgamApp/eaglePCB```. 


## Building the Temperature Controller with Appliancizer (Measure the time you spent using appliancizer until you download the PCB)

Appliancizer website: https://appliancizer.com/    
- Add the temperature software code using the "ADD WEB PAGE+" Button, then click "INJECT". 
- Choose any screen size.
- Drag and Drop Components to the PCB area following the list provided in the Amalgam section. 
- Click "Build", then click "Generate PCB File" and save the generated zip files in ```Your_Name/amalgamApp/applaincizerZip```.    


## ---
Finally commit: Your ```hardware.css``` file, PCB files (.sch, .brd, gerber files) and the generated Amalgam zip to the repo. Send me an email when you push your work and also send me your times. 

| TASK | TIMES |
| ----------| ----------------|
| Devon       |  |
| Amalgam, first taks  | 6 minutes | 
| Amalgam, second task | 15 minutes 30 seconds + 10 minutes to do gerbers (I'm not sure I did the gerbers right. Also not sure I did the pull up resistors right, because I'm not sure which pins are NC/NO on the button.) | 
| Appliancizer         | 4 minutes 30 seconds |  
| Steve       |  |
| Amalgam, first taks  | ? | 
| Amalgam, second task | ? | 
| Appliancizer         | ? |  

