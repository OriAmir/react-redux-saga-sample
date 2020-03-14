import React from 'react';
import ReduxToastr from 'react-redux-toastr';

export const Toast = () => {
  return (
    <ReduxToastr
      timeOut={5000}
      newestOnTop={true}
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
    />
  );
};

export default Toast;
