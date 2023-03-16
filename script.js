const form = document.querySelector('#contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const message = form.elements['message'].value;

  const subject = `New message from ${name}`;
  const body = `From: ${name} (${email})\n\nMessage:\n${message}`;

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  window.location.href = `mailto:moraindante2001@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
  
  form.reset();
});
