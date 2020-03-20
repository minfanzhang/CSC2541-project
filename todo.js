/* Todo js */

'use strict';

// Let's get the elements we need to add tasks
const new_mode_button = document.querySelector('#new_mode');

new_mode_button.addEventListener('click', modifyMode);

function modifyMode(e) {
	var prompt_sentence = document.querySelector('#hidden-info');
	prompt_sentence.innerHTML = " - Pay attention to the speculation words in red."
}

// Top ten words to infer
let top_ten_words = ["she", "he", "patient", "it", "they", "this", "the", "there", "we", "He"];

// Get the words
for (var i = 1; i < 11; i++) {
	document.getElementById("word" + i.toString()).innerHTML = top_ten_words[i - 1];
}

// Slider 1
var slider1 = document.getElementById("slider1");
var output1 = document.getElementById("prob1");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
}

// Slider 2
var slider2 = document.getElementById("slider2");
var output2 = document.getElementById("prob2");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
}

// Slider 3
var slider3 = document.getElementById("slider3");
var output3 = document.getElementById("prob3");
output3.innerHTML = slider3.value;

slider3.oninput = function() {
  output3.innerHTML = this.value;
}

// Slider 4
var slider4 = document.getElementById("slider4");
var output4 = document.getElementById("prob4");
output4.innerHTML = slider4.value;

slider4.oninput = function() {
  output4.innerHTML = this.value;
}

// Slider 5
var slider5 = document.getElementById("slider5");
var output5 = document.getElementById("prob5");
output5.innerHTML = slider5.value;

slider5.oninput = function() {
  output5.innerHTML = this.value;
}

// Slider 6
var slider6 = document.getElementById("slider6");
var output6 = document.getElementById("prob6");
output6.innerHTML = slider6.value;

slider6.oninput = function() {
  output6.innerHTML = this.value;
}

// Slider 7
var slider7 = document.getElementById("slider7");
var output7 = document.getElementById("prob7");
output7.innerHTML = slider7.value;

slider7.oninput = function() {
  output7.innerHTML = this.value;
}

// Slider 8
var slider8 = document.getElementById("slider8");
var output8 = document.getElementById("prob8");
output8.innerHTML = slider8.value;

slider8.oninput = function() {
  output8.innerHTML = this.value;
}

// Slider 9
var slider9 = document.getElementById("slider9");
var output9 = document.getElementById("prob9");
output9.innerHTML = slider9.value;

slider9.oninput = function() {
  output9.innerHTML = this.value;
}

// Slider 10
var slider10 = document.getElementById("slider10");
var output10 = document.getElementById("prob10");
output10.innerHTML = slider10.value;

slider10.oninput = function() {
  output10.innerHTML = this.value;
}