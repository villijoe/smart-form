<?php

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>
    <script src="setCursor.js"></script>
    <title>ABFX</title>
</head>
<body>
    <form method="post" action="form.php" class="col-lg-4">
        <div class="form-group">
            <label for="name">Имя:</label>
            <input type="text" autofocus minlength="6" maxlength="12" id="name" class="form-control"
                   placeholder="Name" aria-label="Name" aria-describedby="nameHelp">
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" class="form-control" placeholder="Email" aria-label="Email"
                   aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label for="tel">Телефон:</label>
            <input type="tel" id="tel" pattern="380\([\d]{2}\)[\d]{3}-[\d]{2}-[\d]{2}"
                   title="Just Telephone Number" class="form-control" placeholder="Tel"
                   maxlength="16" aria-label="Tel" aria-describedby="telHelp">
        </div>
        <button type="submit" id="submit" class="btn btn-primary">Submit</button>
        <p id="success" class="h3"></p>
    </form>
<script src="send-post.js"></script>
</body>
</html>
