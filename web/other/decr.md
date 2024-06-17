<head>
    <style>
        body {
            background-color: #121212;
            color: #FFFFFF;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background-color: #1E1E1E;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            text-align: center;
        }
        input, button {
            background-color: #333;
            color: #FFF;
            border: none;
            padding: 10px;
            border-radius: 5px;
            margin: 5px 0;
        }
        button {
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Decrypt</h2>
        <input type="text" id="textInput" placeholder="Enter Text">
        <button onclick="decrypt()">Decrypt</button>
        <p id="result"></p>
    </div>
    <script>
        const secretKey = 'mySecretKey12345';
        function encrypt() {
            let text = document.getElementById('textInput').value;
            let encrypted = btoa(text.split('').map((char, i) => String.fromCharCode(char.charCodeAt(0) ^ secretKey.charCodeAt(i % secretKey.length))).join(''));
            document.getElementById('result').innerText = `Encrypted: ${encrypted}`;
        }
        function decrypt() {
            let encrypted = document.getElementById('textInput').value;
            let decrypted = atob(encrypted).split('').map((char, i) => String.fromCharCode(char.charCodeAt(0) ^ secretKey.charCodeAt(i % secretKey.length))).join('');
            document.getElementById('result').innerText = `Decrypted: ${decrypted}`;
        }
    </script>
</body>
</html>
