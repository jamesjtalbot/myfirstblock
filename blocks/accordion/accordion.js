export default function decorate(block) {
    [...block.children].forEach((row) => {
        const content = document.createElement('div');
        content.classList.add('item-content');
        content.append(...row.children);
        row.append(content);

        const title = row.querySelector('h2');
        title.classList.add('item-title');
        title.addEventListener('click', () => {
            title.classList.toggle('open');
        });
        row.prepend(title);
    });
}
 