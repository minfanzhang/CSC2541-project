/* Todo js */

'use strict';

// Let's get the elements we need to add tasks
const new_mode_button = document.querySelector('#new_mode');
const save_button = document.querySelector('#save_result');

new_mode_button.addEventListener('click', modifyMode);

function modifyMode(e) {
    var prompt_sentence = document.querySelector('#hidden-info');
    prompt_sentence.innerHTML = " - Pay attention to the speculation words in red."

    var speculation_word = document.querySelector('#speculation-word');
    speculation_word.style.color = "red";
}

save_button.addEventListener('click', showResult);

function showResult(e) {
    var results = document.querySelector('#results');
    results.innerHTML = top_ten_words[0] + ", " + output1.innerHTML + "\r" +
        top_ten_words[1] + ", " + output2.innerHTML + "\r" +
        top_ten_words[2] + ", " + output3.innerHTML + "\r" +
        top_ten_words[3] + ", " + output4.innerHTML + "\r" +
        top_ten_words[4] + ", " + output5.innerHTML + "\r" +
        top_ten_words[5] + ", " + output6.innerHTML + "\r" +
        top_ten_words[6] + ", " + output7.innerHTML + "\r" +
        top_ten_words[7] + ", " + output8.innerHTML + "\r" +
        top_ten_words[8] + ", " + output9.innerHTML + "\r" +
        top_ten_words[9] + ", " + output10.innerHTML;

}




// Top ten words to infer
var top_ten_words = ["she", "he", "patient", "it", "they", "this", "the", "there", "we", "He"];

let i;
// Get the words
for (i = 1; i < 11; i++) {
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

// Auto-insert words
const candidates = document.querySelectorAll(".candidate");
/*
for (i = 0; i < candidates.length; i++) {
    candidates[i].onmouseover = function(){
        document.getElementById("mask-word").innerHTML = i;
        document.getElementById("mask-word").style.color = "purple";
    }
    candidates[i].onmouseout = function(){
        document.getElementById("mask-word").innerHTML = "-";
        document.getElementById("mask-word").style.color = "black";
    }
}
*/
candidates[0].onmouseover = function(){
    document.getElementById("mask-word").innerHTML = top_ten_words[0];
    document.getElementById("mask-word").style.color = "purple";
};
candidates[0].onmouseout = function(){
    document.getElementById("mask-word").innerHTML = "-";
    document.getElementById("mask-word").style.color = "black";
};

candidates[1].onmouseover = function(){
    document.getElementById("mask-word").innerHTML = top_ten_words[1];
    document.getElementById("mask-word").style.color = "purple";
};
candidates[1].onmouseout = function(){
    document.getElementById("mask-word").innerHTML = "-";
    document.getElementById("mask-word").style.color = "black";
};

candidates[2].onmouseover = function(){
    document.getElementById("mask-word").innerHTML = top_ten_words[2];
    document.getElementById("mask-word").style.color = "purple";
};
candidates[2].onmouseout = function(){
    document.getElementById("mask-word").innerHTML = "-";
    document.getElementById("mask-word").style.color = "black";
};

candidates[3].onmouseover = function(){
    document.getElementById("mask-word").innerHTML = top_ten_words[3];
    document.getElementById("mask-word").style.color = "purple";
};
candidates[3].onmouseout = function(){
    document.getElementById("mask-word").innerHTML = "-";
    document.getElementById("mask-word").style.color = "black";
};

candidates[4].onmouseover = function(){
    document.getElementById("mask-word").innerHTML = top_ten_words[4];
    document.getElementById("mask-word").style.color = "purple";
};
candidates[4].onmouseout = function(){
    document.getElementById("mask-word").innerHTML = "-";
    document.getElementById("mask-word").style.color = "black";
};

candidates[5].onmouseover = function(){
    document.getElementById("mask-word").innerHTML = top_ten_words[5];
    document.getElementById("mask-word").style.color = "purple";
};
candidates[5].onmouseout = function(){
    document.getElementById("mask-word").innerHTML = "-";
    document.getElementById("mask-word").style.color = "black";
};

candidates[6].onmouseover = function(){
    document.getElementById("mask-word").innerHTML = top_ten_words[6];
    document.getElementById("mask-word").style.color = "purple";
};
candidates[6].onmouseout = function(){
    document.getElementById("mask-word").innerHTML = "-";
    document.getElementById("mask-word").style.color = "black";
};

candidates[7].onmouseover = function(){
    document.getElementById("mask-word").innerHTML = top_ten_words[7];
    document.getElementById("mask-word").style.color = "purple";
};
candidates[7].onmouseout = function(){
    document.getElementById("mask-word").innerHTML = "-";
    document.getElementById("mask-word").style.color = "black";
};

candidates[8].onmouseover = function(){
    document.getElementById("mask-word").innerHTML = top_ten_words[8];
    document.getElementById("mask-word").style.color = "purple";
};
candidates[8].onmouseout = function(){
    document.getElementById("mask-word").innerHTML = "-";
    document.getElementById("mask-word").style.color = "black";
};

candidates[9].onmouseover = function(){
    document.getElementById("mask-word").innerHTML = top_ten_words[9];
    document.getElementById("mask-word").style.color = "purple";
};
candidates[9].onmouseout = function(){
    document.getElementById("mask-word").innerHTML = "-";
    document.getElementById("mask-word").style.color = "black";
};

candidates[10].onmouseover = function(){
    document.getElementById("mask-word").innerHTML = top_ten_words[10];
    document.getElementById("mask-word").style.color = "purple";
};
candidates[10].onmouseout = function(){
    document.getElementById("mask-word").innerHTML = "-";
    document.getElementById("mask-word").style.color = "black";
};


