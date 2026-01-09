/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let unitinput = document.getElementById("unit-inpt")
let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const feetToMeter = 0.3048

const literToGallon =  0.264
const gallonsToLiters = 3.78541

const kiloToPound =  2.204
const poundToKilo = 0.453592

convertBtn.addEventListener("click", function() {
    let baseValue = Number(unitinput.value)
    
    lengthEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(2)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(2)} meters`
    
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(2)} gallons | ${baseValue} gallons = ${(baseValue * gallonsToLiters).toFixed(2)} liters`
    
    massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(2)} pounds | ${baseValue} pounds = ${(baseValue * poundToKilo).toFixed(2)} kilos`
    
})
