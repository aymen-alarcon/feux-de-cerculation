function close() {
    if (confirm("Do you really want to close it?") == true) {
        window.close();
    }  
}

let choi = document.querySelector('.h3');

function red() {
    choi.classList.remove('orange');
    choi.style.backgroundColor = 'red';
    choi.innerText = 'You should stop';
    choi.style.color = '#ffff';
}

function green() {
    choi.classList.remove('orange');
    choi.style.backgroundColor = 'green';
    choi.innerText = 'Go go go go';
    choi.style.color = '#ffff';
}

function yellow() {
    choi.classList.remove('orange');
    choi.style.backgroundColor = 'yellow'; 
    choi.innerText = 'Slowly';
    choi.style.color = 'black';  
}

function clearcol() {
    choi.classList.remove('orange');
    choi.innerText = 'Choisir une couleur';
    choi.style.backgroundColor = ''; 
    choi.style.color = ''; 
}
