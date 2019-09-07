export async function main() {
    let element;
    while ((element = document.querySelector('*[data-load-page]'))) {
        const pageId = element.getAttribute('data-load-page');
        element.removeAttribute('data-load-page');

        const pageResponse = await fetch(`pages/${pageId}.html`);
        const pageHtml = await pageResponse.text();

        element.innerHTML = pageHtml;
    }

    const calendar = new Calendar();
}
