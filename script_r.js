document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value.split(',');
  
    const photoInput = document.getElementById('photo');
    const photo = URL.createObjectURL(photoInput.files[0]);
  
    const resumeContent = `
      <h3>${name}</h3>
      <img src="${photo}" alt="Profile Photo" style="width: 150px; height: 150px; border-radius: 50%; margin: 1rem 0;">
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Skills:</strong> ${skills.join(', ')}</p>
    `;
  
    document.getElementById('resumeContent').innerHTML = resumeContent;
    document.getElementById('resumePreview').style.display = 'block';
  });
  