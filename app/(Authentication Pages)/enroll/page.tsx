'use client';

const roles = [
  "Product Manager",
  "Engineer",
  "Operation Manager",
  "HR",
  "Accountant",
  "Sales Manager"
];

const Enroll = () => {
  return (
    <div className="min-h-screen w-full bg-black flex items-start justify-center pt-2 sm:pt-6 md:pt-10 p-2 sm:p-4">
      
      {/* Main Form Card */}
      <div className="bg-gradient-to-b from-black via-red-400/10 to-red-400/50 border-2 border-red-500 p-3 sm:p-6 w-full max-w-[280px] sm:max-w-md mx-auto rounded-xl bg-black text-white shadow-lg space-y-2.5 sm:space-y-4 transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,0,0,0.9)]">
        
        {/* Title */}
        <h1 className="text-base sm:text-xl text-gray-200 font-bold font-abrilfatface animate-drop-1 text-center sm:text-left">
          Enroll
        </h1>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-2.5 sm:space-y-4">

          {/* Name Field */}
          <div className="animate-drop-2">
            <label className="block text-[10px] sm:text-xs font-semibold text-gray-200 mb-0.5 sm:mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="E.g John Ugwumba"
              className="w-full px-2.5 py-1 sm:px-3 sm:py-2 text-[11px] sm:text-sm border border-red-300 rounded-lg text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_12px_rgba(255,0,0,0.5)]"
            />
          </div>
          
          {/* Email Field */}
          <div className="animate-drop-2">
            <label className="block text-[10px] sm:text-xs font-semibold text-gray-200 mb-0.5 sm:mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="E.g johnugwumba5118@gmail.com"
              className="w-full px-2.5 py-1 sm:px-3 sm:py-2 text-[11px] sm:text-sm border border-red-300 rounded-lg text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_12px_rgba(255,0,0,0.5)]"
            />
          </div>

          {/* Password Field */}
          <div className="animate-drop-3">
            <label className="block text-[10px] sm:text-xs font-semibold text-gray-200 mb-0.5 sm:mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-2.5 py-1 sm:px-3 sm:py-2 text-[11px] sm:text-sm border border-red-300 rounded-lg text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_12px_rgba(255,0,0,0.5)]"
            />
          </div>

          {/* Role Dropdown */}
          <div className="animate-drop-2">
            <label className="block text-[10px] sm:text-xs font-semibold text-gray-200 mb-0.5 sm:mb-1">
              Role
            </label>
            <select
              className="w-full px-2.5 py-1 sm:px-3 sm:py-2 text-[11px] sm:text-sm border border-red-300 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_12px_rgba(255,0,0,0.5)] cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>
                Select your role
              </option>
              {roles.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end text-[10px] sm:text-xs animate-drop-4">
            <a href="#" className="text-blue-400 hover:underline font-medium">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <div className="animate-drop-5">
            <button
              type="submit"
              className="w-full py-1.5 sm:py-2.5 px-3 text-xs sm:text-sm bg-red-600 text-white font-semibold rounded-full transition-all duration-300 hover:bg-red-500 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,0,0,1)] cursor-pointer"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Enroll;