'use client';

const Loading = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-red-500/10 to-red-500/50 flex items-start justify-center pt-2 sm:pt-6 md:pt-10 p-2 sm:p-4">
      
      {/* Main Skeleton / Loading Card */}
      <div className="flex flex-col border-2 border-red-500/60 p-3 sm:p-6 md:p-7 w-full max-w-[340px] sm:max-w-xl md:max-w-2xl lg:max-w-4xl rounded-2xl bg-black text-white shadow-[0_0_25px_rgba(255,0,0,0.3)] space-y-4 sm:space-y-5 transition-all duration-300">
        
        {/* Header Loading Section */}
        <div className="border-b border-red-500/30 pb-3 sm:pb-4 space-y-3 animate-drop-1">
          
          {/* Mobile Header Skeleton */}
          <div className="flex lg:hidden flex-col items-center space-y-3">
            <div className="flex justify-between items-center w-full">
              <div className="w-10 sm:w-12" />
              
              {/* Pulsing Title Placeholder */}
              <div className="h-4 sm:h-5 w-28 sm:w-36 bg-zinc-800/80 rounded-md animate-pulse" />
              
              {/* Badge Placeholder */}
              <div className="h-3 w-12 sm:w-16 bg-zinc-900 border border-red-500/30 rounded-full animate-pulse" />
            </div>

            {/* User Info Placeholder */}
            <div className="flex flex-col items-center space-y-1.5 w-full">
              <div className="h-3.5 sm:h-5 w-32 sm:w-40 bg-zinc-800 rounded animate-pulse" />
              <div className="h-2.5 sm:h-3 w-40 sm:w-48 bg-zinc-900 rounded animate-pulse" />
              <div className="h-2.5 sm:h-3 w-24 sm:w-28 bg-red-950/60 rounded animate-pulse" />
            </div>
          </div>

          {/* Desktop Header Skeleton */}
          <div className="hidden lg:flex justify-between items-center w-full">
            <div className="flex flex-col space-y-1.5">
              <div className="h-5 w-36 bg-zinc-800 rounded animate-pulse" />
              <div className="h-3.5 w-48 bg-zinc-900 rounded animate-pulse" />
              <div className="h-3.5 w-28 bg-red-950/60 rounded animate-pulse" />
            </div>

            <div className="h-8 w-44 bg-zinc-800 rounded-md animate-pulse" />

            <div className="h-7 w-24 bg-zinc-900 border border-red-500/30 rounded-full animate-pulse" />
          </div>

        </div>

        {/* Attendance History Skeleton Section */}
        <div className="space-y-2 animate-drop-2">
          <div className="h-3.5 w-28 bg-red-950/80 rounded animate-pulse" />
          
          <div className="flex flex-col border border-red-500/30 rounded-xl p-2.5 sm:p-4 bg-zinc-950/80 space-y-2">
            {/* Table Header Placeholder */}
            <div className="flex justify-between border-b border-zinc-800 pb-1.5 px-2">
              <div className="h-3 w-10 bg-zinc-800 rounded animate-pulse" />
              <div className="h-3 w-10 bg-zinc-800 rounded animate-pulse" />
              <div className="h-3 w-12 bg-zinc-800 rounded animate-pulse" />
            </div>

            {/* Skeleton Detail Row */}
            <div className="flex justify-between items-center bg-zinc-900/40 border border-red-500/20 rounded-lg p-2.5 sm:p-3">
              <div className="h-3 sm:h-4 w-14 sm:w-16 bg-zinc-800 rounded animate-pulse" />
              <div className="h-3 sm:h-4 w-16 sm:w-20 bg-zinc-800 rounded animate-pulse" />
              <div className="h-3 sm:h-4 w-16 sm:w-20 bg-emerald-950/60 border border-emerald-500/30 rounded animate-pulse" />
            </div>
          </div>
        </div>

        {/* Central Spinner & Status Indicator */}
        <div className="flex flex-col items-center justify-center py-4 space-y-3 animate-drop-3">
          <div className="relative flex items-center justify-center">
            {/* Outer Glowing Ring */}
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-red-500/30 border-t-red-600 animate-spin shadow-[0_0_15px_rgba(255,0,0,0.8)]" />
            {/* Inner Red Core */}
            <div className="absolute w-3 h-3 bg-red-600 rounded-full animate-ping" />
          </div>

          <p className="text-[10px] sm:text-xs text-gray-400 font-medium tracking-widest uppercase animate-pulse">
            Authenticating Dashboard...
          </p>
        </div>

        {/* Action Button Skeleton */}
        <div className="w-full flex justify-center pt-1 animate-drop-4">
          <div className="h-8 sm:h-9 w-32 sm:w-40 bg-zinc-900 border border-red-500/30 rounded-xl animate-pulse" />
        </div>

      </div>
    </div>
  );
};

export default Loading;