const initData = async () => {
    try {
        const data = await fetch('./info1.json').then(response => response.json());
        const table = document.querySelector('table');

        for (const entry of data) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td style="padding-right: 300px; padding-block: 14px; padding-left: 16px;" >${entry.name}</td>
            <td style="padding-right: 65px; padding-block: 14px; padding-left: 16px;">${entry.date}</td>
            <td style="padding-right: 84px; padding-block: 14px; padding-left: 16px;">${entry.title}</td>
            <td style="padding-inline: 105px; padding-block: 14px; text-align: center;">${entry.amount}</td>
            <td style="padding-inline: 105px; padding-block: 14px;"> <span class = "span-fix">${entry.danger}</span></td>`
            table.appendChild(tr);
        }
    } catch (error) {
        console.error('Error fetching or processing data:', error);
    }
}
function rotateImage() {
    const rotateButton = document.getElementById('rotateButton');
    rotateButton.classList.toggle('rotate180');
}
document.getElementById('rotateButton').addEventListener('click', () => {
    const tableRows = Array.from(document.querySelectorAll('table tr:not(:first-child)'));

    tableRows.sort((a, b) => {
        const textA = a.cells[0].textContent.trim(); 
        const textB = b.cells[0].textContent.trim(); 
        return textA.localeCompare(textB);
    });

    const table = document.querySelector('table');
    table.innerHTML = ''; 

    tableRows.forEach(row => {
        table.appendChild(row);
    });
});

initData();
