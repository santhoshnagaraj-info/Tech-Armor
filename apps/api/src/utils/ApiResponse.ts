

export const successResponse = (
  data: unknown,
  message = "Success"
) => ({
  success: true,
  message,
  data,
});