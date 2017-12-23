function ready() {
    var counter = 0;
    if (test.q1[1].checked) {counter++;}
    if (test.q2[3].checked) {counter++;}
    if (test.q3.value == "48") {counter++;}
    if (test.q4[0].checked) {counter++;}
    if (test.q5[1].checked) {counter++;}
    if (test.q6[2].checked) {counter++;}
    if (test.q7[0].checked) {counter++;}
    if (test.q8[0].checked) {counter++;}
    if (test.q9.value == "1982") {counter++;}
    if (test.q10[2].checked) {counter++;}
    if (test.q11[1].checked) {counter++;}
    if (test.q12[3].checked) {counter++;}
    if (test.q13.value == "калистеника") {counter++;}
    if (test.q14[0].checked) {counter++;}
    if (test.q15[1].checked) {counter++;}
    if (test.q16[0].checked) {counter++;}
    if (test.q17[2].checked) {counter++;}
    if (test.q18[3].checked) {counter++;}
    if (test.q19[0].checked && test.q19[2].checked && !test.q19[3].checked && !test.q19[1].checked) {counter++;}
    if (test.q20[0].checked) {counter++;}
    var dAnsw = document.getElementById("answer");
    dAnsw.style.visibility = "visible";
    dAnsw.innerHTML = "Вы набрали " + counter + " правильных ответов из 20";
};
