import { CALENDAR, SELECTOR_KEY } from '../dataAttributes.js';
import { AbstractAttributeResolver } from './AbstractAttributeResolver.js';

//const SECONDS_DAY = 1000 * 60 * 60 * 24;
export class CalendarAttributeResolver extends AbstractAttributeResolver {
    static dataAttributeKey() {
        return CALENDAR;
    }

    static async applyOnElement(element /*TODO: maybe, beginDateString*/) {
        const calendar = [[]];

        const currentDate = new Date();
        const startingDate = new Date(currentDate);
        startingDate.setDate(
            currentDate.getDate() - ((currentDate.getDay() + 6) % 7),
        );

        for (let day = 0; day < 7 * 5; day++) {
            const date = new Date(startingDate);
            date.setDate(startingDate.getDate() + day);

            calendar[calendar.length - 1].push(date);

            if (date.getDay() % 7 === 0) {
                calendar.push([]);
            }
        }

        element.innerHTML =
            `
        <table class="calendar">
        <tr>
            <th class="day1">Po</th>
            <th class="day2">Út</th>
            <th class="day3">St</th>
            <th class="day4">Čt</th>
            <th class="day5">Pá</th>
            <th class="day6">So</th>
            <th class="day7">Ne</th>
        </tr>
        ` +
            calendar
                .map(
                    (calendarRow) =>
                        `
            <tr>
            ` +
                        calendarRow
                            .map(
                                (calendarDate) =>
                                    `<td class="${
                                        calendarDate > currentDate
                                            ? 'future'
                                            : ''
                                    } ${
                                        calendarDate < currentDate ? 'past' : ''
                                    } ${
                                        calendarDate / 1 === currentDate / 1
                                            ? 'today'
                                            : ''
                                    } day${((calendarDate.getDay() + 6) % 7) +
                                        1}"
                                        
                                    ${SELECTOR_KEY}="${calendarDate.getFullYear()}-${calendarDate.getMonth() +
                                        1}-${calendarDate.getDate()}"

                    
                                        
                                        >${calendarDate.getDate()}.</td>`,
                            )
                            .join('\n') +
                        `
            </tr>`,
                )
                .join('\n') +
            `

        <!--


    <tr>
        <td>7.</td>
        <td>8.</td>
        <td>9.</td>
        <td>10.</td>
        <td>11.</td>
    </tr>
    <tr>
        <td>14.</td>
        <td>15.</td>
        <td>16.</td>
        <td>17.</td>
        <td>18</td>
    </tr>
    <tr>
        <td>20.</td>
        <td>21.</td>
        <td>22.</td>
        <td>23.</td>
        <td>24.</td>
    </tr>
    <tr>
        <td>27.</td>
        <td>28.</td>
        <td>29.</td>
        <td>30.</td>
        <td>31.</td>
    </tr>

        -->
</table>`;
    }
}
