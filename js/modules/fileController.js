export const fileController = () => {
  const file = document.querySelector('.file');
  const filePreview = file.querySelector('.file__preview');
  const fileInput = file.querySelector('.file__input');

  fileInput.addEventListener('change', (event) => {
    console.log(event.target.files)
    if (event.target.files.length > 0) {
      const fileSrc = URL.createObjectURL(event.currentTarget.files[0]);
      file.classList.add('file_active');
      filePreview.src = fileSrc;
      filePreview.style.display = 'block';
    } else {
      file.classList.remove('file_active');
      filePreview.src = '';
      filePreview.style.display = 'none';
    }
  })
};