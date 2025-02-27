import { Constructor } from "./utils";
import { Exit } from "./error";

export class TokenStream extends Array<string> {
  constructor(
    source: number | string | string[] = [],
    public readonly error: Constructor<Error> = Exit,
  ) {
    super();
    if (typeof source === "string") {
      source = source.trim().split(/\s+/g);
    }
    if (typeof source === "number") {
      source = new Array(source);
    }
    this.push(...source);
  }

  move(): string | null {
    return this.shift() || null;
  }

  next(): this {
    this.shift();
    return this;
  }

  current(): string | null {
    return this.length > 0 ? this[0] : null;
  }
}
