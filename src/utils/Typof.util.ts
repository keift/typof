import { isISODate } from './IsISODate.util';
import { isObject } from './IsObject.util';

import type { Types } from '../types/Types.type';
import type { UnknownObject } from '../types/UnknownObject.type';

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
      } else types.push('float');
    }

    if (value === 'true' || value === 'false') types.push('boolean');

    if (isISODate(value)) types.push('date');

    if (isObject(value) && !Array.isArray(JSON.parse(value))) types.push('object');

    if (isObject(value) && Array.isArray(JSON.parse(value))) types.push('array');

    if (value === 'null') types.push('null');

    if (value === 'undefined') types.push('undefined');
  } else if (typeof value === 'number') {
    if (!Number.isFinite(value)) return types;

    types.push('number');

    if (Number.isInteger(value)) {
      types.push('integer');
    } else types.push('float');
  } else if (typeof value === 'boolean') {
    types.push('boolean');
  } else if (isObject(value) && !Array.isArray(value)) {
    types.push('object');

    if (value instanceof Date) types.push('date');
  } else if (isObject(value) && Array.isArray(value)) {
    types.push('array');
  } else if (value === null) {
    types.push('null');
  } else if (value === undefined) types.push('undefined');

  return types;
};

export const string = (value: unknown): string => {
  const types = typof(value);

  return types.includes('object') || types.includes('array') ? JSON.stringify(value) : String(value);
};

export const number = (value: unknown): number => {
  return typof(value).includes('number') ? Number(value) : NaN;
};

export const integer = (value: unknown): number => {
  return typof(value).includes('number') ? Math.trunc(Number(value)) : NaN;
};

export const boolean = <Value>(value: Value): boolean | Value => {
  const types = typof(value);

  if (types.includes('boolean') && types.includes('string')) {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else return value;
  } else return value;
};

export const date = <Value>(value: Value): Date | Value => {
  return typof(value).includes('date') ? new Date(value as string) : value;
};

export const object = <Value>(value: Value): UnknownObject | Value => {
  const types = typof(value);

  return types.includes('object') && types.includes('string') ? (JSON.parse(value as string) as UnknownObject) : value;
};

export const array = <Value>(value: Value): unknown[] | Value => {
  const types = typof(value);

  return types.includes('array') && types.includes('string') ? (JSON.parse(value as string) as unknown[]) : value;
};

export const _null = <Value>(value: Value): null | Value => {
  return typof(value).includes('null') ? null : value;
};

export const _undefined = <Value>(value: Value): undefined | Value => {
  return typof(value).includes('undefined') ? undefined : value;
};
