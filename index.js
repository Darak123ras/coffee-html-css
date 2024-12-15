const toggleButton = document.getElementById('toggle-button');
        const menu = document.getElementById('hidden');

        toggleButton.addEventListener('click', () => {
            menu.classList.toggle('active');
        });