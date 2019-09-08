import { SELECTOR_KEY } from '../dataAttributes.js';

export class Selector {
    changeDate(element, moving) {
        this.dataManager.set(
            element.getAttribute(SELECTOR_KEY),
            moving === 'GOING',
        );

        if (moving === 'GOING') {
            element.classList.add('not');
        } else {
            element.classList.remove('not');
        }
    }

    constructor(element, dataManager) {
        this.element = element;
        this.dataManager = dataManager;
        this._init();
    }

    async _init() {
        const data = await this.dataManager.load();
        this.isMoving = false;

        for (const element of this.element.querySelectorAll('td')) {
            /*const defaultValue = JSON.parse(
                element.getAttribute(SELECTOR_VALUE),
            );*/
            //console.log('defaultValue', defaultValue);
            if (data[element.getAttribute(SELECTOR_KEY)]) {
                element.classList.add('not');
            } else {
                //TODO: ? element.classList.remove('not');
            }

            element.addEventListener('pointerdown', () => {
                this.isMoving = element.classList.contains('not')
                    ? 'NOT'
                    : 'GOING';
                this.changeDate(element, this.isMoving);
            });

            for (const eventType of ['pointerleave', 'pointerenter']) {
                element.addEventListener(eventType, () => {
                    if (this.isMoving) {
                        this.changeDate(element, this.isMoving);
                    }
                });
            }
        }

        document.querySelector('body').addEventListener('pointerup', () => {
            this.isMoving = false;
        });
    }
}
