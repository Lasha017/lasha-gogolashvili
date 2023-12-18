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
    // checkbox.style.color = 'green';
    // checkbox.style.borderRadius = '20px';
    
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


function updateDateTime() {
    const dateTimeElement = document.getElementById('liveDateTime');
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    dateTimeElement.textContent = formattedDateTime;
}

setInterval(updateDateTime, 1000);