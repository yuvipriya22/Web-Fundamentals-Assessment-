function check() 
  
{

    var c=0;
    var q= document.quiz.value;
    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var q4 = document.quiz.q4.value;
    var q5 = document.quiz.q5.value;
    if(q1=="3rd"){c++;}
    if(q2=="Cealeb Dressel (USA)"){c++;}
    if(q3=="Odisha"){c++;}
    if(q4=="Vandana Kataria"){c++;}
    if(q5=="China"){c++;}
alert("the correct answer is"+c+"/5");   
}