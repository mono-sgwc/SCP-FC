<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
</head>
<body>
    <h1>Admin Panel</h1>
    <form method="POST">
        {{ form.hidden_tag() }}
        <p>
            {{ form.username.label }}<br>
            {{ form.username(size=32) }}
        </p>
        <p>{{ form.submit() }}</p>
    </form>
    <form action="{{ url_for('logout') }}" method="post">
        <button type="submit">Logout</button>
    </form>
    <a href="{{ url_for('home') }}">Back to Home</a>
</body>
</html>
