import { ConvexAuthProvider } from '@convex-dev/auth/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConvexReactClient } from 'convex/react';
import App from './App';
import './index.css';
import { JotaiProvider } from './features/hooks/jotai-provider';

const url = import.meta.env.VITE_CONVEX_URL as string;
const convex = new ConvexReactClient(url);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConvexAuthProvider client={convex}>
      <JotaiProvider>
        <App />
      </JotaiProvider>
    </ConvexAuthProvider>
  </React.StrictMode>,
);
