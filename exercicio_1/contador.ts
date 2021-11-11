const inputVowels = document.getElementById("inputChars") as HTMLInputElement;
const numberVowels = document.getElementById("showCountVowels") as HTMLSpanElement;
const vowels: Array<string> = ['a','e','i','o','u'];
let countVowels: number = 0;
let fixedChar = inputVowels.value;

function reset() {
  inputVowels.value = '';
  numberVowels.innerText = '';
  fixedChar = '';
  countVowels= 0;
}

//conta as vogais do texto pré-escrito.(referente a questão 1.a)
function getFixedChar(str: string): void {
  for (let char of str){
     if (vowels.includes(char)){
      countVowels++;
     }
     numberVowels.innerHTML = countVowels.toString();
}}
getFixedChar(fixedChar)

//quando o usuário digita algo no input.(referente a questão 1.b)
inputVowels.addEventListener('keypress', (event: KeyboardEvent) => countChars(event.key));

function countChars(char: string): void {
  if(vowels.includes(char)) {
    countVowels++
    numberVowels.innerHTML = countVowels.toString();
  }
}
