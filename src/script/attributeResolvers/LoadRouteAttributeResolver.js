import { LOAD_ROUTE } from '../dataAttributes.js';
import { AbstractAttributeResolver } from './AbstractAttributeResolver.js';
import { LoadPageAttributeResolver } from './LoadPageAttributeResolver.js';

export class LoadRouteAttributeResolver extends AbstractAttributeResolver {
    static dataAttributeKey() {
        return LOAD_ROUTE;
    }

    static async applyOnElement(element) {
        const page = /#\/((\w|\-|\/)+)/g.exec(document.location.hash)[1];

        /*
        try (!page) {
            page = 'errors/404';
        }*/
        // TODO: Check page

        await LoadPageAttributeResolver.applyOnElement(element, page);

        if (this.hashChangeHandler) {
            window.removeEventListener('hashchange', this.hashChangeHandler);
        }

        this.hashChangeHandler = () => {
            LoadRouteAttributeResolver.applyOnElement(element);
        };

        window.addEventListener('hashchange', this.hashChangeHandler);
    }
}
