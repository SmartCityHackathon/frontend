import { Calendar } from './Calendar.js';
import { MainAttributeResolver } from './attributeResolvers/MainAttributeResolver.js';

export async function main() {
    let element;

    const mainAttributeResolver = new MainAttributeResolver(document);
    mainAttributeResolver.run();

    const calendar = new Calendar();
}
