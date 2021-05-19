/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
const CacheHelper = {
  async cachingAppShell(requests) {},

  async deleteOldCache() {},

  async revalidateCache(requests) {},

  async _openCache() {
    return caches.open('Restaurant Apps PWA');
  },
};

export default CacheHelper;
