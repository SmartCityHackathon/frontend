import { Selector } from '../classes/Selector.js';
import { SELECTOR } from '../dataAttributes.js';
import { AbstractAttributeResolver } from './AbstractAttributeResolver.js';

export class SelectorAttributeResolver extends AbstractAttributeResolver {
    static dataAttributeKey() {
        return SELECTOR;
    }

    static async applyOnElement(element) {
        const selector = new Selector(element);
    }
}
