import { useSelector, shallowEqual } from 'react-redux';

export const useLoading = () => {
  const loaders = useSelector(({ loading }) => loading, shallowEqual);

  const checkIsLoading = ids => {
    let isLoading = false;
    if (ids && ids.length > 0) {
      isLoading = loaders.filter(item => ids.indexOf(item) > -1).length > 0;
    }
    return isLoading;
  };

  return [checkIsLoading];
};
