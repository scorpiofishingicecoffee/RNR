class ErrorBoundary extends React.Component {
state = {
          error: ''
}

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error: error.toString() };
  }

  render() {
const { error }
}

export default ErrorBoundary;
