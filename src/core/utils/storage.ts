/* eslint-disable no-console */
/* eslint-disable consistent-return */
class VaultService {
	storage = localStorage;

	setItem<T>(key: string, value: T): void {
		try {
			return this.storage.setItem(key, JSON.stringify(value));
		} catch (e) {
			console.warn(e);
		}
	}

	getItem<T = string>(key: string): T | undefined {
		try {
			return JSON.parse(this.storage.getItem(key) as string) as T;
		} catch (e) {
			console.warn(e);
		}
	}

	clearStorage(): void {
		this.storage.clear();
	}
}

const vaultService = new VaultService();

export { vaultService };
