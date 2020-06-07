import { IFunctor, ISetiod } from '../interfaces';

export class Identity<T> implements ISetiod<T>, IFunctor<T> {
  constructor(private _value: T) {}
  value() {
    return this._value;
  }
  eqauls<U>(that: U): boolean {
    if (that instanceof Identity) {
      return this.value() == that.value();
    }
    return false;
  }
  map<U>(fn: (x: T) => U) {
    return new Identity<U>(fn(this.value()));
  }
}
