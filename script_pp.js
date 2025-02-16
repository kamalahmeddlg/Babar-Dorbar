document.getElementById('generatePhoto').addEventListener('click', () => {
    const fileInput = document.getElementById('photoUpload');
    const previewDiv = document.getElementById('photoPreview');
    const downloadButton = document.getElementById('downloadPhoto');
  
    if (fileInput.files.length === 0) {
      alert('Please upload a photo first!');
      return;
    }
  
    const file = fileInput.files[0];
    const reader = new FileReader();
  
    reader.onload = function(event) {
      const img = new Image();
      img.src = event.target.result;
  
      img.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        // Crop the image to the center (optional crop for square)
        const size = Math.min(img.width, img.height);
        const offsetX = (img.width - size) / 2;
        const offsetY = (img.height - size) / 2;
  
        // Set canvas size to passport size (2 x 2 inches at 300 DPI)
        canvas.width = 600; // 2 inches at 300 DPI
        canvas.height = 600;
  
        // Draw the cropped image into the canvas
        ctx.drawImage(img, offsetX, offsetY, size, size, 0, 0, 600, 600);
  
        // Show the generated photo in the preview
        previewDiv.innerHTML = `<h3>Generated Passport Size Photo:</h3><img src="${canvas.toDataURL()}" alt="Passport Photo" class="photo-preview">`;
  
        // Make the download button visible
        downloadButton.style.display = 'block';
  
        // Add download functionality
        downloadButton.onclick = function() {
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = 'passport_photo.png';
          link.click();
        };
      };
    };
  
    reader.readAsDataURL(file);
  });
  