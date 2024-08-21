import React, { useEffect, useState } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const [hasError, setHasError] = useState<boolean>(false);

  const handleError = (error: Error) => {
    setHasError(true);
    console.log(error);
  };

  useEffect(() => {
    window.addEventListener("unhandledrejection", handleError as any);

    return () => {
      window.removeEventListener("unhandledrejection", handleError as any);
    };
  }, []);

  if (hasError) return <h1>Something went wrong</h1>;
  return <>{children}</>;
};

export default ErrorBoundary;
