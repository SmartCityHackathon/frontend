import { LOAD_PAGE } from '../dataAttributes.js';
import { AbstractAttributeResolver } from './AbstractAttributeResolver.js';

export class LoadPageAttributeResolver extends AbstractAttributeResolver {
    static dataAttributeKey() {
        return LOAD_PAGE;
    }

    static async applyOnElement(element, pageId) {
        const pageResponse = await fetch(`pages/${pageId}.html`);
        const pageHtml = await pageResponse.text();

        console.log(`Loading page "${pageId}".`);

        element.innerHTML = pageHtml;

    }
}
