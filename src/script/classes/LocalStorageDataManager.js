export class LocalStorageDataManager {
    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;
        this.data = JSON.parse(localStorage.getItem(localStorageKey) || '{}');
    }

    async load() {
        return this.data;
    }

    async set(key, value) {
        if (!key) {
            console.warn(`Can not set empty key value.`);
            rerurn;
        }
        this.data[key] = value;
        this._save();
    }

    _save() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.data));
    }
}
