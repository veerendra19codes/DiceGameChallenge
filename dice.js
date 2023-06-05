
window.onload = function() {
    var p1 = Math.floor((Math.random()*6)+1);
    var p2 = Math.floor((Math.random()*6)+1);

        
    if(p1 === p2) {
        document.querySelector("h1").textContent="Its a draw";
        if(p1 === 1){
        document.querySelector("#item1 img").src='dice1.png';
        document.querySelector("#item2 img").src='dice1.png';
        }
        if(p1 === 2){
            document.querySelector("#item1 img").src='dice2.png';
            document.querySelector("#item2 img").src='dice2.png';
        }
        if(p1 === 3){
            document.querySelector("#item1 img").src='dice3.png';
            document.querySelector("#item2 img").src='dice3.png';
        }
        if(p1 === 4){
            document.querySelector("#item1 img").src='dice4.png';
            document.querySelector("#item2 img").src='dice4.png';
        }
        if(p1 === 5){
            document.querySelector("#item1 img").src='dice5.png';
            document.querySelector("#item2 img").src='dice5.png';
        }
        if(p1 === 6){
            document.querySelector("#item1 img").src='dice6.png';
            document.querySelector("#item2 img").src='dice6.png';
        }
    }


    else if(p1 > p2) {
        document.querySelector("h1").textContent="Player 1 wins";

        
        if(p2 === 1) {
            document.querySelector("#item2 img").src='dice1.png';
            if(p1 === 2) {
                document.querySelector("#item1 img").src='dice2.png';
            }
            if(p1 === 3) {
                document.querySelector("#item1 img").src='dice3.png';
            }
            if(p1 === 4) {
                document.querySelector("#item1 img").src='dice4.png';
            }
            if(p1 === 5) {
                document.querySelector("#item1 img").src='dice5.png';
            }
            if(p1 === 6) {
                document.querySelector("#item1 img").src='dice6.png';
            }
        }

            
        else if(p2 === 2) {
            document.querySelector("#item2 img").src='dice2.png';
            if(p1 === 3) {
                document.querySelector("#item1 img").src='dice3.png';
            }
            if(p1 === 4) {
                document.querySelector("#item1 img").src='dice4.png';
            }
            if(p1 === 5) {
                document.querySelector("#item1 img").src='dice5.png';
            }
            if(p1 === 6) {
                document.querySelector("#item1 img").src='dice6.png';
            }
        }

        else if(p2 === 3) {
            document.querySelector("#item2 img").src='dice3.png';
            if(p1 === 4) {
                document.querySelector("#item1 img").src='dice4.png';
            }
            if(p1 === 5) {
                document.querySelector("#item1 img").src='dice5.png';
            }
            if(p1 === 6) {
                document.querySelector("#item1 img").src='dice6.png';
            }
        }

        else if(p2 === 4) {
            document.querySelector("#item2 img").src='dice4.png';
            if(p1 === 5) {
                document.querySelector("#item1 img").src='dice5.png';
            }
            if(p1 === 6) {
                document.querySelector("#item1 img").src='dice6.png';
            }
        }

        else{
            document.querySelector("#item2 img").src='dice5.png';
            document.querySelector("#item1 img").src='dice6.png';
        }
        
    }


    else if(p1 < p2) {
        document.querySelector("h1").textContent="Player 2 wins";

        if(p1 === 1) {
            document.querySelector("#item1 img").src='dice1.png';
            if(p2 === 2) {
                document.querySelector("#item2 img").src='dice2.png';
            }
            if(p2 === 3) {
                document.querySelector("#item2 img").src='dice3.png';
            }
            if(p2 === 4) {
                document.querySelector("#item2 img").src='dice4.png';
            }
            if(p2 === 5) {
                document.querySelector("#item2 img").src='dice5.png';
            }
            if(p2 === 6) {
                document.querySelector("#item2 img").src='dice6.png';
            }
        }

            
        else if(p1 === 2) {
            document.querySelector("#item1 img").src='dice2.png';
            if(p2 === 3) {
                document.querySelector("#item2 img").src='dice3.png';
            }
            if(p2 === 4) {
                document.querySelector("#item2 img").src='dice4.png';
            }
            if(p2 === 5) {
                document.querySelector("#item2 img").src='dice5.png';
            }
            if(p2 === 6) {
                document.querySelector("#item2 img").src='dice6.png';
            }
        }

        else if(p1 === 3) {
            document.querySelector("#item1 img").src='dice3.png';
            if(p2 === 4) {
                document.querySelector("#item2 img").src='dice4.png';
            }
            if(p2 === 5) {
                document.querySelector("#item2 img").src='dice5.png';
            }
            if(p2 === 6) {
                document.querySelector("#item2 img").src='dice6.png';
            }
        }

        else if(p1 === 4) {
            document.querySelector("#item1 img").src='dice4.png';
            if(p2 === 5) {
                document.querySelector("#item2 img").src='dice5.png';
            }
            if(p2 === 6) {
                document.querySelector("#item2 img").src='dice6.png';
            }
        }

        else{
            document.querySelector("#item1 img").src='dice5.png';
            document.querySelector("#item2 img").src='dice6.png';
        }

    }


}
