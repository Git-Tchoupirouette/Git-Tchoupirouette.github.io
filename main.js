document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('addOverlayBtn').addEventListener('click', function() {
    let imgInput = document.getElementById('imgInput');
    let userImage = document.getElementById('userImage');

    if (imgInput.files.length !== 0) {
      let imgFile = imgInput.files[0];
      let reader = new FileReader();

      reader.onload = function(e) {
        userImage.src = e.target.result;
      }
      reader.readAsDataURL(imgFile);
    } else {
      alert("Veuillez sélectionner une image");
    }
  });

  document.getElementById('downloadLink').addEventListener('click', function() {
    let canvas = document.createElement('canvas');
    let baseImage = document.getElementById('baseImage');
    let userImage = document.getElementById('userImage');

    canvas.width = baseImage.width;
    canvas.height = baseImage.height;
    let context = canvas.getContext('2d');
    context.drawImage(baseImage, 0, 0, baseImage.width, baseImage.height);
    context.globalAlpha = 0.5; // Réglez l'opacité selon vos besoins
    context.drawImage(userImage, 0, 0, baseImage.width, baseImage.height);

    let downloadLink = document.getElementById('downloadLink');
    downloadLink.href = canvas.toDataURL('image/png');
  });
});
