document.getElementById('addOverlayBtn').addEventListener('click', function() {
    let imgInput = document.getElementById('imgInput');
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    if (imgInput.files.length !== 0) {
        let imgFile = imgInput.files[0];
        let img = new Image();
        let reader = new FileReader();

        reader.onload = function(e) {
            let img = new Image();
            img.src = e.target.result;
            img.onload = function() {
                if (img.width !== img.height) {
                    alert('Veuillez télécharger une image carrée.');
                    imgInput.value = '';
                } else {
                    let baseImage = new Image();
                    baseImage.src = 'base_image.png'; // Spécifiez le nom de votre image de base
                    baseImage.onload = function() {
                        canvas.width = baseImage.width;
                        canvas.height = baseImage.height;
                        ctx.drawImage(baseImage, 0, 0);
                        ctx.drawImage(img, 0, 0, baseImage.width, baseImage.height); // Superposer l'image de l'utilisateur à l'image de base avec les mêmes dimensions
                        document.getElementById('downloadLink').href = canvas.toDataURL("image/png"); // Spécifiez le type d'image ici
                    };
                }
            };
        }
        reader.readAsDataURL(imgFile);
    } else {
        alert("Veuillez sélectionner une image");
    }
});
