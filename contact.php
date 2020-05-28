<?php
    // We check if the user has clicked the send button
    if(isset($_POST['Send'])){

        // We get the data from the form
        $firstName = $_POST['firstName'];
        $lastName = $_POST['lastName'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        // We check if the inputs are empty
        if(empty($firstName) || empty($lastName) || empty($email) || empty($subject) || empty($message)){
            header("Location: index.php?form=emptyfield");
            exit();
        }
        else{
            // Check if inputs characters are valid
            if(!preg_match("/^[a-zA-Z]*$/", $firstName) || !preg_match("/^[a-zA-Z]*$/", $lastName)){
                header("Location: index.php?form=invalidcharacter&email=$email&subject=$subject&message=$message");
                exit();
            }
            else{
                // Check if e-mail is valid
                if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                    header("Location: index.php?form=invalidemail&firstName=$firstName&lastName=$lastName&subject=$subject&message=$message");
                    exit();
                }
                else{
                    $mailTo = "roy.jonathan@mail.com";
                    $headers = "From: ".$email;
                    $txt = "You have received an e-mail from ".$firstName." ".$lastName.".\n\n".$message;

                    mail($mailTo, $subject, $txt, $headers);
                    header("Location: index.php?form=sended");
                }
            }
        }
    }
    else{
        header("Location: index.php?send=error");
        exit();
    }


        