<?php
// check missing field
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
{
   return false;
}

// sanitize
$sender_name = strip_tags(htmlspecialchars($_POST['name']));
$sender_email = strip_tags(htmlspecialchars($_POST['email']));
$sender_subject = strip_tags(htmlspecialchars($_POST['phone']));
$sender_message = strip_tags(htmlspecialchars($_POST['message']));

/**
 * Enter your email address between the ''
 */
$to = 'yourname@yourdomain.com';

/**
 * Subject of the email
 */
$email_subject = $sender_subject;

/**
 * Body of the email
 */
$email_body = "Email from: $name\n\n$message";

/**
 * Set the From: to something like noreply@yourdomain.com
 * Reply-To: this is set to the sender's email address (don't change this unless you want something else)
 */
$headers = "From: noreply@yourdomain.com\n";
$headers .= "Reply-To: $sender_email";

// send email
mail($to, $email_subject, $email_body, $headers);

return true;
?>