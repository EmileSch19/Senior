function uploadPhotos() {
    const fileInput = document.getElementById('myfile');
    const files = fileInput.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function (e) {
            const album = document.getElementById('album');

            const photoContainer = document.createElement('div');
            photoContainer.className = 'photo';

            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = file.name;

            const buttons = document.createElement('div');
            buttons.className = 'buttons';

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.onclick = function () {
                album.removeChild(photoContainer);
            };

            const viewBtn = document.createElement('button');
            viewBtn.textContent = 'View';
            viewBtn.onclick = function () {
                window.open(e.target.result, '_blank');
            };

            buttons.appendChild(deleteBtn);
            buttons.appendChild(viewBtn);

            photoContainer.appendChild(img);
            photoContainer.appendChild(buttons);

            album.appendChild(photoContainer);
        };

        reader.readAsDataURL(file);
    }

    // Clear file input after uploading
    fileInput.value = '';
}