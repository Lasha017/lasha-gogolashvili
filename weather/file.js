setInterval(() => {
    const currentDateElement = document.querySelector('.date');
    if (currentDateElement) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        currentDateElement.innerText = now.toLocaleDateString('en-US', options);
    }
}, 1000);
