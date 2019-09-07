class Calendar {
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
