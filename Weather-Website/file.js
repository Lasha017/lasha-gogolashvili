function myfunction() {
    const element = document.body;
    element.classList.toggle('light-mode');
}
function toggleCollapsible() {
    var collapsibleContent = document.querySelector('.collapsible-content');
    collapsibleContent.classList.toggle('show');
}
document.querySelector('.collapsible').addEventListener('click', toggleCollapsible);
    