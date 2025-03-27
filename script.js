let arr = [];

function getoutput() {
    document.getElementById("output").value = arr.join(",");
}

//push function
function addinput() {
    let input = document.getElementById("input").value.trim();
    arr.push(input);
    document.getElementById('input').value = "";
    getoutput();
}

//toString function
function ToString() {
    document.getElementById("output").value = arr.toString();
    console.log(arr);
    
}

//reverse function
function reverseElement() {
    arr.reverse();
    getoutput();
    console.log(arr); 
}

//sort function
function sortElement() {
    arr.sort();
    getoutput();
    console.log(arr); 
}

//pop function
function removeElement() {
    arr.pop(); 
    getoutput();
    console.log(arr);
}

//shift function
function shiftElement() {
    arr.shift(); 
    getoutput();
    console.log(arr);
    
}

//unshift function
function unshiftElement() {
    let newelement=prompt("enter any value to unshift");
    arr.unshift(newelement); 
    getoutput();
    console.log(arr);
}

//slice function
function sliceElement() {
    let startindex=parseInt(prompt("enter the index value"));
    let endindex=parseInt(prompt("enter the index value"));
    
    let slicedArray = arr.slice(startindex, endindex);
    document.getElementById("output").value = slicedArray; 
    console.log(slicedArray); 
}

//splice function
function spliceElement() {
    let startindex=parseInt(prompt("enter the start index value"));
    let deletecount=parseInt(prompt("enter the delete count value"));
    let addelement1=(prompt("enter the new value"));
    let addelement2=(prompt("enter the new value"));

    let splicedArray = arr.splice(startindex, deletecount,addelement1,addelement2);
    document.getElementById("output").value = splicedArray; 
    console.log(splicedArray); 
    getoutput();
}

//concat function
function concatElement() {
    let newarray=prompt("enter the array");
    
    let concatArray = arr.concat(newarray);
    document.getElementById("output").value = concatArray; 
    console.log(concatArray); 
}

//find function
function findElement() {
    let findvalue=prompt("enter the value to find in array");
    
    let foundArray = arr.find(element => element === findvalue);
    document.getElementById("output").value = foundArray; 
    console.log(foundArray); 
}

//filter function
function filterElement() {
    let filtervalue=prompt("enter the value to filter in array");
    
    let filteredArray = arr.filter(element => element === filtervalue);
    document.getElementById("output").value = filteredArray; 
    console.log(filteredArray); 
}
