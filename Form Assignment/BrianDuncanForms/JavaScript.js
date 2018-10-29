function Submit()
{
    if (confirm("Are sure you want to submit?") == true){
        alert('Form Submited!(We now have all of your data)');
        location.reload();
    }
    
}