const apiRequestAction = (name) => ({
  success: `${name}_SUCCESS`,
  error: `${name}_ERROR`,
  pending: `${name}_PENDING`
});


export const incremntAction = () => ({
  type: "INCREMENT"
})

export const GET_EXAMPLE = apiRequestAction("GET_EXAMPLE");
export const getExampleAction = () => ({
  type: "API_REQUEST",
  payload: {
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos/1",
    nextActionType: GET_EXAMPLE
  },
  meta: {
    loaderId: 'getExampleId'
  }
});
