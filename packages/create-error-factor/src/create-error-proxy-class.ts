/**
 * Creates a Class that can be used as a proxy for error information.
 * Each time this Class is called, it returns a globally unique Class.
 * Objects created based on this Class behave exactly the same as the initialized error object in terms of their properties and methods.
 * However, the instanceOf and getPrototypeOf methods point to the Class itself rather than the original prototype of the error object.
 * This allows developers to handle errors in a more flexible and efficient way, without compromising the integrity of the error objects themselves.
 * @returns
 */
export function createErrorProxyClass<Error extends Object>(): new (
  error: Error
) => Error {
  class ErrorClass {
    public constructor(error: Error) {
      if (Object.isExtensible(error)) {
        Object.setPrototypeOf(error, this);
        // eslint-disable-next-line no-constructor-return
        return error;
      } else {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        // eslint-disable-next-line no-constructor-return
        return new Proxy(
          { ...error },
          {
            getPrototypeOf(): object | null {
              return Object.getPrototypeOf(self);
            }
          }
        );
      }
    }
  }

  type ErrorProxyClass = new (error: any) => Error;
  return ErrorClass as ErrorProxyClass;
}
