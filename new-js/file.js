const add = document.querySelector('.btn');
const ul = document.querySelector('ul');

add.addEventListener('click', () => {
    const input = document.querySelector('input');
    input.classList.add('input-1')
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
    console.log(li);

    const div = document.createElement ('div')
    li.appendChild(div);
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'
    checkbox.classList.add('input-2');
    div.appendChild(checkbox);
    checkbox.style.color = 'red';
    checkbox.style.borderRadius = '20px';
    // console.log(div);
    
    const deleteBtn = document.createElement('button');
    // deleteBtn.innerText = 'delete';
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
