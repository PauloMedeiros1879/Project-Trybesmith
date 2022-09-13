export default class CustomError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);

    this.code = code;
  }
}