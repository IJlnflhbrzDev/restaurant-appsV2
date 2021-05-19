/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== 'Restaurant Apps PWA')
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidateCache(requests) {},

  async _openCache() {
    return caches.open('Restaurant Apps PWA');
  },
};

export default CacheHelper;
