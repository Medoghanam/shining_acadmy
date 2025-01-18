/*document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var whatsapp = document.getElementById('whatsapp').value.trim();
  var messageContent = document.getElementById('message').value.trim();

  // Check if all fields are filled
  if (!name || !email || !whatsapp || !messageContent) {
    alert('Please fill out all fields.');
    return;
  }

  // Create message
  var message = `Name: ${name}\nEmail: ${email}\nWhatsApp Number: +${whatsapp}\nMessage: ${messageContent}`;

  // Telegram bot credentials
  var telegramToken = '7553886398:AAH6jLCaWDMDpDe15H0Q4TUOE-_z_hYySOQ';
  var chatId = '6446705072';
  var url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

  // Send data to Telegram API
  fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
      } else {
        alert('Error sending message: ' + data.description);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error sending message: ' + error.message);
    });
});*/
const logo = document.querySelector('.acadmy_float_logo');
logo.addEventListener('click', () => {logo.classList.toggle('expanded');});
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {vent.preventDefault();}});