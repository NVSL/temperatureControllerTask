# Temperature Controller Task

You have the task of building a temperature controller system that will eventually replace my old line of controllers for [glass door coolers](http://tor-rey-refrigeration.com/glass-door-coolers/). You will develop the temperature controller using two different web tools: Amalgam and Appliancizer.

## Temperature Controller Software Requirements (Measure the time you spent building the software)
First, you are required to simulate the temperature controller using plain HTML, CSS, and Javascript. The software requirements are:  

1.- A **\<div\> or \<span\>** text that shows the temperature in Celsius (e.g., 25°C).    
2.- A **\<input\>** of type range or slider that simulates the temperature input from a sensor from -40°C to +125°C.   
3.- A **\<button\>** that will trigger the *temperature set mode* and move the temperature set point up (+1 °C).   
4.- A **\<button\>** that will trigger the *temperature set mode* and move the temperature set point down (-1 °C).    
5.- A **\<span\>** text that will show "ON" if the temperature is greater than the temperature setpoint, else OFF.    
    
Initial temperature set point: 25°C  

*Temperature set mode:*  
Aside from changing the temperature setpoint up or down. When in this mode, the temperature text should blink ON and OFF every second (500 ms visible 500 ms hidden) for 5 seconds. IF after 5 seconds the new setpoint is not equal to the current/original setpoint, then set the current setpoint to the new setpoint, else do nothing.   

Recommendations:   
- Use the ```app.html``` template found in ```Your_Name/amalgamApp/``` which you will use in the next step. 
- All html in bold must have an id attribute.
- No CSS needed; don't focus styling your app.
- Check JS functions ```setInterval()```, ```clearInterval()```, ```setTimeout()``` and ```clearTiemout()``` for the timers.
- You can start with these snippets for input, button and span:   
    
    
input
```html
<input type="range" id="mySensor" min="0" max="10" step="1" value="0">
```
```js
let mySensor = document.getElementById("mySensor");
mySensor.oninput = () => {
  console.log(mySensor.value);
};
```
button
```html
<button id="myInput"> BUTTON TEXT </button>
```
```js
let myInput = document.getElementById("myInput");
myInput.addEventListener("click", () => {
  console.log("Heyy");
});
```
span
```html 
<span id="myOutput"> TEXT </span>
```
```js
let myOutput = document.getElementById("myOutput");
myOutput.innerText = "ON";
```


## Building the Temperature Controller with Amalgam (Measure the time you spent writing the CSS and building the Eagle PCB spearately)

After completing simulating the temerature controller in ```Your_Name/amalgamApp/app.html``` it's time to indicate to the Amalgam tool which HTML elements you want them to be physical. The physcial electrical components will interact with a raspberry Pi 2/3/4 connector. 

From the HTML elements only the temperature text must remain. All other HTML elements must be physical.   
1.- (On Screen) A __\<div\> or \<span\>__ text that shows the temperature in Celsius (e.g., 25°C).   
2.- (Physical temp sensor) A __\<input\>__ of type range or slider that simulates the temperature input from a sensor from -40°C to +125°C.    
3.- (Physical Button) A __\<button\>__ that will trigger the _temperature set mode_ and move the temperature set point up (+1 °C)    
4.- (Physical Button) A __\<button\>__ that will trigger the _temperature set mode_ and move the temperature set point down (-1 °C)   
5.- (Physical led) A __\<span\>__ text that will show "ON" if the temperature is greater than the temperature set point, else "OFF". 


**FIRST TASK (CSS):** Add to the ```hardware.css``` file located in ```Your_Name/amalgamApp/``` the required hardware css selectors required by Amalgam.   
    
Example 1:Make a HTML button physical. 
```html
<button id="myInput"> BUTTON TEXT </button>
```
hardware.css
```css
#myInput {
  hardware: physical-button(gpio:4);
}
```

Example 2: Make a range slider interact with a i2c potentiometer
```html
<input type="range" id="mySensor" min="0" max="10" step="1" value="0">
```
hardware.css
```css
#mySensor {
  hardware: physical-pot(i2c-port:url("/dev/i2c-1"), i2c-addr:0x40);
}
```

Is your task to figure out the electrical component name (e.g., physical-button) and which gpios and i2c-ports to use for the raspberry Pi connector. Use the following list to choose the correct electrical component name.

| Electrical component name tag | Required values                                                                                                        | Electrical component Examples   |
|---------------------------|------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| physical-button           | gpio:<enter_gpio_num>)                                                                                     | Push buttons, 1-bit Inputs      |
| physical-output           | gpio:<enter_gpio_num>)                                                                                     | Leds, 1-bit Outputs             |
| physical-pot              | adc-channel: "<1,2,3 or 4>" <br> i2c-port:url("<enter_i2c_port>") <br> i2c-addr:0x40                                                                         | Potentiometer using ADS1011 ADC |
| physical-rgb-led          | spi-port:url("<enter_spi_port")                                                                                        | SPI RGB LEDs                    |
| physical-servo-motor      | servo-channel: "<1,2,3 or 4>" <br> i2c-port:url("<enter_spi_port>") <br> i2c-addr: 0x40                                          | I2C Servo motors                |
| physical-motorized-pot    | motora:<enter_gpio_num> <br> motorb:"<enter_gpio_num>" <br> touch:<enter_gpio_num> <br> i2c-addr:0x48 <br> i2c-port:url("<enter_i2c_port>") | I2C Motorized Potentiometer     |
| physical-temp-sensor      | i2c-port:url("<enter_i2c_port>") <br> i2c-addr:0x18                                                                         | I2C Temperature sensor          |


| AVAILABLE RPI PORTS | PATH  |
| ----------| ----------------|
| i2c       | "/dev/i2c-1"    |
| spi       | "/dev/spidev0.0"|
| serial    | "/dev/ttyS0"    |


**SECOND TASK (EAGLE):** 

For the second task you must make a PCB that will connect to the Raspberry Pi 40-pin connector and integrate all hardware parts you require for the temperature sensor, two buttons, and a led. Only the ealge temperature part (mcp9808) library is provided in ```Your_Name/eaglePCB/MCP9808.lbr```, figure out which other parts you need and how make the layout connections that match the ```hardware.css``` file.    

Save your schematic (\*.sch) board (\*sch) and gerber files in ```Your_Name/amalgamApp/eaglePCB```. 


## Building the Temperature Controller with Appliancizer (Measure the time you spent using appliancizer until you download the PCB)

Appliancizer website: https://appliancizer.com/     
- Choose any screen size.      
- Save the generated zip files in ```Your_Name/amalgamApp/applaincizerZip```.    
