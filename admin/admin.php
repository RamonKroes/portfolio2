<!DOCTYPE html>
<html>
    <head>

        <title>Admin - inlog</title>

    </head>
    <body>

        <?php

        if(isset($_POST['username']))
        {
            require('connect.php');
            session_start();

            $username = $_POST['username'];
            $password = md5($_POST['password']);

            $stmt = $conn->prepare('SELECT * FROM users WHERE username = ? AND password = ?');
            $stmt->bind_param('ss', $username, $password);
            $stmt->execute();
            $result = $stmt->get_result();
            $rows = mysqli_num_rows($result);
            if ($rows == 1) {

                $_SESSION['username'] = $username;
               header("Location: cms.php");

            } else {

                echo "Incorrect combination entered.";

            }
        }

        ?>

        <form action=<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?> method="POST">
            Username: <input type="text" name="username">
            Password: <input type="password" name="password">
            <input type="submit" value="Login">
        </form>

    </body>
</html>