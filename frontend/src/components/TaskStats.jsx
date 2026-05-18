export default function TaskStats({ tasks }) {
  if (!tasks || tasks.length === 0) return null

  const totalTasks = tasks.length
  const completedCount = tasks.filter((t) => t.is_completed).length
  const completionPercentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0

  return (
    <section className="w-full grid grid-cols-3 gap-3.5 select-none animate-fade-in">
      
      <div className="rounded-2xl bg-white/95 backdrop-blur-md p-4 border border-white flex flex-col justify-between shadow-[0_10px_25px_rgba(30,27,75,0.03)] hover:shadow-[0_15px_30px_rgba(30,27,75,0.06)] hover:scale-[1.02] transition-all duration-300">
        <h2 className="text-[10px] font-bold uppercase tracking-wider text-[#9394a5]">Total</h2>
        <p className="text-3xl font-black text-[#1e1b4b] mt-1.5 tracking-tight">
          {totalTasks}
        </p>
      </div>

      <div className="rounded-2xl bg-white/95 backdrop-blur-md p-4 border border-white flex flex-col justify-between shadow-[0_10px_25px_rgba(30,27,75,0.03)] hover:shadow-[0_15px_30px_rgba(30,27,75,0.06)] hover:scale-[1.02] transition-all duration-300">
        <h2 className="text-[10px] font-bold uppercase tracking-wider text-[#9394a5]">Done</h2>
        <p className="text-3xl font-black bg-gradient-to-br from-[#0ea5e9] to-[#635bff] bg-clip-text text-transparent mt-1.5 tracking-tight">
          {completedCount}
        </p>
      </div>

      <div className="rounded-2xl bg-white/95 backdrop-blur-md p-4 border border-white flex flex-col justify-between shadow-[0_10px_25px_rgba(30,27,75,0.03)] hover:shadow-[0_15px_30px_rgba(30,27,75,0.06)] hover:scale-[1.02] transition-all duration-300">
        <div className="flex items-center justify-between">
          <h2 className="text-[10px] font-bold uppercase tracking-wider text-[#635bff]">Progress</h2>
          <span className="text-xs font-black text-[#635bff] bg-[#635bff]/5 px-1.5 py-0.5 rounded-md">
            {completionPercentage}%
          </span>
        </div>
        
        <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden mt-3 relative border border-slate-50 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#635bff] rounded-full transition-all duration-750 ease-out shadow-[0_1px_6px_rgba(99,91,255,0.2)]"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

    </section>
  )
}