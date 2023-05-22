import { createErrorFactory } from './create-error-factory';

describe('createErrorFactory', () => {
  it('should create factory and comparer', () => {
    const data = {
      foo: 'bar'
    };
    class A {
      public constructor(public payload: typeof data) {}
    }

    const [creator, isInstanceOf] = createErrorFactory(A);

    const error = creator(data);
    expect(error).toBeInstanceOf(A);
    expect(error.payload).toEqual(data);
    expect(isInstanceOf(error)).toBe(true);
    expect(isInstanceOf(new Error())).toBe(false);
  });
});
