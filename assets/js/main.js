
document.addEventListener('DOMContentLoaded', function() {
    const levelBars = document.querySelectorAll('.level-bar-inner');
    levelBars.forEach(bar => {
        const itemWidth = bar.getAttribute('data-level') || bar.dataset.level;
        if (itemWidth) {
            bar.style.width = itemWidth;
        }
    });
});
