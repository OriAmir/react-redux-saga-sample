const apiRequestAction = (name) => ({
  success: `${name}_SUCCESS`,
  error: `${name}_ERROR`,
  pending: `${name}_PENDING`
});

export const GET_EXAMPLE = apiRequestAction("GET_EXAMPLE");
