export class LocalStorageDataManager {
    constructor() {
        this.data = {};
    }

    async load() {
        return this.data;
    }

    async set(key, value) {
        this.data[key] = value;
    }
}
