const arrayWithNumbers = [1, 5, 7, 9, 15];
const arrayWithoutNumbers = ['w', 5, 7, '9', 17];

//Forma Imperativa 
function verifyNumber(list: any[]): boolean {
    let i: number=0;
    for(i;i<list.length;i++){

        if(isNaN(list[i])){
            return false;
        }
    }
    return true;
}

console.log(verifyNumber(arrayWithNumbers), 'Esta lista é numérica');
console.log(verifyNumber(arrayWithoutNumbers), 'Esta lista não é numérica');

// Com paradigma funcional
function verifyNumberFun(list: any[]): any {
    return list.find((value) => isNaN(value))? false : true;
}
console.log(verifyNumberFun(arrayWithNumbers), 'Esta lista é numérica (Paradigma funcional)');
console.log(verifyNumberFun(arrayWithoutNumbers), 'Esta lista não é numérica (Paradigma funcional)');

function checkuplist(list: number[]): number[] {
    if(verifyNumber(list)){
        let max:number= -Infinity,
            min:number= Infinity,
            addition:number= 0,
            quantity:number= 0;
        
        let index: number=0;
        for(index;index<list.length;index++){
            if(list[index] >= max) max=list[index];
            if(list[index] <= min) min=list[index];
            addition+=list[index];
            quantity++
        }

        let average:number= addition/quantity;
        let values=[max,min,average];
        return values;
    }else{
        return [];
    }
}

console.log(checkuplist(arrayWithNumbers), 'MAIOR/MENOR/MÉDIA');
