<?php

    function outputOrderRow($file, $title, $quantity, $price) {
       $amount=($quantity*$price);
       $sr='images/books/tinysquare/'.$file;
        echo "<tr>";
        //TODO
        echo "<td>"."<img src=$sr>" ."</td>";
        echo "<td class=\"mdl-data-table__cell--non-numeric\">".$title ."</td>";
        echo "<td>".$quantity."</td>";
        echo "<td>"."$".number_format($price,2) ."</td>";
        echo "<td>"; echo "$".number_format($amount,2); echo"</td>";
        echo "</tr>";
    }
    ?>
