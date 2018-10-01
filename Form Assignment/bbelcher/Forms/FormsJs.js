


// {/* function displayFunction() 
// {
//     var x = document.getElementById("myDIV");

//     if (x.style.display === "none") 
//     {
//         x.style.display = "block"
//     }     
//     else 
//     {
//         x.style.display = "none"
//     }
// } */}

var button = document.getElementById("MyButton")

button.addEventListener("click", function()
{
    console.log("button clicked");
    var genreChoice=document.querySelector("input[name='genreChoice']:checked").value; 
    console.log(genreChoice); 
    genre(genreChoice)
}); 

function genre(genreChoice)
{    
    if (genreChoice === "Metal")
    {
        document.getElementById("metalband").style.opacity = "1";
    }
    if (genreChoice === "Rock")
    {
        document.getElementById("rockband").style.opacity = "1";
    }
    if (genreChoice === "Jazz")
    {
        document.getElementById("jazzband").style.opacity = "1";
    }
}
