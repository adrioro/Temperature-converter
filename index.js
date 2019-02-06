/*
APP'S specifications:
Input fields should be of type 'number'
The input field for Fahrenheit should have the id 'Fahrenheit'
The input field for Celsius should have the id 'Celsius'
Conversion should happen instantaneously i.e changing the value in
one of the input fields should trigger the change in the other.*/

//Fahrenheit to Celsius ℃=(℉-32)/1.8
//Celsius to Fahrenheit ℉=(℃*1.8)+32

function fFunction() {
    let Fht = document.getElementById("Fahrenheit").value;
    let newCls = (Fht - 32) / 1.8;
    document.getElementById("Celsius").value = newCls;
};

function cFunction() {
    let Cls = document.getElementById("Celsius").value;
    let newFht = (Cls * 1.8) + 32;
    document.getElementById("Fahrenheit").value = newFht;
};