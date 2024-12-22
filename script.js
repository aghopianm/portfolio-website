document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent the default form submission

  // Create a FormData object from the form
  const formData = new FormData(this);

  // Send form data to Formspree using Fetch API
  fetch('https://formspree.io/f/mdkkoolb', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      // Show the thank you message if the form was successfully submitted
      alert('Thank you for your message, I will get back to you soon!');
      this.reset();  // Reset the form
    } else {
      // Show an error message if submission fails
      alert('Oops! Something went wrong. Please try again.');
    }
  })
  .catch(error => {
    // Show an error message if there's an issue with the request
    alert('Oops! Something went wrong. Please try again.');
  });
});
