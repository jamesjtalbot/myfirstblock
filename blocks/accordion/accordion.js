export default function init (block) {
    const titles = block.querySelectorAll(':scope > div:nth-child(odd)');
    titles.forEach((title) => {
        title.classList.add ('item-title');
        title.nextElementSibling.classList.add ('item-content');
        title.addEventListener('click', () => {
            title.classList.toggle('open')
        });
    });
    }
