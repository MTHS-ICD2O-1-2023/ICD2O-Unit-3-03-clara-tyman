// Created by: Clara Tyman
// Created on: April 2024
// This file contains the JS functions for index.html

'use strict'

/**
 * This function calculates 
 */
function calculate() {
  // input
  const radius = parseFloat(document.getElementById('radius').value)

  // process
  const volume = 4 / 3 * Math.PI * Math.pow(radius, 3)

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm³'
}