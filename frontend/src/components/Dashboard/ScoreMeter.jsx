const ScoreMeter = ({ score, verdict }) => {
  const getColors = () => {
    if (verdict?.includes("TRUE")) return { text: "text-emerald-400", bg: "bg-emerald-500/20", border: "border-emerald-500/50" };
    if (verdict?.includes("FALSE")) return { text: "text-rose-400", bg: "bg-rose-500/20", border: "border-rose-500/50" };
    return { text: "text-amber-400", bg: "bg-amber-500/20", border: "border-amber-500/50" };
  };

  const colors = getColors();

  return (
    <div className={`flex flex-col items-center justify-center p-6 rounded-2xl border ${colors.bg} ${colors.border}`}>
      <span className={`text-5xl font-extrabold ${colors.text}`}>{score}%</span>
      <span className="text-xs text-slate-300 uppercase tracking-wider mt-2 font-medium">Confidence Match</span>
      <div className={`mt-4 px-4 py-1.5 rounded-full text-sm font-bold border ${colors.border} ${colors.text} bg-[#0b1120]`}>
        {verdict}
      </div>
    </div>
  );
};

export default ScoreMeter;