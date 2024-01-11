// App.tsx

import React from 'react';
import './App.css'; // スタイルシートのインポート

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to My Website</h1>
      </header>
      <main className="app-main">
        <p>This is a basic example website using React and TypeScript.</p>
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
