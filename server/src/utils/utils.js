import pluginId from './pluginId.js';

/**
 * ServiceName.
 * @typedef {("export"|"import")} ServiceName
 */

/**
 * Get a plugin service.
 * @param {ServiceName} serviceName
 * @returns
 */
const getService = (serviceName) => {
  return strapi.plugin(pluginId).service(serviceName);
};

export { getService };
