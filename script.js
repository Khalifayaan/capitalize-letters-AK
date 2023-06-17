

function makeCapital(str) {
    var words = str.split(" ");
    var capitalizedWords = [];
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var firstChar = word[0];
      var restOfWord = "";
  
      for (var j = 1; j < word.length; j++) {
        restOfWord += word[j];
      }
  
      var capitalizedWord = firstChar.toUpperCase() + restOfWord;
      capitalizedWords.push(capitalizedWord);
    }
  
    return capitalizedWords.join(" ");
  }

var input = "my name is ayaan khalif and i live in mogadishu, somalia";
var output = makeCapital(input);
console.log(output);
