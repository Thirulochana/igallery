const gallery = [
    { src: "thiruchendur.png", caption: "THIRUCHENDUR MURUGAN TEMPLE" },
    { src: "thanjavur.png", caption: "THANJAVUR PERIYA KOVIL" },
    { src: "sholinghur.png", caption: "SRI YOGA NARASIMHAR TEMPLE" },
];

let index = 0;

function updateGallery() {
    document.getElementById("galleryImage").src = gallery[index].src;
    document.getElementById("caption").textContent = gallery[index].caption;
}

function nextImage() {
    index++;
    if (index >= gallery.length) {
        index = 0;
    }
    updateGallery();
}

function prevImage() {
    index--;
    if (index < 0) {
        index = gallery.length - 1;
    }
    updateGallery();
}