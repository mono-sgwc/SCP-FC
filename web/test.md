<html lang="en">
    <p align="center">
        <head>
            <style>
                img {
                    cursor: pointer;
                    width: auto;
                    height: auto;
                }
            </style>
        </head>
        <body>
            <img id="clickableImage1" src="https://img.shields.io/badge/GO_TO-MAIN_PAGE-ffffff?style=for-the-badge&labelColor=000&color=fff" title="Main Page" onclick="changeImage()">
            <script>
                function changeImage() {
                    var image = document.getElementById('clickableImage1');
                    if (image.src.endsWith('image1.jpg')) {
                        image.src = 'https://img.shields.io/badge/NO-ESCAPE-ffffff?style=for-the-badge&labelColor=ff0000&color=ff9999';
                    } else {
                        image.src = 'image1.jpg';
                    }
                }
            </script>
        </body>
        <head>
            <style>
                img {
                    cursor: pointer;
                    width: auto;
                    height: auto;
                }
            </style>
        </head>
        <body>
            <img id="clickableImage2" src="https://img.shields.io/badge/GO_TO-ALL_ENTRIES-ffffff?style=for-the-badge&labelColor=000&color=fff" title="ALL ENTRIES" onclick="changeImage()">
            <script>
                function changeImage() {
                    var image = document.getElementById('clickableImage2');
                    if (image.src.endsWith('image1.jpg')) {
                        image.src = 'https://img.shields.io/badge/NO-ESCAPE-ffffff?style=for-the-badge&labelColor=ff0000&color=ff9999';
                    } else {
                        image.src = 'image1.jpg';
                    }
                }
            </script>
        </body>
    </p>
</html>
