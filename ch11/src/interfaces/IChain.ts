import { IApply } from './IApply';
import { IApplicative } from '.';

export interface IChain<T> extends IApply<T> {
  chain<U>(fn: (T) => U);
}
