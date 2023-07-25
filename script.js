function setCap(){
    var numbers = [...Array(10).keys()];

    const upperAlpha = Array.from(Array(26)).map((e, i) => i + 97);
    const upperAlphabet = upperAlpha.map((x) => String.fromCharCode(x));

    const lowerAlpha = Array.from(Array(26)).map((e, i) => i + 65);
    const lowerAlphabet = lowerAlpha.map((x) => String.fromCharCode(x));

    const capRange = numbers.concat(lowerAlphabet, upperAlphabet)

    const shuffled = [...capRange].sort(() => 0.5 - Math.random());
    var captchaArr = shuffled.slice(0, 6);
    var captcha = captchaArr.join('')

    document.getElementById("display").innerHTML=captcha;
    document.getElementById("display").value=captcha;
}

function checkCap(){
    val = document.getElementById("capTxt").value;
    var actual=document.getElementById("display").value;
    var entered=val;
    if(actual==entered)
    {
        document.getElementById("result").innerHTML="IT MATCHES";
        document.getElementById("result").style.color="green";
    }
    else
    {
        document.getElementById("result").innerHTML="YOU'RE A SUS!!";
        document.getElementById("result").style.color="red";
    }

}

