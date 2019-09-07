import { MainAttributeResolver } from './classes/MainAttributeResolver.js';
import { LoadPageAttributeResolver } from './attributeResolvers/LoadPageAttributeResolver.js';
import { LoadRouteAttributeResolver } from './attributeResolvers/LoadRouteAttributeResolver.js';
import { CalendarAttributeResolver } from './attributeResolvers/CalendarAttributeResolver.js';
import { SelectorAttributeResolver } from './attributeResolvers/SelectorAttributeResolver.js';

export async function main() {
    const mainAttributeResolver = new MainAttributeResolver([
        new LoadRouteAttributeResolver(document.body),
        new LoadPageAttributeResolver(document.body),
        new CalendarAttributeResolver(document.body),
        new SelectorAttributeResolver(document.body),
    ]);
    mainAttributeResolver.run();
}
