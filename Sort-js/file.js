fetch ('./info.json') 
.then(response => response.json())
.then(response => console.log(response))
.catch (err => console.log(error));

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('sortButton');

    button.addEventListener('click', () => {
        const ul = document.getElementById('myList');
        const liArray = Array.from(ul.getElementsByTagName('li'));

        liArray.sort((a, b) => {
            return a.textContent.localeCompare(b.textContent);
        });

        ul.innerHTML = '';

        liArray.forEach(li => {
            ul.appendChild(li);
        });
    });
});
