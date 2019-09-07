export class AbstractAttributeResolver {
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    run() {
        this.applyOnCompatibleElements();
    }

    static dataAttributeKey() {
        throw new Error(`This method shoud be overwrited.`);
    }

    static async applyOnElement(element, attributeData) {
        throw new Error(`This method shoud be overwrited.`);
    }

    async applyOnElement(element, attributeData) {
        this.__proto__.constructor.applyOnElement(element, attributeData);
    }

    getCompatibleElements() {
        return this.rootElement.querySelectorAll(
            `*[${this.__proto__.constructor.dataAttributeKey()}]`,
        );
    }

    async applyOnCompatibleElements() {
        const elements = this.getCompatibleElements();

        /*if (!elements.length) {
            console.log(
                `thare are no elements with ${this.__proto__.constructor.dataAttributeKey()}.`,
            );
        }*/

        for (const element of elements) {
            await this.applyOnElement(
                element,
                element.getAttribute(
                    this.__proto__.constructor.dataAttributeKey(),
                ),
            );
            element.removeAttribute(
                this.__proto__.constructor.dataAttributeKey(),
            );
        }

        return elements.length;
    }
}
