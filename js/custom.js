$(document).ready(function() {
  var listWord = [
    {
      tv: 'a',
      tn: 'あ'
    },
    {
      tv: 'i',
      tn: 'い'
    },
    {
      tv: 'u',
      tn: 'う'
    },
    {
      tv: 'e',
      tn: 'え'
    },
    {
      tv: 'o',
      tn: 'お'
    },
  ];
  var wordCurrent, numCorrect = 0, totalWord;
  totalWord = listWord.length;
  setWord();

  function sendAnswer() {
    var answer = document.getElementById('resultInput').value;
    var p = document.getElementById('mess');
    if(answer === wordCurrent.tv){
      p.innerHTML = "Right";
      numCorrect += 1;
    }else{
      p.innerHTML = "Wrong!!";
    }
    document.getElementById('resultInput').value = "";
    setWord();
  }

  function getRandom() {
    var random = Math.floor(Math.random() * totalWord-1) + 1;
    return random;
  }

  function setWord() {
    wordCurrent = listWord[getRandom()];
    $('#textShow').text(wordCurrent.tn);
    $('.present').text(numCorrect);
    $('.actually').text(totalWord);
  }
  // readFile('bangchucai.txt');

  // function readFile(nameFile) {
  //   var xhttp = new XMLHttpRequest();
  //   xhttp.onreadystatechange = function() {
  //     var data = this.responseText;
  //     console.log(data);
  //   }
  //   xhttp.open("get", nameFile, true);
  //   xhttp.send();
  // }
  document.getElementById('resultInput').onkeypress = function(e) {
    var event = e || window.event;
    var charCode = event.which || event.code;
    if(charCode == '13'){
      sendAnswer();
      return false;
    }
  }
});
