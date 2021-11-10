var inputVowels = document.getElementById("inputChars");
var numberVowels = document.getElementById("showCountVowels");
var vowels = ['a', 'e', 'i', 'o', 'u'];
var countVowels = 0;
var fixedChar = inputVowels.value;
function reset() {
    inputVowels.value = '';
    numberVowels.innerText = '';
    fixedChar = '';
    countVowels = 0;
}
//conta as vogais do texto pré-escrito.(referente a questão 1.a)
function getFixedChar(str) {
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            countVowels++;
        }
        numberVowels.innerHTML = countVowels.toString();
    }
}
getFixedChar(fixedChar);
//quando o usuário digita algo no input.(referente a questão 1.b)
inputVowels.addEventListener('keypress', function (event) { return countChars(event.key); });
function countChars(char) {
    if (vowels.includes(char)) {
        countVowels++;
        numberVowels.innerHTML = countVowels.toString();
    }
}
