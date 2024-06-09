
console.log("Javascript Active");

// Theme Code
document.getElementById('lightModeToggle').addEventListener("click", ()=>{
    document.body.classList.toggle('light-mode');
    darkModeToggle.innerHTML = darkModeToggle.innerHTML === "Light" ? "Dark" : "Light" ;
});

// Sidebar Code

function asideClose(){
    let sidebar = document.getElementById("sidebar");
    let open = "&gt;";
    let close = "&times;";
    let openBgColor = "--nav-bg";
    let openColor = "--nav-text";
    closeButton(sidebar, openAside, open, close, openColor, closeColor, openBgColor, closeBgColor);
}

/*************************************************************************************************************************************************/
/* v UTILITIES v */

// Get CSS Property
function getCssProperty(element, propertyName) {
    return getComputedStyle(element).getPropertyValue(propertyName);
}

// Close Button Design
let open = '+';
let close = '×';
let openColor = "var(--text-color-oppose)";
let closeColor = "white";
let openBgColor = "var(--background-color-oppose)";
let closeBgColor = "red";
function closeButton(displayElement, button, open, close, openColor, closeColor, openBgColor, closeBgColor){
    displayElement.style.display = displayElement.style.display === "block" ? "none" : "block";
    button.style.backgroundColor = button.style.backgroundColor === closeBgColor ? getCssProperty(button, openBgColor) : closeBgColor;
    button.style.color = button.style.color === closeColor ? getCssProperty(button, openColor) : closeColor;
    let currentInnerHTML = button.innerHTML;
    button.innerHTML = currentInnerHTML === open ? close : open;
}