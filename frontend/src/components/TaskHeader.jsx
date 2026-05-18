export default function TaskHeader() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  return (
    <header className="flex items-end justify-between pb-4 select-none">
      <div className="flex flex-col space-y-1.5">
        <h1 className="text-4xl font-black tracking-[0.25em] text-white uppercase drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]">
          Task Management<span className="text-[#57ddff] tracking-normal">.</span>
        </h1>
        <p className="text-xs font-bold text-white/70 tracking-wider uppercase bg-white/10 backdrop-blur-md px-3 py-1 rounded-full w-fit border border-white/10 shadow-sm">
          ✨ {today}
        </p>
      </div>
      
    </header>
  )
}