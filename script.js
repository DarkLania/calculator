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
window.addEventListener('keydown',manageInput);
bindBtns();

function bindBtns(){
    let btns=document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('click',manage);
    });
}

function manageInput(e){
    switch(e.code){
        case 'Digit0':
        case 'Numpad0':
            document.getElementById('zero').click();
            document.getElementById('zero').classList.add('press');
            setTimeout(()=>{
                document.getElementById('zero').classList.remove('press');
               },50);
            break;
        case 'Digit1':
        case 'Numpad1':
            document.getElementById('one').click();
            document.getElementById('one').classList.add('press');
            setTimeout(()=>{
                document.getElementById('one').classList.remove('press');
               },50);
            break;
        case 'Digit2':
        case 'Numpad2':
            document.getElementById('two').click();
            document.getElementById('two').classList.add('press');
            setTimeout(()=>{
                document.getElementById('two').classList.remove('press');
               },50);
            break;
        case 'Digit3':
        case 'Numpad3':
            document.getElementById('three').click();
            document.getElementById('three').classList.add('press');
            setTimeout(()=>{
                document.getElementById('three').classList.remove('press');
               },50);
            break;
        case 'Digit4':
        case 'Numpad4':
            document.getElementById('four').click();
            document.getElementById('four').classList.add('press');
            setTimeout(()=>{
                document.getElementById('four').classList.remove('press');
            },50);
            break;
        case 'Digit5':
        case 'Numpad5':
            document.getElementById('five').click();
            document.getElementById('five').classList.add('press');
            setTimeout(()=>{
                document.getElementById('five').classList.remove('press');
            },50);
            break;
        case 'Digit6':
        case 'Numpad6':
            document.getElementById('six').click();
            document.getElementById('six').classList.add('press');
            setTimeout(()=>{
                document.getElementById('six').classList.remove('press');
            },50);
            break;
        case 'Digit7':
        case 'Numpad7':
            document.getElementById('seven').click();
            document.getElementById('seven').classList.add('press');
            setTimeout(()=>{
                document.getElementById('seven').classList.remove('press');
            },50);
            break;
        case 'Digit8':
        case 'Numpad8':
            document.getElementById('eight').click();
            document.getElementById('eight').classList.add('press');
            setTimeout(()=>{
                document.getElementById('eight').classList.remove('press');
            },50);
            break;
        case 'Digit9':
        case 'Numpad9':
            document.getElementById('nine').click();
            document.getElementById('nine').classList.add('press');
            setTimeout(()=>{
                document.getElementById('nine').classList.remove('press');
            },50);
            break;
        case 'Period':
        case 'NumpadDecimal':
            document.getElementById('dot').click();
            document.getElementById('dot').classList.add('press');
            setTimeout(()=>{
                document.getElementById('dot').classList.remove('press');
            },50);
            break;
        case 'Slash':
            document.getElementById('sign').click();
            document.getElementById('sign').classList.add('press');
            setTimeout(()=>{
                document.getElementById('sign').classList.remove('press');
            },50);
            break;
        case 'Backspace':
        case 'Delete':
            document.getElementById('del').click();
            document.getElementById('del').classList.add('delet');
            setTimeout(()=>{
                document.getElementById('del').classList.remove('delet');
            },50);
            break;
        case 'Escape':
            document.getElementById('clear').click();
            document.getElementById('clear').classList.add('pressCeq');
            setTimeout(()=>{
                document.getElementById('clear').classList.remove('pressCeq');
               },50);
            break;
        case 'NumpadDivide':
            e.preventDefault();
            document.getElementById('div').click();
            document.getElementById('div').classList.add('opi');
            setTimeout(()=>{
                document.getElementById('div').classList.remove('opi');
            },50);
            break;
        case 'NumpadMultiply':
            document.getElementById('mul').click();
            document.getElementById('mul').classList.add('opi');
            setTimeout(()=>{
                document.getElementById('mul').classList.remove('opi');
            },50);
            break;
        case 'NumpadSubtract':
            document.getElementById('minus').click();
            document.getElementById('minus').classList.add('opi');
            setTimeout(()=>{
                document.getElementById('minus').classList.remove('opi');
            },50);
            break;
        case 'NumpadAdd':
            document.getElementById('plus').click();
            document.getElementById('plus').classList.add('opi');
            setTimeout(()=>{
                document.getElementById('plus').classList.remove('opi');
            },50);
            break;
        case 'Enter':
        case 'NumpadEnter':
            document.getElementById('eq').click();
            document.getElementById('eq').classList.add('pressCeq');
            setTimeout(()=>{
                document.getElementById('eq').classList.remove('pressCeq');
               },50);
            break;
        default:
            break;
    }
}

function manage(e){
    ms.textContent='';
    console.log(e.target.id);
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