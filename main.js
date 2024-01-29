document.getElementById('uploadImage').addEventListener('change', function() {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('imageCarree').src = e.target.result;
    };
    reader.readAsDataURL(file);
});
