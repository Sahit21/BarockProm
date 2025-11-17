import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Etwas ist schiefgelaufen</h1>
            <p className="text-gray-300 mb-6">Bitte lade die Seite neu.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
            >
              Seite neu laden
            </button>
            {this.state.error && (
              <details className="mt-6 text-left max-w-2xl mx-auto">
                <summary className="cursor-pointer text-gray-400 mb-2">Fehlerdetails</summary>
                <pre className="bg-gray-800 p-4 rounded text-sm text-red-400 overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

