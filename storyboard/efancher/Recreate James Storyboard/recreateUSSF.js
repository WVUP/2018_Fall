let searchInput = document.getElementById('ussf-search');
console.dir(searchInput);
searchInput.addEventListener('submit', googleSearch);

let displaySearch = document.getElementById('ussf-search-box');
displaySearch.addEventListener('hover', searchBoxDisplay);

function searchBoxDisplay(){
    let button = getElementById('ussfSearchButton');
    let box = getElementById('ussfSearchBox');
    button.classList.add('hide');
    box.classList.remove('.hide');

}