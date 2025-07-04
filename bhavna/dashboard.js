document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-dark');
  const body = document.body;

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });

  const fileInput = document.getElementById('fileInput');
  const pdfPreview = document.getElementById('pdfPreview');

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file && file.type === "application/pdf") {
      pdfPreview.textContent = `Selected: ${file.name}`;
    } else {
      pdfPreview.textContent = "No valid PDF selected.";
    }
  });
});
