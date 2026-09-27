export interface IApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data: T;
}

export const successResponse = <T>(
  data: T,
  message: string = "Success"
): IApiResponse<T> => ({
  success: true,
  message,
  data,
});