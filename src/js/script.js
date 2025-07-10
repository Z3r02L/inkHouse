// incHouse/public/js/script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Single-page site script loaded!');

    // Example of a simple interactive element
    const myButton = document.getElementById('myButton');
    if (myButton) {
        myButton.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
});
