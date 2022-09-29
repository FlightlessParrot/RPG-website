<?php


class log_in
{
   function __construct($quard)
    {
    if((isset($_POST['login'])) && (isset($_POST['pass'])))
    {
        
        $santlog=$quard->guardian($_POST['login']);
        $santpass=$quard->guardian($_POST['pass']);

        if(isset($_POST['login']))unset($_POST['login']);
        if(isset($_POST['pass']))unset($_POST['pass']);

        $_SESSION['login']=$santlog;
        $_SESSION['pass']=$santpass;
        $_SESSION['rec']=$quard->guardian($_SERVER['REMOTE_ADDR'].$_SERVER['HTTP_USER_AGENT']);

    }
    }

   function check_data($pdo)
    {
        $query='SELECT login, pass FROM logindata';
        $result=$pdo->query($query);

        if((isset($_SESSION['login'])) && (isset($_SESSION['pass'])))
        {
            while($row=$result->fetch())
            {
                if($row['login']===$_SESSION['login'] && password_verify($_SESSION['pass'],$row['pass'])) 
                {
                return true;
                }
            }
            if(!$row=$result->fetch())
            {
            return false;
            }
        }
        else return false;
    }


    function session_log($pdo)
    {
    if($this->check_data($pdo))
    {
        echo "<p>Jesteś zalogowany jako $_SESSION[login]</p>";
        return true;
    }
    else
    {
    echo <<<HEREDOC
    <form id="pasek_logowania" action="$_SERVER[PHP_SELF]" method=post>
    <span class="login_row">login:</span>
    <input type="text" name="login" class="login_row" size="20" maxlength="20">
    <span class="login_row">hasło:</span>
    <input type="password" name="pass" class="login_row" size="20" maxlength="20">
    <input type="submit" id="zaloguj" value="zaloguj">
    </form>
    HEREDOC;
    return false;
    }
    }

    public function nice_try($pdo)
    {
        if((isset($_SESSION['login'])) && (isset($_SESSION['pass'])))
        {
        if(!$this->check_data($pdo))
        {
        echo <<<END
        <script type='text/javascript'>
        let mess='Błędny login lub hasło. Logowanie nieudane.'
        alert(mess)
        </script>
        END;
        
        /* <div class="important_message"> 
            <span>Zły login lub hasło. Logowanie nieudane.</span>
            <form action="$_SERVER[PHP_SELF]">
                <input type="hidden" name="remove_mess" value="ok">
                <input type="submit" value="ok">
            </form>
        </div> */
        session_unset();
        return true;
        }

        }
        else return false;
        
    }

    public function log_out($loged)
    {
        if($loged)
        {
        echo <<<END
        <form class="logout" action="$_SERVER[PHP_SELF]" method=get>
        <input type="hidden" name="logout" value="logout">
        <input type="submit" value="wyloguj">
        </form>
        END;
        }
        if(isset($_GET['logout']))
        {
            session_destroy();
            $refresh = "Location:". $_SERVER['PHP_SELF'];
            header($refresh);
        }
        
    }

    public function check_user($quard)
    {
        if(((isset($_SESSION['login'])) || (isset($_SESSION['pass']))) && isset($_SESSION['rec']))
        {
            if(!($_SESSION['rec'] === $quard->guardian($_SERVER['REMOTE_ADDR'].$_SERVER['HTTP_USER_AGENT'])))
            {
            session_destroy();
            return false;
            }
            
        }
        else return true;
    }

    public function change_password($loged,$pdo, $knight)
    {
        if($loged->check_data($pdo))
        {
        echo <<<END
        <form class="logout" action="$_SERVER[PHP_SELF]" method=post>
        <p>Podaj nowe hasło:</p>
        <input type="password" name="changed_pass" size=20 maxlength=20><br>
        <input type="submit" value="zmień">
        </form>
        END;
        }
        if(isset($_POST['changed_pass']))
        {
        $newpass=$knight->guardian($_POST['changed_pass']);
        $_SESSION['pass']=$newpass;
        $query="UPDATE logindata SET pass="."'".password_hash($newpass, PASSWORD_DEFAULT)."'"."WHERE login="."'".$_SESSION['login']."'";
        $pdo->query($query);
        echo "<br> hasło zmieniono pomyślnie.";
        return true;
        }
        
    }
}
?>