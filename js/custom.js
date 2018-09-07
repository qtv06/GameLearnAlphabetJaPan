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
    {
      tv: 'ka',
      tn: 'か'
    },
    {
      tv: 'ki',
      tn: 'き'
    },
    {
      tv: 'ku',
      tn: 'く'
    },
    {
    tv: 'ke',
    tn: 'け'
    },
    {
    tv: 'ko',
    tn: 'こ'
    },
    {
    tv: 'sa',
    tn: 'さ'
    },
    {
    tv: 'shi',
    tn: 'し'
    },
    {
    tv: 'su',
    tn: 'す'
    },
    {
    tv: 'se',
    tn: 'せ'
    },
    {
    tv: 'so',
    tn: 'そ'
    },
    {
    tv: 'ta',
    tn: 'た'
    },
    {
    tv: 'chi',
    tn: 'ち'
    },
    {
    tv: 'tsu',
    tn: 'つ'
    },
    {
    tv: 'te',
    tn: 'て'
    },
    {
    tv: 'to',
    tn: 'と'
    },
    {
    tv: 'na',
    tn: 'な'
    },
    {
    tv: 'ni',
    tn: 'に'
    },
    {
    tv: 'nu',
    tn: 'ぬ'
    },
    {
    tv: 'ne',
    tn: 'ね'
    },
    {
    tv: 'no',
    tn: 'の'
    },
    {
    tv: 'ha',
    tn: 'は'
    },
    {
    tv: 'hi',
    tn: 'ひ'
    },
    {
    tv: 'hu',
    tn: 'ふ'
    },
    {
    tv: 'he',
    tn: 'へ'
    },
    {
    tv: 'ho',
    tn: 'ほ'
    },
    {
    tv: 'ma',
    tn: 'ま'
    },
    {
    tv: 'mi',
    tn: 'み'
    },
    {
    tv: 'mu',
    tn: 'む'
    },
    {
    tv: 'me',
    tn: 'め'
    },
    {
    tv: 'mo',
    tn: 'も'
    },
    {
    tv: 'ya',
    tn: 'や'
    },
    {
    tv: 'yu',
    tn: 'ゆ'
    },
    {
    tv: 'yo',
    tn: 'よ'
    },
    {
    tv: 'ra',
    tn: 'ら'
    },
    {
    tv: 'ri',
    tn: 'り'
    },
    {
    tv: 'ru',
    tn: 'る'
    },
    {
    tv: 're',
    tn: 'れ'
    },
    {
    tv: 'ro',
    tn: 'ろ'
    },
    {
    tv: 'wa',
    tn: 'わ'
    },
    {
    tv: 'wo',
    tn: 'を'
    },
    {
    tv: 'n',
    tn: 'ん'
    },
    {
    tv: 'ga',
    tn: 'が'
    },
    {
    tv: 'gi',
    tn: 'ぎ'
    },
    {
    tv: 'gu',
    tn: 'ぐ'
    },
    {
    tv: 'ge',
    tn: 'げ'
    },
    {
    tv: 'go',
    tn: 'ご'
    },
    {
    tv: 'za',
    tn: 'ざ'
    },
    {
    tv: 'ji',
    tn: 'じ'
    },
    {
    tv: 'zu',
    tn: 'ず'
    },
    {
    tv: 'ze',
    tn: 'ぜ'
    },
    {
    tv: 'zo',
    tn: 'ぞ'
    },
    {
    tv: 'da',
    tn: 'だ'
    },
    {
    tv: 'di',
    tn: 'ぢ'
    },
    {
    tv: 'du',
    tn: 'づ'
    },
    {
    tv: 'de',
    tn: 'で'
    },
    {
    tv: 'do',
    tn: 'ど'
    },
    {
    tv: 'ba',
    tn: 'ば'
    },
    {
    tv: 'bi',
    tn: 'び'
    },
    {
    tv: 'bu',
    tn: 'ぶ'
    },
    {
    tv: 'be',
    tn: 'べ'
    },
    {
    tv: 'bo',
    tn: 'ぼ'
    },
    {
    tv: 'pa',
    tn: 'ぱ'
    },
    {
    tv: 'pi',
    tn: 'ぴ'
    },
    {
    tv: 'pu',
    tn: 'ぷ'
    },
    {
    tv: 'pe',
    tn: 'ぺ'
    },
    {
    tv: 'po',
    tn: 'ぽ'
    },
    {
    tv: 'kya',
    tn: 'きゃ'
    },
    {
    tv: 'kyu',
    tn: 'じゅ'
    },
    {
    tv: 'kyo',
    tn: 'じょ'
    },
    {
    tv: 'sha',
    tn: 'しゃ'
    },
    {
    tv: 'shu',
    tn: 'しゅ'
    },
    {
    tv: 'sho',
    tn: 'しょ'
    },
    {
    tv: 'cha',
    tn: 'ちゃ'
    },
    {
    tv: 'chu',
    tn: 'ちゅ'
    },
    {
    tv: 'cho',
    tn: 'ちょ'
    },
    {
    tv: 'nya',
    tn: 'にゃ'
    },
    {
    tv: 'nyu',
    tn: 'にゅ'
    },
    {
    tv: 'nyo',
    tn: 'にょ'
    },
    {
    tv: 'hya',
    tn: 'ひゃ'
    },
    {
    tv: 'hyu',
    tn: 'ひゅ'
    },
    {
    tv: 'hyo',
    tn: 'ひょ'
    },
    {
    tv: 'mya',
    tn: 'みゃ'
    },
    {
    tv: 'myu',
    tn: 'みゅ'
    },
    {
    tv: 'myo',
    tn: 'みょ'
    },
    {
    tv: 'rya',
    tn: 'りゃ'
    },
    {
    tv: 'ryu',
    tn: 'りゅ'
    },
    {
    tv: 'ryo',
    tn: 'りょ'
    },
    {
    tv: 'gya',
    tn: 'ぎゃ'
    },
    {
    tv: 'gyu',
    tn: 'ぎゅ'
    },
    {
    tv: 'gyo',
    tn: 'ぎょ'
    },
    {
    tv: 'ja',
    tn: 'じゃ'
    },
    {
    tv: 'ju',
    tn: 'じゅ'
    },
    {
    tv: 'jo',
    tn: 'じょ'
    },
    {
    tv: 'bya',
    tn: 'びゃ'
    },
    {
    tv: 'byu',
    tn: 'びゅ'
    },
    {
    tv: 'byo',
    tn: 'びょ'
    },
    {
    tv: 'pya',
    tn: 'ぴゃ'
    },
    {
    tv: 'pyu',
    tn: 'ぴゅ'
    },
    {
    tv: 'pyo',
    tn: 'ぴょ'
    }
  ];
  var wordCurrent, numCorrect = 0, totalWord;
  totalWord = listWord.length;
  console.log(totalWord);
  setWord();

  function sendAnswer() {
    var answer = document.getElementById('resultInput').value;
    var p = document.getElementById('mess');
    // for(var i = 0; i < wordCurrent.tv.length; i ++){
    if(answer === wordCurrent.tv){
      p.innerHTML = "Right";
      numCorrect += 1;
    }else{
      p.innerHTML = "Wrong!!";
    }
    // }
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
    // readFile();
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

  function readFile() {
    var xmlhttp, xmlDoc;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET","bangchucai.txt",false);
    xmlhttp.send();
    xmlDoc=xmlhttp.responseText;
    console.log(xmlDoc);
  }

  $('.btnGo').click(function() {
    var listWordSelect = [];
    var listCB = $('input[type="checkbox"]');
    for(var i=0; i < listCB.length; i++){
      if(listCB[i].checked === true){
        listWordSelect.push(listWord.slice(listCB[i].value, 5));
      }
    }
    console.log(listWord);
  });
});
