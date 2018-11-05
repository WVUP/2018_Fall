let searchInput = document.getElementById('ussfSearchBox');
console.dir(searchInput);

let submitButton = document.getElementById('ussfSearchSubmit');
searchButton.addEventListener('submit', googleSearch);

let searchValue;

function googleSearch(){

    event.preventDefault();

    searchValue = document.getElementById("ussfSearchInput").value;

    console.log(searchValue);
    
    return;
}