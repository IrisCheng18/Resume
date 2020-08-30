<?php

$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
    $yourEmail = '';
    $userName = $_POST['userName'];
    $userEmail = $_POST['userEmail'];
    $userMessage = $_POST['userMessage'];

    if (empty($userName)) {
        $errors[] = 'Name is empty';
    }

    if (empty($userEmail)) {
        $errors[] = 'Email is empty';
    } else if (!filter_var($userEmail, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email is invalid';
    }

    if (empty($userMessage)) {
        $errors[] = 'Message is empty';
    }


    if (!empty($errors)) {
        $allErrors = join('<br/>', $errors);
        $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
    } else {
        /* Let's prepare the message for the e-mail. */
		$message = "<p>Hello,</p><p>Your contact form has been submitted by <strong>$userEmail</strong>.</p><p>Here is what they have to say:</p><p><strong>Name:</strong> $userEmail<br /><strong>E-mail Address:</strong> <a href='mailto:$userEmail'>$userEmail</a><br /><strong>Their Questions or Comments:</strong> $userMessage</p>";
		
		/* Is the OS Windows or Mac or Linux? */
		if (strtoupper(substr(PHP_OS, 0, 3) === 'WIN')) {
			$eol = "\r\n";
		}
		elseif (strtoupper(substr(PHP_OS, 0, 3) === 'MAC')) {
			$eol = "\r";
		}
		else {
			$eol = "\n";
		}
		
        /* Set Common Headers */
		$headers = 'From: Your Contact Form <'.$yourEmail.'>'.$eol;
		$headers .= 'Reply-To:'.$userName.'<'.$userEmail.'>'.$eol;
		$headers .= 'Return-Path:'.$userName.'<'.$userEmail.'>'.$eol;   
		$headers .= "Message-ID: <".$now." TheSystem@".$_SERVER['SERVER_NAME'].">".$eol;
		$headers .= "X-Mailer: PHP v".phpversion().$eol; // These two are used to help avoid spam-filters.
		$headers .= 'MIME-Version: 1.0'.$eol;
		$headers .= 'Content-Type: text/html; charset=UTF-8' .$eol;
		
		/* Send the message using mail() function */
		mail($yourEmail, "Your Contact Form Has Been Submitted", $message, $headers);
		
		/* Notify vistor of success or failue */
		if (mail) {
			echo 'Thank you for your inquiry. A representative will contact you shortly.';
		}
		else {
			echo 'Error: We\'re sorry, there was a problem processing your request.';
		}
    }
}
?>
