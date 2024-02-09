// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded.");

    const changeText = document.querySelector("#text")
    changeText.textContent = "This is really cool!";
})

console.log("This one will probably appear first.");