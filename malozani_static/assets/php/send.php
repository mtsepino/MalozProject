<?php
  $subject = $_POST['subject'];
  $to_email = "enquiries@malozani.co.za";
  $from_email = "from@example.com";
  $from_fullname =  $_POST['name'];
  $headers  = "MIME-Version: 1.0\r\n";
  $content = $_POST['message'];
  $headers .= "Content-type: text/html; charset=utf-8\r\n";
  // Additional headers
  // This might look redundant but some services REALLY favor it being there.
  $headers .= "To: $to_fullname <$to_email>\r\n";
  $headers .= "From: $from_fullname <$from_email>\r\n";
  $message = "<html xmlns=\"http://www.w3.org/1999/xhtml\" lang=\"en\" xml:lang=\"en\">\r\n
  <head>\r\n
    <title>$subject</title>\r\n
  </head>\r\n
  <body>\r\n
    <p></p>\r\n
    <p style=\"color: #34495e; font-weight:600; font-style: italic; font-size:14px; float:left; margin-left:7px;\">
    $content;</p>\r\n
  </body>\r\n
  </html>";
  if (!mail($to_email, $subject, $message, $headers)) { 
    print_r(error_get_last());
  }
  else { ?>
    <h6 style="color:#fff; font-weight:bold; height:0px; margin-top:1px;">Thank You For Contacting us!!</h6>
  <?php
  }
  ?>