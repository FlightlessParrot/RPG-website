<?php
INCLUDE_ONCE "./heroes_page_sender.php";
INCLUDE_ONCE "./guardian.php";

function pagecontroler($pdo)
{
$page_guard= new paladin;
$checker=$page_guard->check_user();
if(isset($_POST['heroname']))
{
$myskills= new new_hero;
if($myskills->get_user_id($checker, $pdo))
{
$myskills->heroname=$_POST['heroname'];

}
}
else echo "error";
}
?>