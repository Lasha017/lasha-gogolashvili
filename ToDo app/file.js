const add = document.querySelector('.btn');
const ul = document.querySelector('ul');

add.addEventListener('click', () => {
    const input = document.querySelector('input');
    input.classList.add('input-1')
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
    console.log(li);

    const div = document.createElement ('div');
    div.classList.add('check-box-fix')
    li.appendChild(div);

    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'
    checkbox.classList.add('input-2');
    div.appendChild(checkbox);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    div.appendChild(deleteBtn);
    deleteBtn.src = 'trash.svg';        
    deleteBtn.style.backgroundColor = 'white';
    console.log(li);


    const icon = document.createElement('img');
    icon.src = 'trash.svg'; 
    icon.alt = 'Delete Icon'; 
    deleteBtn.appendChild(icon);
    deleteBtn.style.backgroundColor = 'white'; 
    console.log(li);
   
    deleteBtn.addEventListener('click', () => {
        ul.removeChild(li);
    });
    
});

setInterval(() => {
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString();
    document.getElementById('date').innerText = new Date().toLocaleDateString();
}, 1000);
