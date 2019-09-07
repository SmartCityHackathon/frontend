// TODO: Maybe rename
// TODO: Maybe not a class
export class MainAttributeResolver {
    constructor(attributeResolvers) {
        this.attributeResolvers = attributeResolvers;
    }

    async run() {
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
