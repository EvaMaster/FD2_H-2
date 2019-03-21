let resText      = document.querySelector('.list__input'),
    arrDeal      = document.getElementsByClassName('deal__item'),
    btnAdd       = document.querySelector('.list__add-btn'),
    resContein   = document.querySelector('.list-deal'),
    btnLastClear = document.querySelector('.list__clear-btn'),
    btnAllClear  = document.querySelector('.list__clear-all-btn'),
    elem         = document.getElementsByTagName('li');
    
   
    
function generateColor() {
            return '#' + Math.floor(Math.random()*16777215).toString(16);
        }


btnAdd.addEventListener('click',()=>{
    let item    = document.createElement('li'),
        valText = resText.value,
        arrText = valText.split('');
    if(arrText.length !==0){
        resContein.appendChild(item);
        item.classList.add('deal__item');
        item.innerText = resText.value;
        resText.value = '';
        for(let i = 2; i<=arrDeal.length-1;i+=3){
        arrDeal[i].style.backgroundColor = generateColor();
        arrDeal[i].style.color = generateColor();
            };
    }
    else
        alert('Вы не Ввели текст');
    btnAllClear.addEventListener('click',()=>{
        item.remove();
    });

    resContein.addEventListener('click', (ev)=> {
        if (ev.target.className === 'deal__item') {
            ev.target.classList.toggle('checked');
        }
    }, true);
});

btnLastClear.addEventListener('click',()=>{
        resContein.removeChild(elem[0]);
});

