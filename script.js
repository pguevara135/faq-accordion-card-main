let faq = document.querySelectorAll('.according');

faq.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});