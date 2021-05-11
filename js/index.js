

// Function that will get the string to search
function searchInputAction(e) {
    const { target : { value }, key } = e;
    if(!key || key === 'Enter') {
        if(value !== '') {
            window.location.href = `http://127.0.0.1:5500/searchResult.html?search=${value}`;
        }
    }
}

function editElementByID(elementID, innerHTMLValue, hrefValue) {
    document.getElementById(elementID).innerHTML = innerHTMLValue;
    document.getElementById(elementID).href = hrefValue || innerHTMLValue;
}

// Function that loads the value of search and set them in the desired positions
function loadSearch() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchString = urlParams.get('search');

    const searchStringWithoutSpaces = searchString.replace(/\s/g, '');
    const capitalizedSearchString = searchString[0].toUpperCase() + searchString.slice(1);
    const urlWithSearchString = "https://" + searchStringWithoutSpaces + ".com.br";
    const firstResultString = capitalizedSearchString + " : Home";

    document.getElementById("userSearch").value = searchString;
    document.getElementById("searchSpan").innerHTML = capitalizedSearchString;
    editElementByID("resultURL", urlWithSearchString);
    editElementByID("resultHomeURL", firstResultString, urlWithSearchString);
    // get all related boxes to change the innerHTML
    const boxes = Array.prototype.slice.call(document.getElementsByClassName("related__text"));
    boxes.map(boxText => {
        const newInnerHTML = getNewText(boxText.innerHTML, searchString);
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
    window.location.href = `http://127.0.0.1:5500/searchResult.html?search=${newSearch}`;
}

// Function to open the menu__modal
function openModal() {
    document.getElementById("menu__modal").style.display = "block";
}