import { createErrorProxyClass } from './create-error-proxy-class';

describe('createErrorProxyClass', () => {
  it('should create a error proxy class', () => {
    const ErrorProxyClass = createErrorProxyClass<{
      foo: string;
    }>();

    const data = {
      foo: 'bar'
    };
    const error = new ErrorProxyClass(data);

    expect(error).toBeInstanceOf(ErrorProxyClass);
    expect(error).toEqual(data);
  });

  it('should create be compatible with non-extendable object', () => {
    const ErrorProxyClass = createErrorProxyClass<{
      foo: string;
    }>();

    const data = {
      foo: 'bar'
    };

    Object.preventExtensions(data);

    const error = new ErrorProxyClass(data);

    expect(error).toBeInstanceOf(ErrorProxyClass);
    expect(error).toEqual(data);
  });
});
