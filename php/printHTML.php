<?php

function printHTML($htmlLink)
{
$link=$htmlLink;
$html = file_get_contents($link,true);
echo $html;
}
?>