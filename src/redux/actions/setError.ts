export type setErrorType = ReturnType<typeof setError>;

export const setError = (error: string) => {
  return {
    type: "SET_ERROR",
    payload: error,
  } as const;
};
