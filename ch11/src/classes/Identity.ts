import { IApplicative, ISetiod } from '../interfaces';

export class Identity<T> implements ISetiod<T>, IApplicative<T> {
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
  ap<U>(b: U) {
    const f = this.value();
    if (f instanceof Function) {
      return Identity.of<U>((f as Function)(b));
    }
  }
  static of<T>(value: T): Identity<T> {
    return new Identity<T>(value);
  }
}
