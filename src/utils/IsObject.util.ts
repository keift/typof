export const isObject = (value: unknown) => {
  if (typeof value === 'object' && value !== null) return true;

  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value) as unknown;

      return typeof parsed === 'object' && parsed !== null;
    } catch {
      return false;
    }
  }

  return false;
};
