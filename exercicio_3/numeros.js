let arrayWithNumbers = [1, 5, 7, 9, 15];
let arrayWithoutNumbers = ['a', 5, 7, '9', 17];
//Forma Imperativa 
function verifyNumber(list) {
    let i = 0;
    for (i; i < list.length; i++) {
        if (isNaN(list[i])) {
            return false;
        }
    }
    return true;
}
console.log(verifyNumber(arrayWithNumbers), 'Esta lista é numérica');
console.log(verifyNumber(arrayWithoutNumbers), 'Esta lista não é numérica');
// Com paradigma funcional
function verifyNumberFun(list) {
    return list.find(function (value) { return isNaN(value); }) ? false : true;
}
console.log(verifyNumberFun(arrayWithNumbers), 'Esta lista é numérica (Paradigma funcional)');
console.log(verifyNumberFun(arrayWithoutNumbers), 'Esta lista não é numérica (Paradigma funcional)');
function checkuplist(list) {
    if (verifyNumber(list)) {
        let max = -Infinity, min = Infinity, addition = 0, quantity = 0;
        let index = 0;
        for (index; index < list.length; index++) {
            if (list[index] >= max)
                max = list[index];
            if (list[index] <= min)
                min = list[index];
            addition += list[index];
            quantity++;
        }
        let average = addition / quantity;
        let values = [max, min, average];
        return values;
    }
    else {
        return [];
    }
}
console.log(checkuplist(arrayWithNumbers), 'MAIOR/MENOR/MÉDIA');
