document.getElementById('upload-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const fileInput = document.getElementById('file-input');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    const response = await fetch('/upload', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    if (result.result) {
        const resultImage = document.getElementById('result-image');
        resultImage.src = result.result;
        resultImage.style.display = 'block';
    } else {
        alert('Error: ' + result.error);
    }
});
