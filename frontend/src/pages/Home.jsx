import { useState } from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';
import InputForm from '../components/InputForm';

const Home = () => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] px-4 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-200 text-sm font-medium mb-8">
        <ShieldCheck className="w-4 h-4 text-cyan-400" />
        <span>No-API Local Verification Engine</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-4xl">
        Verify News with <span className="text-cyan-400">Evidence</span>,<br /> Not Emotion.
      </h1>

      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
        TruthLens analyzes claims, queries our local Kaggle dataset, and scrapes live news to generate explainable verdicts in seconds.
      </p>

      <div className="flex flex-col items-center w-full max-w-2xl min-h-[60px]">
        {!showInput ? (
          <div className="flex gap-4 animate-fade-in-up">
            <button 
              onClick={() => setShowInput(true)}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-900/50"
            >
              Try It Now
            </button>
            <button className="px-8 py-3 border border-slate-700 text-slate-300 hover:bg-slate-800 rounded-xl font-bold transition-all flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> How It Works
            </button>
          </div>
        ) : (
          <InputForm />
        )}
      </div>

      <p className="mt-16 text-sm text-slate-500 font-medium tracking-wide uppercase">
        Always verify before you amplify.
      </p>
    </div>
  );
};

export default Home;