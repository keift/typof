import { isISODate } from './isISODate.util';
import { isObject } from './isObject.util';

import type { Types } from '../types/Types.type';

export const typof = (value: unknown): Types[] => {
  const types: Types[] = [];

  if (typeof value === 'string') {
    value = value.trim();

    if (typeof value !== 'string') return types;

    types.push('string');

    if (value === '') return types;

    if (Number.isFinite(Number(value))) {
      const number = Number(value);

      types.push('number');

      if (Number.isInteger(number)) {
        types.push('integer');
      } else if (!Number.isInteger(number)) {
        types.push('float');
      }
    }

    if (value === 'true' || value === 'false') types.push('boolean');

    if (isObject(value) && !Array.isArray(JSON.parse(value))) types.push('object');

    if (isObject(value) && Array.isArray(JSON.parse(value))) types.push('array');

    if (isISODate(value)) types.push('date');

    if (value === 'null') types.push('null');

    if (value === 'undefined') types.push('undefined');
  } else if (typeof value === 'number') {
    if (!Number.isFinite(value)) return types;

    types.push('number');

    if (Number.isInteger(value)) {
      types.push('integer');
    } else if (!Number.isInteger(value)) {
      types.push('float');
    }
  } else if (typeof value === 'boolean') {
    types.push('boolean');
  } else if (isObject(value) && !Array.isArray(value)) {
    types.push('object');

    if (value instanceof Date) types.push('date');
  } else if (isObject(value) && Array.isArray(value)) {
    types.push('array');
  } else if (value === null) {
    types.push('null');
  } else if (value === undefined) {
    types.push('undefined');
  }

  return types;
};

export const string = (value: unknown) => {
  // eslint-disable-next-line no-restricted-syntax
  return typof(value).includes('object') || typof(value).includes('array') ? JSON.stringify(value) : String(value);
};

export const number = (value: unknown) => {
  return typof(value).includes('number') ? Number(value) : NaN;
};

export const integer = (value: unknown) => {
  return typof(value).includes('number') ? Math.trunc(Number(value)) : NaN;
};

export const boolean = <Value>(value: Value): boolean | Value => {
  if (typof(value).includes('boolean') && typof(value).includes('string')) {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else return value;
  } else return value;
};

export const object = <Value>(value: Value): object | Value => {
  if (typof(value).includes('object') && typof(value).includes('string')) {
    return JSON.parse(value as string) as object;
  } else return value;
};

export const array = <Value>(value: Value): unknown[] | Value => {
  if (typof(value).includes('array') && typof(value).includes('string')) {
    return JSON.parse(value as string) as unknown[];
  } else return value;
};

export const date = (value: unknown) => {
  return new Date(value as string);
};

export const _null = <Value>(value: Value): null | Value => {
  return typof(value).includes('null') ? null : value;
};

export const _undefined = <Value>(value: Value): undefined | Value => {
  return typof(value).includes('undefined') ? undefined : value;
};
