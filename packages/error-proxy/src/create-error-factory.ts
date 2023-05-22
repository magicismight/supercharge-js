/**
 * Return a factory method that can generate custom exceptions and a comparison method that can compare the source of generated exceptions.
 * @param ctor Constructor
 * @returns [creator: (data: object) => Err, isInstanceOf: (error?: any) => boolean]
 */
export function createErrorFactory<Err, Params extends any[]>(
  Ctor: new (...params: Params) => Err // Error constructor, which can be created by create-error-proxy-class.
): [
  creator: (...params: Params) => Err, // Error creator, create a new error object that can be recognized by the "isInstanceOf" method.
  isInstanceOf: (error?: any) => error is Err // Error comparer, determine whether the error object is generated by the "creator" method.
] {
  return [
    (...params: Params): Err => {
      return new Ctor(...params);
    },
    (error?: any): error is Err => {
      return error instanceof Ctor;
    }
  ];
}