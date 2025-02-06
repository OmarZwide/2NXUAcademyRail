import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

export default function DeploymentTest() {
  const [apiStatus, setApiStatus] = useState<{success?: boolean; message?: string; timestamp?: string} | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [envInfo, setEnvInfo] = useState<{
    vercel?: boolean; 
    env?: string; 
    region?: string;
    database?: boolean;
    stripe?: boolean;
    email?: boolean;
  } | null>(null);

  useEffect(() => {
    // Clear any previous errors
    setError(null);

    // Test basic API endpoint
    fetch('/api/test')
      .then(res => res.json())
      .then(data => setApiStatus(data))
      .catch(err => setError(err.message));

    // Test health check endpoint with all integrations
    fetch('/api/healthz')
      .then(res => res.json())
      .then(data => {
        setEnvInfo({
          vercel: data.deployment?.vercel || false,
          env: data.deployment?.environment || 'local',
          region: data.deployment?.region || 'local',
          database: data.integrations?.database || false,
          stripe: data.integrations?.stripe || false,
          email: data.integrations?.email || false
        });
      })
      .catch(err => {
        console.error('Health check error:', err);
        setError(prev => prev ? `${prev}, Health check failed` : 'Health check failed');
      });
  }, []);

  return (
    <div className="min-h-screen py-24">
      <div className="container px-4">
        <h1 className="text-4xl font-bold mb-8">Deployment Test Page</h1>
        <p className="text-muted-foreground mb-8">
          This page verifies your deployment configuration and integration status.
        </p>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Frontend Status</h2>
            <p className="text-green-600">✓ React application is running</p>
            {envInfo && (
              <div className="mt-4 space-y-2">
                <p className="text-muted-foreground">Environment: {envInfo.env}</p>
                {envInfo.vercel && (
                  <>
                    <p className="text-green-600">✓ Deployed on Vercel</p>
                    <p className="text-muted-foreground">Region: {envInfo.region}</p>
                  </>
                )}
                <div className="mt-4">
                  <p className="font-medium">Integration Status:</p>
                  <ul className="list-none pl-5 mt-2 space-y-2">
                    <li className={envInfo.database ? "text-green-600" : "text-red-600"}>
                      {envInfo.database ? "✓" : "✗"} Database Connection
                    </li>
                    <li className={envInfo.stripe ? "text-green-600" : "text-red-600"}>
                      {envInfo.stripe ? "✓" : "✗"} Stripe Integration
                    </li>
                    <li className={envInfo.email ? "text-green-600" : "text-red-600"}>
                      {envInfo.email ? "✓" : "✗"} Email Service
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">API Status</h2>
            {error ? (
              <div className="text-red-600 space-y-2">
                <p>✗ API Error:</p>
                <p className="text-sm">{error}</p>
              </div>
            ) : !apiStatus ? (
              <p className="text-yellow-600">Loading API status...</p>
            ) : (
              <div className="space-y-2">
                <p className="text-green-600">✓ API is responding</p>
                <p className="text-muted-foreground">Message: {apiStatus.message}</p>
                <p className="text-muted-foreground">Timestamp: {apiStatus.timestamp}</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}