import { ISetiod, IMonad } from '../interfaces';

export class Identity<T> implements ISetiod<T>, IMonad<T> {
  constructor(private _value: T) {}
  value() {
    return this._value;
  }

  // ISetiod
  eqauls<U>(that: U): boolean {
    if (that instanceof Identity) {
      return this.value() == that.value();
    }
    return false;
  }

  // IFunctor
  map<U>(fn: (x: T) => U) {
    return new Identity<U>(fn(this.value()));
  }

  // IApply
  ap<U>(b: U) {
    const f = this.value();
    if (f instanceof Function) {
      return Identity.of<U>((f as Function)(b));
    }
  }

  // IApplicative
  static of<T>(value: T): Identity<T> {
    return new Identity<T>(value);
  }

  // IChain
  chain<U>(fn: (T) => U): U {
    return fn(this.value());
  }
}
