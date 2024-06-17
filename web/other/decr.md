<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hash32 Decrypt</title>
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
        <h2>Hash32 Decrypt</h2>
        <input type="text" id="hashInput" placeholder="Enter Hash32 Value">
        <button onclick="decryptHash32()">Decrypt</button>
        <p id="result"></p>
    </div>

    <script>
        function decryptHash32() {
            let hash = document.getElementById('hashInput').value;
            let result = document.getElementById('result');
            
            // Since hash32 can't be decrypted, we'll display a message
            result.innerText = "Hash32 cannot be decrypted as it is a one-way hashing algorithm.";
        }
    </script>
</body>
</html>
