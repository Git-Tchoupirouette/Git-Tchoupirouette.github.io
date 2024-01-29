document.getElementById('addOverlayBtn').addEventListener('click', function() {
    let imgInput = document.getElementById('imgInput');
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    if (imgInput.files.length !== 0) {
        let imgFile = imgInput.files[0];
        let img = new Image();
        let reader = new FileReader();

        reader.onload = function(e) {
            img.src = e.target.result;
            img.onload = function() {
                if (img.width !== img.height) {
                    alert('Veuillez télécharger une image carrée.');
                    // Réinitialiser l'input pour que l'utilisateur puisse télécharger une nouvelle image
                    imgInput.value = '';
                } else {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);

                    let overlay = new Image();
                    overlay.src = 'layout_xenai.jpg';
                    overlay.onload = function() {
                        ctx.drawImage(overlay, 0, 0, canvas.width, canvas.height);
                        document.getElementById('downloadLink').href = canvas.toDataURL("image/jpeg");
                    };
                }
            };
        }
        reader.readAsDataURL(imgFile);
    } else {
        alert("Veuillez sélectionner une image");
    }
});
