<?php

if (isset($_POST['submit'])) {
    # code...
    $name=$_POST['name'];
    $number=$_POST['number'];
    $email=$_POST['email'];
    $msg=$_POST['messages'];

    $to='yac4christ@gmail.com';
    $subject='Reach Out Message';
    $message="Name : ".$name."\n"."Mobile Number : ".$number."\n"."Email : ".$email."\n"."My message : ".$msg;
    $headers="From : ".$email;

    if (mail($to, $subject, $message, $headers)) {
        echo "<h3> It does work motherfuckers</h3>"
    }else {
        echo "oh no!!!"
    }
}
?>