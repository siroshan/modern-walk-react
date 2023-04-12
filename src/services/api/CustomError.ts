import { AxiosError } from 'axios';

enum ErrorMessages{
  badRequest='Invalid Request! pleach check the inputs.',
  unauthorized= 'Your session has expired. Please sign in again!',
  notFound='Requested resource not found!',
  serverError='Sorry something went wrong from our side, please try again.',
  default='Sorry something went wrong from our side, please try again.'
}

export class CustomError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  public static fromAxiosError(error: unknown) {
    const err = error as AxiosError;

    if (!err.isAxiosError) {
      return new CustomError(
        ErrorMessages.default
      );
    }
    if (err.code === 'ERR_NETWORK') {
      return new CustomError(
        ErrorMessages.default
      );
    }
    if (err.response) {
      switch (err.response.status) {
        case 400:
          return new CustomError(ErrorMessages.badRequest);

        case 401:
          return new CustomError(
            ErrorMessages.unauthorized
          );

        case 404:
          return new CustomError(ErrorMessages.notFound);

        case 500:
          return new CustomError(
            ErrorMessages.serverError
          );
        default:
          return new CustomError(
            ErrorMessages.default
          );
      }
    }
  }
}
