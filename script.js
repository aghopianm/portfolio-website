document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent the default form submission

  // Log to confirm form submission attempt
  console.log('Form submission attempted');

  // Create a FormData object from the form
  const formData = new FormData(this);

  // Send form data to Formspree using Fetch API
  fetch('https://formspree.io/f/mdkkoolb', {
    method: 'POST',
    body: formData,
    redirect: 'follow' // Ensure redirects are followed
  })
  .then(response => {
    console.log('Response from Formspree:', response); // Log the entire response object

    // Check if the response is successful (200 or 303 status)
    if (response.status === 200 || response.status === 303) {
      // Form submission was successful, show the thank you message
      alert('Thank you for your message, I will get back to you soon!');
      this.reset();  // Reset the form
    } else {
      // Log the response and show the error message if submission fails
      console.error('Form submission failed:', response);
      alert('Oops! Something went wrong. Please try again.');
    }
  })
  .catch(error => {
    // Log and show an error message if there's an issue with the request
    console.error('Error in submission:', error);
    alert('Oops! Something went wrong. Please try again.');
  });
});
