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

window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || 
                           ( typeof window.performance != "undefined" && 
                                window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
      // Handle page restore.
      window.location.reload();
    }
  });