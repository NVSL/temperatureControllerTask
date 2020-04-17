# Temperature Controller Task
You have the task of building a temperature controller system that will eventually replace my old line of controllers for [glass door coolers](http://tor-rey-refrigeration.com/glass-door-coolers/). You will build the temperature controller using two different web tools: Amalgam and Appliancizer. 

## Temperature Controller Software Requirements (Measure the time you spent building the software)
First you are required to simulate the temperature controller using plain HTML, CSS and Javascript. The software requirements are:

1.- A text that shows the temperature in Celsius (e.g., 25°C).   
2.- A slider that simulates the temperature input with a __\<input\> of type range__ from -40°C to +125°C.    
3.- A __\<button\>__ that will trigger the _temperature set mode_ and move the temperature set point up (+1 °C)    
4.- A __\<button\>__ that will trigger the _temperature set mode_ and move the temperature set point down (-1 °C)   
5.- A __\<span\>__ text that will show "ON" if the temperature is greater than the temperature set point, else OFF. 

Initial temperature set point: 25°C

_Temperature set mode_:   
Aside from changing the temperature set point up or down. When in this mode the temperature text should blink ON and OFF every second (500 ms visible 500 ms hidden) for 5 seconds. IF after 5 seconds the new set point is not equal to the current/original set point then set the current set point to the new set point, else do nothing. 

Recomendations:   
- Use the app.html template found in (TODO) which you will use in the next step. 
- All html in bold must have an id attribute.
- No CSS needed, don't focus styling your app.
- Check setInterval(), clearInterval(), setTimeout() and clearTiemout() for the timers.
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




 



