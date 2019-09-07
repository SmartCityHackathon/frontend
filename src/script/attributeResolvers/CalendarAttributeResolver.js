import { CALENDAR } from '../dataAttributes.js';
import { AbstractAttributeResolver } from './AbstractAttributeResolver.js';

export class CalendarAttributeResolver extends AbstractAttributeResolver {
    static dataAttributeKey() {
        return CALENDAR;
    }

    static async applyOnElement(element) {
        element.innerHTML = `
        <table>
        <tr>
        <th>Po</th>
        <th>Út</th>
        <th>St</th>
        <th>Čt</th>
        <th>Pá</th>
    </tr>
    <tr>
        <td>30.</td>
        <td>1.</td>
        <td>2.</td>
        <td>3.</td>
        <td>4.</td>
    </tr>
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
</table>`;
    }
}
