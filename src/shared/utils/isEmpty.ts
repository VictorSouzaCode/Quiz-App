// A utility to check if a value is empty (null, undefined, empty object or string).

export function isEmpty(value: any): boolean {
  if (value == null) return true;
  if (typeof value === 'string' && value.trim() === '') return true;
  if (Array.isArray(value) && value.length === 0) return true;
  if (typeof value === 'object' && Object.keys(value).length === 0) return true;
  return false;
}

// example usage:

/*
isEmpty({}); // true
isEmpty([]); // true
isEmpty(''); // true
*/