
function ok() {
   
    let name= document.getElementById("name").value;
    let user=name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
    alert("Hi"+ ' ' + user + ' ' + " "); 

    window.location.href="https://idkwhatimmaking.netlify.app/";

}