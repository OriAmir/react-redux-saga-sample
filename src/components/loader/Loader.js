import React from 'react';
import { useLoading } from '../../hooks/userLoading';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const LoaderContainer = styled.div`
  position: relative;
  min-height: 100%;
  min-width: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  background-color: rgba(250, 250, 250, 0.9);
  z-index: 1 !important;
  transition: all 0.15s linear;
  overflow: hidden;
  ${props =>
    !props.show &&
    css`
      display: none;
    `}
`;

export const Loader = ({ children, ids, isLoading = false, className }) => {
  const [checkIsLoading] = useLoading();
  return (
    <LoaderContainer className={className}>
      <Overlay show={isLoading || checkIsLoading(ids)} className="loaderOverlay">
        <Spinner className="loaderSpinner" />
      </Overlay>
      {children}
    </LoaderContainer>
  );
};

Loader.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  ids: PropTypes.array,
  className: PropTypes.string
};

export default Loader;
