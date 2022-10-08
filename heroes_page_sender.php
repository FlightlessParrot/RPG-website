<?php
INCLUDE_ONCE "./guardiam.php";
class hpage_object
{
// This class needs hero ID given to work properly - it must be provided by sub class or other external function/method
// you can get hero id by this class extension
public $send_data;
public $sql;
public $table;
public $columns;
public $user;
public $id;
public $heroID;

public function get_user_id($pdo)
{
    $checker=new paladin;
    if($checker->check_user()===true)
    {
        $this->user=$_SESSION['login'];
        $pdo->prepare("SELECT id FROM logindata WHERE login=?");
        $pdo->execute($this->user);
        $this->id=$pdo->fetch();
        return true;
    }
    else return false;
}

public function send_sql($pdop)
{
$pdop->prepare("INSERT INTO :table :column VALUES :data");
$pdop->bindParam(':table', $this->table);
$pdop->bindParam(':column', $this->columns);
$pdop->bindParam(':data', $this->send_data);
$pdop->execute();
}

//form array into a sql command. 
//needs array of collumn and array of data to work properly
public function set_values($colum, $data)
{
    $this->columns="(hero_ID";
    foreach($colum as $col)
    {
        $this->columns.=", ".$col;
    }
    $this->columns.=")";

    $this->send_data="(".$this->heroID;
    foreach($data as $dat)
    {
        $this->send_data.=", ".$dat;
    }
    $this->send_data.=")";
}

}

// it gives us hero's id, which identify hero
class new_hero extends hpage_object
{
    public $heroname;

public function new_hero($pdop)
{
    $pdop->prepare("INSERT INTO names(user_ID,hero_name) VALUES (?,?)");
    $pdop->bindParam(1,$this->id[0]);
    $pdop->bindParam(2,$this->heroname);
    $pdop->execute();

    $pdop->prepare("SELECT MAX(heroID) FROM names WHERE user_ID=? AND hero_name=?");
    $pdop->bindParam(1,$this->id[0]);
    $pdop->bindParam(2,$this->heroname);
    $pdop->execute();
    $this->heroID=$pdop->fetch();
}
}
?>