import { Selector } from '../classes/Selector.js';
import { SELECTOR } from '../dataAttributes.js';
import { AbstractAttributeResolver } from './AbstractAttributeResolver.js';

export class SelectorAttributeResolver extends AbstractAttributeResolver {
    constructor(rootElement, dataManager) {
        super(rootElement);
        this.dataManager = dataManager;
    }

    static dataAttributeKey() {
        return SELECTOR;
    }

    async applyOnElement(element) {
        new Selector(element, this.dataManager);
    }
}
