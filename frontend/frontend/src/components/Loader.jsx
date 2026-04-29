import { Database, Globe } from 'lucide-react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] animate-fade-in-up">
      <div className="relative flex items-center justify-center mb-8">
        <div className="absolute w-20 h-20 border-4 border-blue-900/50 rounded-full"></div>
        <div className="absolute w-20 h-20 border-4 border-cyan-400 rounded-full border-t-transparent animate-spin"></div>
        <Database className="w-6 h-6 text-cyan-400 animate-pulse" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Analyzing Claim...</h3>
      <div className="flex flex-col items-center gap-2 text-sm text-blue-400">
        <span className="flex items-center gap-2"><Database className="w-4 h-4" /> Querying Local MySQL Truth Vault</span>
        <span className="flex items-center gap-2 animate-pulse-fast"><Globe className="w-4 h-4" /> Scraping Live Web Evidence via Jsoup</span>
      </div>
    </div>
  );
};

export default Loader;