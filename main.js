document.getElementById('addOverlayBtn').addEventListener('click', function() {
    let imgInput = document.getElementById('imgInput');
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let img = new Image();
    let file = imgInput.files[0];
    let reader = new FileReader();

    reader.onloadend = function() {
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            // Ajouter votre élément par-dessus l'image ici
            // Par exemple : ctx.fillText('Mon texte', 50, 50);
            ctx.fillText('Salut', 50, 50);
            document.getElementById('downloadLink').href = canvas.toDataURL("image/jpeg");
        }
        img.src = reader.result;
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
        alert('Veuillez sélectionner une image.');
    }
});
