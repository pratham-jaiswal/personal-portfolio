var y = Math.floor(Math.random()*101);
function response()
{
  var x = document.getElementById("in").value;
  if(x == y) 
   {     
       out.textContent="Correct Guess!!"; 
   } 
   else if(x>y) 
   {
       out.textContent="Guess a Smaller Number"; 
   } 
   else
   {
       out.textContent="Guess a Greater Number";
   }
}

var p=0, cpu=0;
function rps(i){
    var options = ["Rock", "Paper", "Scissors", "-"];
    var c = Math.floor(Math.random()*3);
    if(i=="reset"){
        ch.textContent = "-";
        i=3;
        c=3;
        p=0;
        cpu=0;
    }
    else{
        var i1 = i+1, i2 = i-1;
        if(i1 == 3){
            i1=0;
        }
        if(i2 == -1){
            i2=2;
        }
        if(i1 == c){
            ch.textContent = "You Lose!!";
            cpu = cpu+1;
        }
        else if(i2 == c){
            ch.textContent = "You Win!!";
            p = p+1;
        }
        else if(i == c){
            ch.textContent = "Tie!!";
        }
    }
    mv.textContent = "You: "+options[i]+" | "+"CPU: "+options[c];
    pts.textContent = p+" | "+cpu;
}

var tr=0;
function hc(x){
    xc = Math.floor(Math.random()*11);
    if(x==-999){
        tr=0;
        hmv.textContent = "You: - | CPU: -";
        r.textContent = "-";
        trs.textContent = "Total Runs: 0";
    }
    else{
        a = x-xc;
        if(a==0){
            hmv.textContent = "You: "+x+" | "+"CPU: "+xc;
            r.textContent = "OUT";
            tr = 0;
        }
        else{
            if(x===0){
                r.textContent = xc+" Runs";
                tr = tr + xc;
            }
            else{
                r.textContent = x+" Runs";
                tr = tr + x;
            }
            hmv.textContent = "You: "+x+" | "+"CPU: "+xc;
            trs.textContent = "Total Runs: "+tr.toString();
        }
    }

}