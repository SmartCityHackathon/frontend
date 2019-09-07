import { Calendar } from './Calendar.js';
import { MainAttributeResolver } from './attributeResolvers/MainAttributeResolver.js';

export async function main() {
    const mainAttributeResolver = new MainAttributeResolver(document.body);
    mainAttributeResolver.run();
}
