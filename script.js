document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent the default form submission

  const formData = new FormData(this);

  // Send form data to Formspree using Fetch API
  fetch('https://formspree.io/f/mdkkoolb', {
    method: 'POST',
    body: formData,
    redirect: 'manual'  // Prevent automatic redirect (handle it manually)
  })
  .then(response => {
    // Check if the response is successful (200 or 303 status)
    if (response.ok) {
      alert('Thank you for your message, I will get back to you soon!');
      this.reset();  // Reset the form
    } else {
      console.error('Form submission failed:', response);
      alert('Oops! Something went wrong. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error in submission:', error);
    alert('Oops! Something went wrong. Please try again.');
  });
});
