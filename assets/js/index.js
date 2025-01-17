document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var whatsapp = document.getElementById('whatsapp').value.trim();
    var messageContent = document.getElementById('message').value.trim();
    if (!name || !email || !whatsapp || !messageContent) {alert('Please fill out all fields.');return;}
    var message = `Name: ${name}\nEmail: ${email}\nWhatsApp Number:+${whatsapp}\nMessage: ${messageContent}`;
    var telegramToken = '7553886398:AAHjwXeu4BSifX-PfzJeQ8XeLsnYJybDd9M';
    var chatId = '6446705072';
    var url = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
    fetch(url).then(response => response.json()).then(data => {if (data.ok) {alert('Message sent successfully!');document.getElementById('contactForm').reset();} else {alert('Error sending message: ' + data.description);}}).catch(error => {console.error('Error:', error);alert('Error sending message: ' + error.message);});
});