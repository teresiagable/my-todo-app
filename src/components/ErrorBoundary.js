import React, { Component } from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError');
    return { hasError: true, errorMessage: error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, errorMessage: error });

    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);

    console.log('Error componentDidCatch:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h4>
          {'My error boundary caught this: ' +
            this.state.errorMessage.toString()}
        </h4>
      );
    }
    //här renderas en sida ut som inte har drabbats av fel
    return this.props.children;
  }
}

export default ErrorBoundary;
