import React, { ErrorInfo, PropsWithChildren } from 'react';

interface IErrorState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component {
  state: IErrorState = {
    hasError: false,
  }

  constructor(props: PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false } as IErrorState;
  }

  static getDrivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: ErrorInfo) {
    console.log({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (<h1>Something went wrong</h1>);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
