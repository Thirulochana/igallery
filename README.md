# Ex.07 Design of Interactive Image Gallery
## Date:25/12/25

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
igallery.html

<html>
<head>
    <title>Interactive Image Gallery</title>
    <link rel="stylesheet" href="styles.css"> 
</head>
<body>

    <div class="top-banner">Interactive Image Gallery</div>

    <div class="main-content">
        <div class="gallery-container">
            <img id="galleryImage" class="gallery-image" src="thiruchendur.jpg ">
            <div id="caption" class="caption">BIG TEMPLE </div>
            <div class="gallery-buttons">
                <button onclick="prevImage()">Previous</button>
                <button onclick="nextImage()">Next</button>
            </div>
        </div>
    </div>

    <div class="footer-banner">
       Desinged & Developed by Thirulochana S(25007911) &copy;
    </div>

    <script src="index.js"></script>
</body>
</html>

index.js

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

styles.css

body {
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    height: 100;
    background-color: white;
}

.top-banner {
    background-color:rgb(229, 192, 239);
    text-align: center;
    padding: 15px;
    font-size: 22px;
    font-weight: bold;
}

.main-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.gallery-container {
    background: rgb(239, 200, 240);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 480px;
}

.gallery-image {
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 10px;
}

.caption {
    margin: 15px 0;
    font-size: 18px;
    font-weight: 500;
}

.gallery-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
}

button {
    padding: 10px 25px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: rgb(128, 16, 123);
    color: rgb(242, 245, 245);
    font-size: 16px;
}

.footer-banner {
    background-color: rgb(229, 192, 239);
    color: rgb(27, 25, 23);
    text-align: center;
    padding: 10px;
    font-size: 14px;
}
```

## OUTPUT:
![alt text](one.png)
![alt text](two.png)
![alt text](three.png)

## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
