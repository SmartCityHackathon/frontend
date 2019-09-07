import { LOAD_PAGE, CALENDAR } from '../dataAttributes.js';
import { AbstractAttributeResolver } from './AbstractAttributeResolver.js';
import { Calendar } from '../Calendar.js';

export class CalendarAttributeResolver extends AbstractAttributeResolver {
    static dataAttributeKey() {
        return CALENDAR;
    }

    static async applyOnElement(element) {
        const calendar = new Calendar(element);
    }
}
