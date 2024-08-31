// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class 'accordion-item'
    const accordionItems = document.querySelectorAll('.accordion-item');

    // Iterate over each accordion item
    accordionItems.forEach(item => {
        // Select the header of the accordion item
        const header = item.querySelector('.accordion-header');
        
        // Add a click event listener to the header
        header.addEventListener('click', function () {
            // Find the currently open accordion item, if any
            const openItem = document.querySelector('.accordion-item.open');
            
            // Toggle the clicked item (open/close)
            toggleItem(item);

            // If there is another item open and it's not the clicked item, close it
            if (openItem && openItem !== item) {
                toggleItem(openItem);
            }
        });
    });

    // Function to toggle an accordion item open or closed
    function toggleItem(item) {
        // Select the content section of the accordion item
        const content = item.querySelector('.accordion-content');

        // If the item is already open, close it
        if (item.classList.contains('open')) {
            // Remove max height to collapse the content
            content.style.maxHeight = null;
            // Remove the 'open' class to mark it as closed
            item.classList.remove('open');
        } else {
            // Set the max height to the content's scroll height to expand it
            content.style.maxHeight = content.scrollHeight + 'px';
            // Add the 'open' class to mark it as open
            item.classList.add('open');
        }
    }
});
