const h1 = document.querySelector('div h1')

/*
function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;

    if(currentColor === 'blue') {
        newColor = 'tomato'
    } else {
        newColor = 'blue';
    }
    h1.style.color = newColor;
}

자바스크립트에서 직접 스타일을 변경하는 것이 좋지않다.
css에 .active의 스타일을 설정해주고 css가 변경할 수 있게, 
만드는 것이 좋다. (개인의 취향일 수 있음)
*/

function handleTitleClick() {

    //const clickedClass = 'active'
/*
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
*/
    h1.classList.toggle('active');
    //함수안의 string을 두번이상 쓰게되는 경우 변수로 생성하는 것이 좋음

    //className이 string이면 오타가 나는 경우, err가 발생하기 쉽다.
    //raw String, raw Value를 사용하는 것 보다, const 변수를 생성하고 사용하는 것이 좋음
    //우리가 원하는 h1에 다른 클래스가 추가되고, style이 적용된다면, 해당 함수를 실행할때 기존의 클래스가 없어진다는 버그가 존재한다.
    //직접 추가된 클래스를 위 clickedClass에 적어두는 것은 추후 다른 클래스들이 추가 되는 경우 일일이 추가해줘야하는 단점도 존재한다.
}


h1.addEventListener('click', handleTitleClick)