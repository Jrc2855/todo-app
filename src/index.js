import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import SettingsProvider from './Components/Todo/Context/Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </MantineProvider>
  </React.StrictMode>

);