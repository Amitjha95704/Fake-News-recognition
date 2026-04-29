import { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InputForm = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setIsLoading(true);
    setTimeout(() => {
      navigate('/verify', { state: { queryToVerify: query } });
    }, 400); // Small delay for smooth animation
  };

  return (
    <form onSubmit={handleSearch} className="w-full flex items-center bg-[#111827]/80 border border-blue-800/60 rounded-xl p-2 shadow-2xl backdrop-blur-md animate-fade-in-up transition-all hover:border-blue-600">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Paste a claim or headline here..."
        className="w-full bg-transparent border-none text-white placeholder-blue-400 focus:ring-0 px-4 py-3 outline-none"
        autoFocus
      />
      <button 
        type="submit" 
        disabled={isLoading || !query.trim()} 
        className="ml-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 disabled:opacity-50"
      >
        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
        Verify
      </button>
    </form>
  );
};

export default InputForm;