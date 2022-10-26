<?php
//I AM THE LORD OF THIS WEB. THE GOD OF THIS WORLD. I AM THE DEVELOPER!!!

class god
{

public function change_pass($pdo, $knight)
{
    $server=$_SERVER['PHP_SELF'];

    echo <<<END
        <div style="background-color: black; color: white;">

        <!--formularz zmiany hasła dla admina-->
        <p style="display:block";> change user's password </p>

        <div style="margin-bottom: 1em;"> 

        <form action="$server" method=post style="display: inline">
        <p> Login:</p><input type="text" name="ch_login" size=20 maxlength=20><br>
        <p>Chose new password</p><input type="password" name="ch_pass" size=20 maxlength=20><br><br>
        <input type="submit" value="sent">
        </form>
        </div>   
        </div>
    END;

    if(isset($_POST['ch_login']) && isset($_POST['ch_pass']))
    {
        //killing black magic
        $login=$knight->guardian($_POST['ch_login']);
        $pass=$knight->guardian($_POST['ch_pass']);
        $update_pass="UPDATE logindata SET pass='".password_hash($pass,PASSWORD_DEFAULT)."'"." WHERE login='".$login."'";
        try 
        {
         $pdo->query($update_pass);
        }
        catch(Exception $controlmysqllog)
        {
            new PDOException($controlmysqllog->getmessage(), (int)$controlmysqllog->getCode());
        }
    }
}
public function who_are_you($pdo, $stranger, $knight)
{

// checking if you are me, stranger
if(isset($_SESSION['login']))
{
$query="SELECT login, pass FROM logindata WHERE login='admin'";
$remember=$pdo->query($query);
$remember_you=$remember->fetch();
if(($remember_you['login']===$_SESSION['login']) && $stranger->check_data($pdo))
{
$this->change_pass($pdo, $knight);
return true;
}

else return false;
}
}

}
?>