# error-proxy

Proxy for JavaScript errors, a better way to handle errors.

```ts
import {
  createErrorFactory,
  createErrorProxyClass
} from '@shimo/cougar-errors';

enum FilePickerErrorCode {
  Canceled = 'canceled',
  Oversized = 'oversized'
}

// Define error type structure.
type FilePickerError =
  | {
      message: string;
      code: FilePickerErrorCode.Canceled;
    }
  | {
      message: string;
      code: FilePickerErrorCode.Oversized;
      maxSize: number;
    };

// Create an error proxy class based on error type.
const PickerError = createErrorProxyClass<FilePickerError>();

// Create an error factory and error comparer.
export const [createFilePickerError, isFilePickerError] =
  createErrorFactory(PickerError);

const someError = createFilePickerError({
  message: 'File is oversized',
  code: FilePickerErrorCode.Oversized,
  maxSize: 102400
});

console.log(isFilePickerError(someError)); // true
console.log(isFilePickerError(new Error())); // false
console.log(
  isFilePickerError({
    message: 'File is oversized',
    code: FilePickerErrorCode.Oversized,
    maxSize: 102400
  })
); // false
```
