
console.log("Javascript Active");

// Personal Info Modal Code

function openModal(elementId,fogId){
    let window = document.getElementById(elementId);
    window.style.display = 'flex';
    let fog = document.getElementById(fogId);
    fog.style.display = 'block';
}
function collapseModal(elementId,fogId){
    let window = document.getElementById(elementId);
    window.style.display = 'none';
    let fog = document.getElementById(fogId);
    fog.style.display = 'none';
}

/*************************************************************************************************************************************************/
/* v UTILITIES v */

// Get CSS Property
function getCssProperty(element, propertyName) {
    return getComputedStyle(element).getPropertyValue(propertyName);
}

function goto(passedLink){
    let link = passedLink;
    window.location.href = link;
}