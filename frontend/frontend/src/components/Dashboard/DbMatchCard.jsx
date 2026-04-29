import { Database, CheckCircle2, XCircle } from 'lucide-react';

const DbMatchCard = ({ evidence }) => {
  const isSupport = evidence.stance.includes("SUPPORT");

  return (
    <div className="bg-[#111827]/80 border border-blue-800/50 rounded-xl p-5 hover:border-blue-500/50 transition-colors">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-cyan-500" />
          <span className="text-xs font-bold uppercase text-cyan-500 tracking-wider">Local DB Match</span>
        </div>
        {isSupport ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <XCircle className="w-5 h-5 text-rose-500" />}
      </div>
      <p className="text-sm text-white font-medium mb-3">"{evidence.title}"</p>
      <span className="text-xs font-semibold text-blue-300 bg-blue-900/50 px-2 py-1 rounded">
        Source: {evidence.sourceName}
      </span>
    </div>
  );
};

export default DbMatchCard;