import React from 'react';
import { Spinner } from 'gestalt';
import CenterLayout from '../../layout/CenterLayout/CenterLayout';

interface Props {
  loading: boolean;
}

const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
  ({ loading, ...props }: Props & P) => (
    loading
      ? <CenterLayout><Spinner show={true} accessibilityLabel='loading' /></CenterLayout>
      : <Component {...props as P} />
  );


export default withLoading;