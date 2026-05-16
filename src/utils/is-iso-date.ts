export const isISODate = (value: string) => {
  if (!/^\d{4}-\d{2}-\d{2}.*$/.test(value)) return false;

  return !Number.isNaN(new Date(value).getTime());
};
