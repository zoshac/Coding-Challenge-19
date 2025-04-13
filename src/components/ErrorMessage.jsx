const ErrorMessage = ({ message, onRetry }) => {
    return (
      <div className="error-container">
        <div className="error-icon">❌</div>
        <h2>Oops! Something went wrong</h2>
        <p className="error-message">{message}</p>
        <button className="btn btn-primary" onClick={onRetry}>
          Try Again
        </button>
      </div>
    );
  };
  
  export default ErrorMessage; 
  // error messaging creation 