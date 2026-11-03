export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      {/* Skeleton Loading Card matching the Check-In form dimensions */}
      <div className="border-2 border-red-500 p-4 sm:p-6 w-full max-w-[280px] sm:max-w-md mx-auto rounded-xl bg-black text-white shadow-[0_0_40px_rgba(255,0,0,0.5)] animate-pulse">
        
        {/* Title Placeholder */}
        <div className="h-6 sm:h-7 w-28 bg-red-950/70 rounded mb-3 sm:mb-4"></div>

        <div className="space-y-3 sm:space-y-4">
          
          {/* Email Field Skeleton */}
          <div>
            <div className="h-3 w-10 bg-red-950/60 rounded mb-1"></div>
            <div className="h-9 sm:h-10 w-full bg-zinc-900 border border-red-900/50 rounded-lg"></div>
          </div>

          {/* Password Field Skeleton */}
          <div>
            <div className="h-3 w-16 bg-red-950/60 rounded mb-1"></div>
            <div className="h-9 sm:h-10 w-full bg-zinc-900 border border-red-900/50 rounded-lg"></div>
          </div>

          {/* Forgot Password Link Placeholder */}
          <div className="flex justify-end">
            <div className="h-3 w-24 bg-red-950/40 rounded"></div>
          </div>

          {/* Submit Button Placeholder */}
          <div>
            <div className="h-9 sm:h-10 w-full bg-red-950/80 rounded-full"></div>
          </div>

        </div>
      </div>
    </div>
  );
}