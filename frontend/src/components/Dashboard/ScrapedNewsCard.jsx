import { Globe, ExternalLink } from 'lucide-react';

const ScrapedNewsCard = ({ evidence }) => {
  return (
    <a 
      href={evidence.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block bg-[#111827]/80 border border-blue-800/50 rounded-xl p-5 hover:bg-blue-900/30 hover:border-cyan-500/50 transition-all group"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-bold uppercase text-blue-400 tracking-wider">Live Web Scrape</span>
        </div>
        <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
      </div>
      <p className="text-sm text-white font-medium line-clamp-2 mb-3 group-hover:text-cyan-100">{evidence.title}</p>
      <span className="text-xs font-semibold text-slate-300 bg-slate-800 px-2 py-1 rounded">
        {evidence.sourceName}
      </span>
    </a>
  );
};

export default ScrapedNewsCard;