import { AxiosError } from 'axios';

export class CustomError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  public static fromAxiosError(error: unknown) {
    const err = error as AxiosError;

    if (!err.isAxiosError) {
      return new CustomError(
        'Sorry something went wrong from our side, please try again'
      );
    }
    if (err.code === 'ERR_NETWORK') {
      return new CustomError(
        'Sorry something went wrong from our side, please try again'
      );
    }
    if (err.response) {
      switch (err.response.status) {
        case 400:
          return new CustomError('Bad Request');

        case 401:
          return new CustomError(
            'Your session has expired. Please sign in again!'
          );

        case 404:
          return new CustomError('Requested resource not found!');

        case 500:
          return new CustomError(
            'Sorry something went wrong from our side, please try again'
          );
        default:
          return new CustomError(
            'Sorry something went wrong from our side, please try again'
          );
      }
    }
  }
}
