const display2=document.querySelector('#displayB');
const ms=document.querySelector('#ms');
let n1='';
let n1Check='';
let n2='';
let op='';
let res='';
let checkRes=0;
let resetInput=0;
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
            if(resetInput===1){
                display2.value='0';
                resetInput=0;
                if(checkRes===1) {
                    display2.value='0';
                    n1='';
                    n1Check='';
                    n2='';
                    op='';
                    res='';
                    checkRes=0;
                }
            }
            if(display2.value.length<12){
                if(display2.value.indexOf('.')!==-1||Number(display2.value)!==0)
                    display2.value+='0';}
            else ms.textContent='Reached display limit of 12 simbols';
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
            if(resetInput===1){
                display2.value='0';
                resetInput=0;
                if(checkRes===1) {
                    display2.value='0';
                    n1='';
                    n1Check='';
                    n2='';
                    op='';
                    res='';
                    checkRes=0;
                }
            }
            if(display2.value.length<12) 
                if(Number(display2.value)!==0||display2.value.indexOf('.')!==-1)
                display2.value+=e.target.getAttribute('data-val');
                else display2.value=e.target.getAttribute('data-val');
            else ms.textContent='Reached display limit of 12 simbols';
            break;
        case 'dot':
            if(resetInput===1){
                display2.value='0';
                resetInput=0;
                if(checkRes===1) {
                    display2.value='0';
                    n1='';
                    n1Check='';
                    n2='';
                    op='';
                    res='';
                    checkRes=0;
                }
            }
            if(display2.value===res) clear();
            if(display2.value.indexOf('.')===-1)
                if(display2.value.length===0)
                    display2.value+='0.';
                else if(display2.value.length<11)
                    display2.value+='.';
                else ms.textContent='Reached display limit of 12 simbols';
            break;
        case 'sign':
            if(resetInput===1){
                display2.value='0';
                resetInput=0;
                if(checkRes===1) {
                    display2.value='0';
                    n1='';
                    n1Check='';
                    n2='';
                    op='';
                    res='';
                    checkRes=0;
                }
            }
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
            if(resetInput=1) {
                checkRes=0;
            }
            if(n1Check===''){
                n1=display2.value;
                n1Check=n1;
                op='+';
                resetInput=1;
            }
            else{
                evaluate();
                op='+'
                checkRes=0;
                n1Check=n1;
            }
            break;
        case 'minus':
            if(resetInput=1) {
                checkRes=0;
            }
            if(n1Check===''){
                n1=display2.value;
                n1Check=n1;
                op='-';
                resetInput=1;
            }
            else{
                evaluate();
                op='-'
                checkRes=0;
                n1Check=n1;
            }
            break;
        case 'mul':
            if(resetInput=1) {
                checkRes=0;
            }
            if(n1Check===''){
                n1=display2.value;
                n1Check=n1;
                op='*';
                resetInput=1;
            }
            else{
                evaluate();
                op='*';
                checkRes=0;
                n1Check=n1;
            }
            break;
        case 'div':
            if(resetInput=1) {
                checkRes=0;
            }
            if(n1Check===''){
                n1=display2.value;
                n1Check=n1;
                op='/';
                resetInput=1;
            }
            else{
                evaluate();
                op='/'
                checkRes=0;
                n1Check=n1;
            }
            break;
        case 'eq':
            evaluate();
            break;
        case 'clear':
            display2.value='0';
            n1='';
            n1Check='';
            n2='';
            op='';
            res='';
            checkRes=0;
            resetInput=0;
            break;
    }
}

function evaluate(){
    if(n1!==''&&op!==''){
        n2=display2.value;
        let f=Number(n1);
        let s=Number(n2);
        calc(f,s);
        showRes();
        display2.value=res;
        checkRes=1;
        n1=res;
        n2='';
        res=''; 
        n1Check='';
        resetInput=1;
    }
}

function calc(f,s){
    let resn;
    switch(op){
        case '+':
            resn=f+s;
            break;
        case '-':
            resn=f-s;            
            break;
        case '*':
            resn=f*s;
            break;
        case '/':
            if(s===0){
                ms.textContent='Can\'t divide by zero'
                resn=0;
                display2.value='0';
                n1='';
                n1Check='';
                n2='';
                op='';
                res='';
                checkRes=0;
            }
            else{
                resn=f/s;
            }
            break;
    }
    res=`${resn}`;
}

function showRes(){
    res=parseFloat(Number(res).toFixed(6));
    res=String(res);
    if(res.length>12){
        res=Number(res).toExponential();
        if(res.length>12){
            res='0';
            ms.textContent='Result is too large or too small';
        }
    }
}