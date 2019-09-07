import { AbstractAttributeResolver } from './AbstractAttributeResolver.js';
import { LoadPageAttributeResolver } from './LoadPageAttributeResolver.js';
import { LoadRouteAttributeResolver } from './LoadRouteAttributeResolver.js';
import { CalendarAttributeResolver } from './CalendarAttributeResolver.js';


export class MainAttributeResolver extends AbstractAttributeResolver {
    constructor(rootElement) {
        super(rootElement);
        this.attributeResolvers = [
            new LoadRouteAttributeResolver(rootElement),
            new LoadPageAttributeResolver(rootElement),
            new CalendarAttributeResolver(rootElement)
        ];
    }

    async applyOnCompatibleElements() {
        let totalApplied = 0;

        for (let i = 0; i < 100; i++) {

          
            // TODO: Here should be await forPerformance

            let applied = 0;

            for (const attributeResolver of this.attributeResolvers) {
                applied += await attributeResolver.applyOnCompatibleElements();
            }
            if (!applied) {
                break;
            }

            totalApplied += applied;
        }

        //console.log(`Resolvers applied ${totalApplied} times.`);

        return totalApplied;
    }
}