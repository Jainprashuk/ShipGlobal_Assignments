document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', function () {
            const openItem = document.querySelector('.accordion-item.open');
            toggleItem(item);

            if (openItem && openItem !== item) {
                toggleItem(openItem);
            }
        });
    });

    function toggleItem(item) {
        const content = item.querySelector('.accordion-content');
        if (item.classList.contains('open')) {
            content.style.maxHeight = null;
            item.classList.remove('open');
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            item.classList.add('open');
        }
    }
});
