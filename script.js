document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message, Mina will get back to you soon!');
    this.reset();
  });
  