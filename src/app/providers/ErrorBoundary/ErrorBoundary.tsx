import React, { ErrorInfo, Suspense } from 'react';
import { PageError } from 'widgets/PageError/PageError';

type ErrorBoundaryProps = {
    children: React.ReactNode;
}

type ErrorBoundaryState = {
    hasError: boolean;
}

export class ErrorBoundary
  extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Suspense fallback="">
          <PageError />
        </Suspense>
      );
    }

    return children;
  }
}

// export default withTranslation(){ErrorBoundary}; // i18n for class Component