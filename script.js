const display2=document.querySelector('#displayB');
const ms=document.querySelector('#ms');
let res=0;
let op='off';
let f=1;
display2.value='0';
bindBtns();

function bindBtns(){
    let btns=document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('click',manage);
    });
}

function manage(e){
    ms.textContent='';
    switch(e.target.id){
        case 'zero':
            if(op!=='off') break;
            if(display2.value.length<16){
                if(display2.value.indexOf('.')!==-1||Number(display2.value)!==0)
                    display2.value+='0';}
            else ms.textContent='Reached display limit of 16 simbols';
            break;
        case 'one':
        case 'two':
        case 'three':
        case 'four':
        case 'five':
        case 'six':
        case 'seven':
        case 'eight':
        case 'nine':
            if(op!=='off'){
                display2.value='0';
            }
            if(display2.value.length<16) 
                if(Number(display2.value)!==0||display2.value.indexOf('.')!==-1)
                display2.value+=e.target.getAttribute('data-val');
                else display2.value=e.target.getAttribute('data-val');
            else ms.textContent='Reached display limit of 16 simbols';
            break;
        case 'dot':
            if(display2.value.indexOf('.')===-1)
                if(display2.value.length===0)
                    display2.value+='0.';
                else if(display2.value.length<15)
                    display2.value+='.';
                else ms.textContent='Reached display limit of 16 simbols';
            break;
        case 'sign':
            if(display2.value[0]==='-'){
                let arr=display2.value.split('');
                arr.shift();
                display2.value=arr.join('');
            }
            else display2.value='-'+display2.value;
            break;
        case 'del':
            if(Number(display2.value)!==0||display2.value.length>1){
                let arr=display2.value.split('');
                arr.pop();
                display2.value=arr.join('');
                if(display2.value===''||display2.value==='-') display2.value='0';
            }
            break;
        case 'plus':
            sum();
            break;
        case 'minus':
            minus();
            break;
        case 'mul':
            multiply();
            break;
        case 'div':
            divide();
            break;
        case 'eq':
            evaluate();
            break;
        case 'clear':
            display2.value='0';
            res=0;
            op='off';
            break;
    }
}

function sum(){
    if(res===0){
        res=Number(display2.value);
        op='sum';
    }
    else{ 
        res=n+Number(display2.value);
        display2.value=res;
        op='sum';
    }
}