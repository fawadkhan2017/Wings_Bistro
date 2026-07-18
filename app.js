// Important: DO NOT remove this `ErrorBoundary` component.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-dark)] text-white">
          <div className="text-center p-8 bg-[var(--surface)] rounded-2xl border border-gray-800">
            <h1 className="text-2xl font-bold mb-4 text-[var(--primary)]">Something went wrong</h1>
            <p className="text-gray-400 mb-6">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[var(--primary)] text-black px-6 py-2 rounded-full font-bold uppercase tracking-wider"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div className="font-sans antialiased text-white selection:bg-[var(--primary)] selection:text-black overflow-x-hidden" data-name="app" data-file="app.js">
        <Header />
        <main>
            <Hero />
            <Features />
          <Menu />
          <Story />
          <Catering />
          <Franchise />
          <Testimonials />
          <Newsletter />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);