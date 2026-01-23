import React, { useState } from 'react';
import InfiniteGateway from './components/InfiniteGateway';
import FileManager from './components/FileManager';
import SovereignCore from './components/SovereignCore';
import UniversalBanking from './components/UniversalBanking';
import SupremeSecurity from './components/SupremeSecurity';

export default function App() {
  const [activeView, setActiveView] = useState('GATEWAY');
  
  const renderView = () => {
    switch (activeView) {
      case 'GATEWAY': return <InfiniteGateway />;
      case 'FILES': return <FileManager />;
      case 'CORE': return <SovereignCore />;
      case 'BANKING': return <UniversalBanking />;
      case 'SECURITY': return <SupremeSecurity />;
      default: return <InfiniteGateway />;
    }
  };

  return <div className="bg-black min-h-screen text-white">{renderView()}</div>;
}
