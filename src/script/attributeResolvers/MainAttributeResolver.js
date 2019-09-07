import { AbstractAttributeResolver } from './AbstractAttributeResolver.js';
import { LoadPageAttributeResolver } from './LoadPageAttributeResolver.js';
import { LoadRouteAttributeResolver } from './LoadRouteAttributeResolver.js';
import { CalendarAttributeResolver } from './CalendarAttributeResolver.js';
import { SelectorAttributeResolver } from './SelectorAttributeResolver.js';

export class MainAttributeResolver extends AbstractAttributeResolver {
    constructor(rootElement) {
        super(rootElement);
        this.attributeResolvers = [
            new LoadRouteAttributeResolver(rootElement),
            new LoadPageAttributeResolver(rootElement),
            new CalendarAttributeResolver(rootElement),
            new SelectorAttributeResolver(rootElement),
        ];
    }

    async applyOnCompatibleElements() {
        //let totalApplied = 0;

        while (true) {
            // TODO: Here should be await forPerformance

            //let applied = 0;

            for (const attributeResolver of this.attributeResolvers) {
                /*applied += */
                if (await attributeResolver.applyOnCompatibleElements()) {
                    //await forAnimationFrame();
                }
            }
            //if (!applied) {
            //    break;
            //}

            //totalApplied += applied;

            await forAnimationFrame(); //TODO: Better;
        }

        //console.log(`Resolvers applied ${totalApplied} times.`);

        //return totalApplied;
    }
}

export function forAnimationFrame() {
    return new Promise((resolve) => {
        requestAnimationFrame((now) => {
            resolve(now);
        });
    });
}