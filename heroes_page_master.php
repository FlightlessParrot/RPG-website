<?php
INCLUDE_ONCE "./heroes_page_sender.php";
INCLUDE_ONCE "./guardian.php";

function pagecontroler($pdo, $pdop)
{
    $page_guard = new paladin;
    $checker = $page_guard->check_user();
    if ($checker === true && isset($_POST['heroname'])) {
        $myskills = new new_hero;
        if ($myskills->get_user_id($pdo)) {
            $myskills->heroname = $_POST['heroname'];
            $myskills->add_hero($pdop);
            unset($_POST['heroname']);
        }
    }
}
?>