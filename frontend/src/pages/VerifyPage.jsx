// import { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ArrowLeft, AlertTriangle } from 'lucide-react';

// import Loader from '../components/Loader';
// import ScoreMeter from '../components/Dashboard/ScoreMeter';
// import DbMatchCard from '../components/Dashboard/DbMatchCard';
// import ScrapedNewsCard from '../components/Dashboard/ScrapedNewsCard';

// const VerifyPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const queryToVerify = location.state?.queryToVerify || '';

//   const [isLoading, setIsLoading] = useState(true);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (!queryToVerify) {
//       navigate('/');
//       return;
//     }

//     const fetchVerification = async () => {
//       try {
//         const response = await axios.post('http://localhost:8080/api/v1/verify', {
//           content: queryToVerify,
//         });
//         setResult(response.data);
//         setIsLoading(false);
//       } catch (err) {
//         console.error("Backend Error:", err);
//         setError("Could not connect to TruthLens Engine. Is Spring Boot running on port 8080?");
//         setIsLoading(false);
//       }
//     };

//     fetchVerification();
//   }, [queryToVerify, navigate]);

//   if (isLoading) return <Loader />;

//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[70vh] text-center animate-fade-in-up">
//         <AlertTriangle className="w-12 h-12 text-rose-500 mb-4" />
//         <h2 className="text-rose-400 text-2xl font-bold mb-2">Connection Failed</h2>
//         <p className="text-slate-400 mb-6">{error}</p>
//         <button onClick={() => navigate('/')} className="px-6 py-2 bg-slate-800 text-white hover:bg-slate-700 rounded-lg transition-colors">Go Back</button>
//       </div>
//     );
//   }

//   // Separate evidence into Local DB matches and Live Web Scrapes
//   const allEvidence = result.claims[0]?.evidence || [];
//   const dbEvidence = allEvidence.filter(e => e.url === "#" || e.sourceName.includes("DB"));
//   const webEvidence = allEvidence.filter(e => e.url !== "#" && !e.sourceName.includes("DB"));

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10 animate-fade-in-up">
//       <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8 font-medium">
//         <ArrowLeft className="w-5 h-5" /> Back to Scanner
//       </button>

//       {/* Top Section: Score & Explanation */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//         <div className="md:col-span-1">
//           <ScoreMeter score={result.confidenceScore} verdict={result.verdict} />
//         </div>
//         <div className="md:col-span-2 bg-[#111827]/60 border border-blue-900/50 rounded-2xl p-6 flex flex-col justify-center">
//           <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Analyzed Claim</h3>
//           <p className="text-lg text-white font-medium mb-4">"{queryToVerify}"</p>
//           <div className="h-px w-full bg-blue-900/50 mb-4"></div>
//           <p className="text-blue-200/80 leading-relaxed">{result.explanation}</p>
//         </div>
//       </div>

//       {/* Evidence Sections */}
//       <div className="space-y-8">
//         {dbEvidence.length > 0 && (
//           <div>
//             <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
//               <span className="bg-cyan-500 w-2 h-6 rounded-full"></span> Historical DB Matches
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {dbEvidence.map((ev, idx) => <DbMatchCard key={idx} evidence={ev} />)}
//             </div>
//           </div>
//         )}

//         {webEvidence.length > 0 && (
//           <div>
//             <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
//               <span className="bg-blue-500 w-2 h-6 rounded-full"></span> Live Web Scraper Results
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {webEvidence.map((ev, idx) => <ScrapedNewsCard key={idx} evidence={ev} />)}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VerifyPage;

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, AlertTriangle, Sparkles } from 'lucide-react';

import Loader from '../components/Loader';
import ScoreMeter from '../components/Dashboard/ScoreMeter';
import DbMatchCard from '../components/Dashboard/DbMatchCard';
import ScrapedNewsCard from '../components/Dashboard/ScrapedNewsCard';

const VerifyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryToVerify = location.state?.queryToVerify || '';

  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!queryToVerify) {
      navigate('/');
      return;
    }

    const fetchVerification = async () => {
      try {
        const response = await axios.post('http://localhost:8080/api/v1/verify', {
          content: queryToVerify,
        });
        setResult(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error("Backend Error:", err);
        setError("Could not connect to TruthLens Engine. Is Spring Boot running on port 8080?");
        setIsLoading(false);
      }
    };

    fetchVerification();
  }, [queryToVerify, navigate]);

  if (isLoading) return <Loader />;

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center animate-fade-in-up">
        <AlertTriangle className="w-12 h-12 text-rose-500 mb-4" />
        <h2 className="text-rose-400 text-2xl font-bold mb-2">Connection Failed</h2>
        <p className="text-slate-400 mb-6">{error}</p>
        <button onClick={() => navigate('/')} className="px-6 py-2 bg-slate-800 text-white hover:bg-slate-700 rounded-lg transition-colors">Go Back</button>
      </div>
    );
  }

  // Separate evidence into Local DB matches and Live Web Scrapes
  const allEvidence = result.claims[0]?.evidence || [];
  const dbEvidence = allEvidence.filter(e => e.url === "#" || e.sourceName.includes("DB"));
  const webEvidence = allEvidence.filter(e => e.url !== "#" && !e.sourceName.includes("DB"));

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-fade-in-up">
      <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8 font-medium">
        <ArrowLeft className="w-5 h-5" /> Back to Scanner
      </button>

      {/* Top Section: Score & The New AI Explanation Box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        
        {/* Score Meter Engine */}
        <div className="md:col-span-1">
          <ScoreMeter score={result.confidenceScore} verdict={result.verdict} />
        </div>
        
        {/* The Premium AI Analysis Box */}
        <div className="md:col-span-2 relative bg-gradient-to-br from-blue-900/40 to-[#111827]/80 border border-cyan-900/50 rounded-2xl p-6 flex flex-col justify-center overflow-hidden group hover:border-cyan-500/50 transition-colors duration-500 shadow-xl">
          
          {/* Background Glow Effect */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-all"></div>
          
          <div className="flex items-center gap-2 mb-3 relative z-10">
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider">AI Analysis & Explanation</h3>
          </div>
          
          <p className="text-lg text-white font-medium mb-3 italic relative z-10">"{queryToVerify}"</p>
          <div className="h-px w-full bg-gradient-to-r from-cyan-900/50 to-transparent mb-4 relative z-10"></div>
          
          <p className="text-blue-100 leading-relaxed font-light text-base md:text-lg relative z-10">
            {result.explanation}
          </p>
        </div>

      </div>

      {/* Evidence Sections */}
      <div className="space-y-8">
        {dbEvidence.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="bg-cyan-500 w-2 h-6 rounded-full"></span> Historical DB Matches
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dbEvidence.map((ev, idx) => <DbMatchCard key={idx} evidence={ev} />)}
            </div>
          </div>
        )}

        {webEvidence.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="bg-blue-500 w-2 h-6 rounded-full"></span> Live Web Scraper Results
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {webEvidence.map((ev, idx) => <ScrapedNewsCard key={idx} evidence={ev} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyPage;