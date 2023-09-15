/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { ErrorBoundary } from 'react-error-boundary';
import { Spinner } from 'react-bootstrap';
 import FallbackPage from 'Components/ErrorBoundary';
// import FallbackLoading from 'Utils/FalbackLoader';

// import Skeleton, { CommunityBannerSkeleton } from 'Components/Global/Skeleton';

/**
 * @param {any} children Routes Elements
 * @returns {any} Fallback
 */

function AppSuspense({ children }) {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            color: 'white',
            minHeight: '100vh',
          }}
        >
          <Spinner animation='border' />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={FallbackPage} onError={(e) => console.error(e)}>
        {children}
      </ErrorBoundary>
    </Suspense>
  );
}

AppSuspense.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppSuspense;
