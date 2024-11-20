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

(function () {
	window.onpageshow = function(event) {
		if (event.persisted) {
			window.location.reload();
		}
	};
})();
