document.addEventListener("DOMContentLoaded", function() {
    let header = document.querySelector('header');
    let h1Element = header.querySelector('h1');
    let titleText = h1Element.textContent || h1Element.innerText;
    let index = 0;

    function typeTitle() {
        header.innerHTML = titleText.slice(0, index);
        index++;

        if (index <= titleText.length) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(typeTitle, 30); 
        } else {
            setTimeout(function() {
                header.style.height = '0';
            }, 1500); 
        }
    }
    
    typeTitle();
});

document.addEventListener("DOMContentLoaded", function() {
    let gridItems = document.querySelectorAll('.cover-grid-item');

    gridItems.forEach(function(item, index) {
        var delay = index * 100; 
        item.style.animationDelay = delay + 'ms';
    });

    let gridContainer = document.querySelector('.cover-grid');
    gridContainer.style.opacity = '1';
});


function restartPage() {
    window.location.reload();
}


function toggleDarkMode() {

    let body = document.body;
    let isDarkMode = body.classList.toggle('dark-mode');
    
    let footer = document.querySelector('footer');
    footer.classList.toggle('dark-mode');

    let moreProdGridItems = document.querySelectorAll('.more-prod-grid-item');
    moreProdGridItems.forEach(function(item) {
        item.classList.toggle('dark');
    });

    if (isDarkMode) {
        document.querySelector('.text-dark-mode p').textContent = "light";
    } else {
        document.querySelector('.text-dark-mode p').textContent = "dark";
    }
}


function toggleMonochrome() {
    let images = document.querySelectorAll('img');
    images.forEach(function(image) {
        if (image.classList.contains('monochrome')) {
            image.classList.remove('monochrome');
            document.querySelector('.text-monochrome p').textContent = "gray";
        } else {
            image.classList.add('monochrome');
            document.querySelector('.text-monochrome p').textContent = "color";
        }
    });
}
