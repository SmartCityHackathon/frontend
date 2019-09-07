import { SELECTOR_VALUE } from '../dataAttributes.js';

export class Selector {
    changeDate(element, moving) {
        if (moving === 'GOING') {
            element.classList.add('not');
        } else {
            element.classList.remove('not');
        }
    }

    constructor() {
        this.isMoving = false;

        for (const element of document.querySelectorAll('td')) {
            const defaultValue = JSON.parse(
                element.getAttribute(SELECTOR_VALUE),
            );
            console.log('defaultValue', defaultValue);
            if (defaultValue) {
                element.classList.add('not');
            } else {
                element.classList.remove('not');
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
