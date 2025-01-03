document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form') as HTMLFormElement;

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;

    console.log('Contact Form Submission:', { name, email, message });

    alert('Thank you for reaching out! I will get back to you shortly.');
    contactForm.reset();
  });
});
