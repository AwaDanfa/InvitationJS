// generate a random ticket number in a range between 10000 and 90000
let min = 10000;
let max = 90000;
let num = Math.floor(Math.random() * min) + max;

document.getElementById('ticketNum').innerText = num;
// when the user click on "Yes" button, run the function maybeAlert 
const maybeAlert = () => {
    alert('Amazing! :D');
}
// wehen the user click on "Definetely" button, run the function definetelyPopUp
const definetelyPopUp = () => {
    alert('See you then!');
}
//  activate the signup prompt
const signUpPrompt = () => {
    let name = prompt('Great! Please provide your name: '); // save the user's name into a variable
    prompt('Please provide your email: '); // this does nothing. once the user hits enter, their input is gone
// display a greeting
    document.getElementById('userMsg').innerText = `See you then ${name}!`
}





