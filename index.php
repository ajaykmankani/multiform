<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.css">
    <title>PDO</title>
    <script src="master.js"></script>
   <style>
       .error{
           color:red;
       }
   </style>
</head>

<body>

    <div class="container">
        <div class="row">
            <div class="col-6">
                <label for="">form 1</label>
                <form action="submit.php" name="contactForm" onsubmit="return validateForm()" method="POST">
        
        
                    <label for="">Enter your name</label>
                    <input type="text" id="name" name="name" class="form-control">
                    <div class="error" id="nameError"></div><br><br>
        
        
                    <label for="">Enter your email</label>
                    <input type="text" id="email" name="email" class="form-control">
                    <div class="error" id="emailError"></div><br><br>
        
                    <label for="">Enter your mobile</label>
                    <input type="text" id="mobile" name="mobile" class="form-control">
                    <div class="error" id="mobileError"></div><br><br>
        
                    <label for="">Enter your site URL</label>
                    <input type="text" id="url" name="url" class="form-control">
                    <div class="error" id="urlError"></div><br><br>
        
                    <label for="">password</label>
                    <input type="password" name="password" class="form-control">
                    <div class="error" id="passError"></div><br><br>
                    <input type="submit" name="submit" value="submit">
        
        
                </form>
            </div>
            <div class="col-6">
            <label for="">form 2</label>
        <form action="submit.php" name="contactForm2" onsubmit="return validateForm2()" method="POST">


            <label for="">Enter your name</label>
            <input type="text" id="name2" name="name" class="form-control">
            <div class="error" id="nameError2"></div><br><br>


            <label for="">Enter your email</label>
            <input type="text" id="email2" name="email" class="form-control">
            <div class="error" id="emailError2"></div><br><br>

            <label for="">Enter your mobile</label>
            <input type="text" id="mobile2" name="mobile" class="form-control">
            <div class="error" id="mobileError2"></div><br><br>

            <label for="">Enter your site URL</label>
            <input type="text" id="url2" name="url" class="form-control">
            <div class="error" id="urlError2"></div><br><br>

            <label for="">password</label>
            <input type="password" name="password" class="form-control">
            <div class="error" id="passError2"></div><br><br>
            <input type="submit" name="submit" value="submit">


        </form>
            </div>
        </div>
    </div>

 



    





</body>
</html>

