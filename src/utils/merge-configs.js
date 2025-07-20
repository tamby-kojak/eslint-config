/**
 * Merge two config objects.
 * @param {Object} c1 - The target object to merge into
 * @param {Object} c2 - The source object to merge from
 * @returns {Object} - The merged object
 */
export const mergeConfigs = (c1, c2) => {
  const result = { ...c1 }

  for (const key in c2) {
    if (Object.hasOwn(c2, key)) {
      if (c2[key] && typeof c2[key] === 'object' && !Array.isArray(c2[key])) {
        result[key] = mergeConfigs(c1[key] || {}, c2[key])
      } else if (Array.isArray(c2[key]) && Array.isArray(c1[key])) {
        result[key] = [...c1[key], ...c2[key]]
      } else {
        result[key] = c2[key]
      }
    }
  }

  return result
}