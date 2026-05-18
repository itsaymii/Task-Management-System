export default function TaskForm({ newTask, onChangeNewTask, onAddTask, isSubmitting }) {
  const hasText = newTask.trim().length > 0;

  return (
    <form onSubmit={onAddTask} className="w-full">
      <div className="relative flex items-center bg-white/95 backdrop-blur-md rounded-2xl p-4 pl-6 border border-white transition-all duration-300 shadow-[0_15px_35px_rgba(30,27,75,0.06)] focus-within:shadow-[0_20px_40px_rgba(99,91,255,0.12)] focus-within:border-[#635bff]/40 group">
        
        <button
          type="submit"
          disabled={!hasText || isSubmitting}
          className={[
            "h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-4 transition-all duration-300 focus:outline-none",
            hasText 
              ? "bg-gradient-to-br from-[#635bff] to-[#0ea5e9] text-white shadow-md shadow-[#635bff]/30 scale-110 active:scale-95 cursor-pointer border-none" 
              : "border-2 border-slate-200 bg-transparent cursor-default group-focus-within:border-[#635bff]/60"
          ].join(' ')}
          title={hasText ? "Add task" : ""}
        >
          {hasText ? (
            <svg className="w-3.5 h-3.5 animate-fade-in" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          ) : (
            <span className="h-1.5 w-1.5 rounded-full bg-slate-200 group-focus-within:bg-[#635bff]/40 transition-colors" />
          )}
        </button>
        
        <input
          type="text"
          value={newTask}
          disabled={isSubmitting}
          onChange={(e) => onChangeNewTask(e.target.value)}
          placeholder="What's your next focus?..."
          className="w-full text-base font-semibold text-[#1e1b4b] placeholder-[#9394a5]/50 bg-transparent focus:outline-none disabled:opacity-50 tracking-wide"
        />
        
        <div className={`hidden sm:flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#9394a5]/40 transition-opacity duration-200 px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg mr-1 select-none pointer-events-none ${hasText ? 'opacity-100' : 'opacity-0'}`}>
          <span>Enter</span>
          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
        </div>

      </div>
    </form>
  )
}