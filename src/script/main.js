import { LOAD_PAGE } from './dataAttributes.js';
import { Calendar } from './Calendar.js';

export async function main() {
    let element;
    while ((element = document.querySelector(`*[${LOAD_PAGE}]`))) {
        const pageId = element.getAttribute(LOAD_PAGE);
        element.removeAttribute(LOAD_PAGE);

        const pageResponse = await fetch(`pages/${pageId}.html`);
        const pageHtml = await pageResponse.text();

        element.innerHTML = pageHtml;
    }

    const calendar = new Calendar();
}
