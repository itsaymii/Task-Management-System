export default function TaskList({
  loading,
  tasks,
  onToggleTaskCompletion,
  onDeleteTask,
  editingTaskId,
  setEditingTaskId,
  editTitle,
  setEditTitle,
  onUpdateTaskTitle,
}) {

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_20px_40px_rgba(30,27,75,0.03)] text-[#9394a5] border border-white">
        <svg className="h-8 w-8 animate-spin text-[#635bff]" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <p className="mt-4 text-xs font-bold tracking-widest uppercase opacity-60">Synchronizing...</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      {tasks.length === 0 ? (
        <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-white px-6 py-20 text-center text-base text-[#9394a5]/80 font-semibold shadow-[0_15px_35px_rgba(30,27,75,0.04)]">
          ✨ Clear space, clear mind. No tasks left!
        </div>
      ) : (
        <ul className="flex flex-col space-y-3.5">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={[
                "group flex items-center justify-between gap-4 px-6 py-5 rounded-2xl border transition-all duration-300",
                task.is_completed
                  ? "bg-white/60 backdrop-blur-sm border-slate-100/50 shadow-[0_4px_12px_rgba(30,27,75,0.01)] opacity-70 scale-[0.99]"
                  : "bg-white/95 backdrop-blur-md border-white shadow-[0_12px_30px_rgba(30,27,75,0.04)] hover:shadow-[0_16px_35px_rgba(99,91,255,0.08)] hover:border-[#635bff]/20 hover:scale-[1.01]"
              ].join(' ')}
            >
              <div className="flex items-center gap-4 min-w-0 flex-1">
                <button
                  type="button"
                  disabled={editingTaskId === task.id}
                  onClick={() => onToggleTaskCompletion(task.id, task.is_completed)}
                  className={[
                    "h-6 w-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 focus:outline-none shadow-sm",
                    task.is_completed
                      ? "border-none bg-gradient-to-br from-[#0ea5e9] to-[#635bff] text-white shadow-md shadow-[#635bff]/20 scale-105"
                      : "border-slate-200 bg-white group-hover:border-[#635bff]/60 group-hover:scale-110 active:scale-90 cursor-pointer"
                  ].join(' ')}
                >
                  {task.is_completed && (
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>

                {editingTaskId === task.id ? (
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && onUpdateTaskTitle(task.id)}
                    className="w-full text-base font-semibold px-4 py-1.5 rounded-xl border border-slate-200 text-[#1e1b4b] bg-white focus:outline-none focus:border-[#635bff]/40 focus:ring-4 focus:ring-[#635bff]/5 transition-all"
                    autoFocus
                  />
                ) : (
                  <span
                    onClick={() => !task.is_completed && onToggleTaskCompletion(task.id, task.is_completed)}
                    className={[
                      'text-base cursor-pointer transition-all duration-200 truncate select-none font-semibold tracking-wide',
                      task.is_completed 
                        ? 'line-through text-[#9394a5]/50 font-medium' 
                        : 'text-[#1e1b4b] group-hover:text-[#635bff]',
                    ].join(' ')}
                    title={task.title}
                  >
                    {task.title}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1 flex-shrink-0">
                {editingTaskId === task.id ? (
                  <>
                    <button
                      onClick={() => onUpdateTaskTitle(task.id)}
                      className="p-2 rounded-xl text-emerald-500 hover:bg-emerald-50 active:scale-95 transition-all"
                      title="Save"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setEditingTaskId(null)}
                      className="p-2 rounded-xl text-slate-400 hover:bg-slate-100 active:scale-95 transition-all"
                      title="Cancel"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setEditingTaskId(task.id)
                        setEditTitle(task.title)
                      }}
                      className="opacity-0 group-hover:opacity-100 p-2 rounded-xl text-[#9394a5]/70 hover:text-[#1e1b4b] hover:bg-slate-100/80 active:scale-95 transition-all duration-200"
                      title="Edit"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => onDeleteTask(task.id)}
                      className="opacity-0 group-hover:opacity-100 p-2 rounded-xl text-[#9394a5]/70 hover:text-rose-500 hover:bg-rose-50 active:scale-95 transition-all duration-200"
                      title="Delete"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}