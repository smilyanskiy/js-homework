function elementChanges(element1, element2) {

    if(element1.classList !== undefined) {
        element1.classList.add('newclass');
    }
    console.log(getComputedStyle(element1));

    element2.style.marginTop = '10px';
    element2.style.background = 'red';
    console.log(element2.style);
}