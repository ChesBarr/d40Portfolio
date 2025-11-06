
console.log("Javascript by Chester");

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

// Funny change pfp

// function toggleImage() {
//     const file_loc = 'assets/img/';
//     const image = document.getElementById('myProfile');
//     image.src = image.src.includes(file_loc + 'formal1x1.jpg') ? file_loc + 'smile-informal.gif' : file_loc + 'formal1x1.jpg';
// }


// Table Grades Code

// // G11 1st Sem
// let g11_semA = [
//         ["1st","2nd","Semester Final Grade"],
//         ["Earth Science","84","88"],
//         ["Empowerment Technologies &#40;E-Tech&#41;: ICT for Professional Tracks","87","74"],
//         ["English for Academic and Professional Purposes","85","80"],
//         ["General Mathematics","80","78"],
//         ["Homeroom G11A","Excellent","Excellent"],
//         ["Introduction to Philosophy of the Human Person/Pambungad sa Pilosopiya ng Tao","73","77"],
//         ["Oral Communication in Context","82","78"],
//         ["Physical Education &amp; Health G11A","77","93"],
//         ["Understanding Culture, Society and Politics","85","88"],
// ];

// // G11 2nd Sem
// let g11_semB = [
//         ["3rd","4th","Semester Final Grade"],
//         ["21st Century Literature from the Philippines and the World","84","94"],
//         ["Animation &#40;NC II&#41; Part 1","92","92"],
//         ["Homeroom G11B","Excellent","Excellent"],
//         ["Physical Education &amp; Health G11B","90","93"],
//         ["Physical Science","83","91"],
//         ["Practical Research 1","82","93"],
//         ["Reading and Writing Skills","85","93"],
//         ["Statistics and Probability","81","90"]
// ];

// function change_tbl(selectElement){

//     let grades_tbl = document.getElementById('ama-shs');
//     grades_tbl.innerHTML = "";

//     const selectedValue = selectElement.value;
    
//     let array_grades = [];
//     if(selectedvalue = "g11_semA"){
//         array_grades = g11_semA.slice();
//     }else if(selectedvalue = "g11_semB"){
//         array_grades = g11_semB.slice();
//     }else{
//         grades_tbl.innerHTML = "None Selected";
//         return;
//     }

    
//     let thead = document.createElement('thead');
//     let theadRow = thead.insertRow();
//     var headCell = document.createElement('th');




//     let tbody = document.createElement('tbody');
//     let row = tbody.insertRow();
//     let cell = row.insertCell();
    
//     const len = array_grades.length;
//     for(let i = 0; i < len; i++){
//         console.log(array_grades[i]);
        
//         const wid = array_grades[i].length;
//         for(let j = 0; j < wid; j++){
//             console.log(array_grades[i][j]);

//             let text = document.createTextNode(array_grades[i][j]);
//             cell.appendChild(text);
//             grades_tbl.appendChild(tbody);
//         }
//     }
    
//     // Function to add rows to the table
//     function addRows(table, data) {
//         var tbody = table.getElementsByTagName('tbody')[0];
//         for (var i = 0; i < data.length; i++) {
//         var newRow = tbody.insertRow(i);
//         for (var j = 0; j < data[i].length; j++) {
//             var newCell = newRow.insertCell(j);
//             newCell.innerHTML = data[i][j];
//         }
//         }
//     }
    
//     // Call the function to add rows
//     addRows(grades_tbl, array_grades);

// }

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