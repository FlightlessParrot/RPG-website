<?php
//this file is your guardian. It's gonna defend you from malicious hackers, black magic and bad luck. Stay brave.

//this method gonna santize (it is intentionally mistake) your code. 
class paladin
{
public function guardian($evil)
{

$pure=htmlspecialchars($evil);
return $pure;
}
public function check_user()
    {
        if(((isset($_SESSION['login'])) || (isset($_SESSION['pass']))) && isset($_SESSION['rec']))
        {
            if(!($_SESSION['rec'] === $this->guardian($_SERVER['REMOTE_ADDR'].$_SERVER['HTTP_USER_AGENT'])))
            {
            session_destroy();
            return false;
            }
            
        }
        else return true;
    }
}
?>