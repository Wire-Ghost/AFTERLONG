function showPopup() { 

    const name = document.getElementById('name').value.trim();

    const popupMessage=name ? `Hi ${name}!` : "Hi there!";
    document.getElementById('popup-message').textContent=popupMessage;

    document.getElementById('custom-popup').style.display='flex';

}

function redirect() {
    
    closePopup();

    
    window.location.href = "https://idkwhatimmaking.netlify.app";
}

function closePopup() {
   
    document.getElementById('custom-popup').style.display = 'none';
}

const [entry] = performance.getEntriesByType("navigation");

// Show it in a nice table in the developer console
console.table(entry.toJSON());

if (entry["type"] === "back_forward")
    location.reload();
