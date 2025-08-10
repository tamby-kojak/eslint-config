export const mergeObjects = (o1: Record<string, any>, o2: Record<string, any>): Record<string, any> => {
  const result: Record<string, any> = { ...o1 }

  for (const key in o2) {
    if (Object.hasOwn(o2, key)) {
      if (o2[key] && typeof o2[key] === 'object' && !Array.isArray(o2[key])) {
        result[key] = mergeObjects(o1[key] || {}, o2[key])
      } else if (Array.isArray(o2[key]) && Array.isArray(o1[key])) {
        result[key] = [...o1[key], ...o2[key]]
      } else {
        result[key] = o2[key]
      }
    }
  }

  return result
}