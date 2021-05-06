// Function that will get the string to search
function setSearch(e) {
    search = document.getElementById('userSearch').value;
    if(!e.key || e.key === 'Enter') {
        if(search !== '') {
            window.location.href = "http://127.0.0.1:5500/searchResult.html";
            localStorage.setItem("search", search);
        }
    }
}

// Function that loads the value of search and set them in the desired positions
function loadSearch() {
    const search = localStorage.getItem("search");
    const str = search.replace(/\s/g, '');
    const capitalized = search[0].toUpperCase() + search.slice(1) + " : Home";
    document.getElementById("userSearch").value = search;
    document.getElementById("searchSpan").innerHTML = search;
    document.getElementById("resultURL").innerHTML = "https://" + str + ".com.br";
    document.getElementById("resultURL").href = "https://" + str + ".com.br";
    document.getElementById("resultHomeURL").innerHTML = capitalized
    document.getElementById("resultHomeURL").href = "https://" + str + ".com.br";
    // get all related boxes to change the innerHTML
    const boxes = Array.prototype.slice.call(document.getElementsByClassName("related__text"));
    boxes.map(boxText => {
        const newInnerHTML = getNewText(boxText.innerHTML, search);
        document.getElementById(boxText.id).innerHTML = newInnerHTML;
    });
}

// This function returns a new string to insert into the related values, based on search text
function getNewText(text, search) {
    const split = ' ';
    const strings = text.split(split);
    
    return search + split + strings[strings.length -1];
}

// Function that return the placeholder into Search input
function unSetSearch() {
    document.getElementById("userSearch").value = null;
}

// Function to show when a button in nav bar is clicked
function showAlert(){
    alert("JS is commanding HuEhUe");
}

// Function that will redirect the user when clicked in the related fields
function redirectSearch(id) {
    const newSearch = document.getElementById(id).innerHTML;
    localStorage.setItem("search", newSearch);
    window.location.href = "http://127.0.0.1:5500/searchResult.html";
}