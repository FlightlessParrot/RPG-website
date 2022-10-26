<?php
include_once "./heroes_page_sender.php";
include_once "./guardian.php";

class page_master
{
    public $page_guard;
    public $myskills;

    function __construct()
    {
        $this->page_guard = new paladin;
        $this->myskills = new new_hero;
    }

    public function pagecontroler($pdo, $pdop)
    {

        $checker = $this->page_guard->check_user();

        if ($checker === true && isset($_POST['heroname'])) {
            $hero_skills = $this->myskills;

            if ($hero_skills->get_user_id($pdo)) {
                $hero_skills->heroname = $_POST['heroname'];
                $hero_skills->add_hero($pdop);
                unset($_POST['heroname']);
            }
        }
    }
}
