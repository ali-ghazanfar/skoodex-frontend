import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
  return (
    <div className="min-h-screen flex font-sans">
      {/* Left Side - Premium Aesthetic Background */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden items-center justify-center">
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>

        {/* White Geometric Shapes */}
        <div className="absolute top-[-5%] right-[-5%] w-64 h-64 border-[1px] border-white/10 rotate-12"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 border-[1px] border-white/10 -rotate-12"></div>
        <div className="absolute top-1/2 right-10 w-40 h-[1px] bg-white/10"></div>
        <div className="absolute top-1/2 right-10 h-40 w-[1px] bg-white/10"></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-white/10 rounded-full"></div>
        
        {/* Abstract White Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-16 text-left w-full max-w-2xl">
          <h1 className="text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            Skoodex<span className="text-white/30">.</span>
          </h1>
          
          <div className="space-y-6">
            <p className="text-white/90 text-2xl font-light leading-snug">
              The next generation of <span className="text-white font-semibold border-b border-white/30">school management</span>. 
            </p>
            <p className="text-white/50 text-lg max-w-md font-normal leading-relaxed">
              Experience a seamless, powerful, and intuitive interface designed to empower educators and administrators worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Login</h2>
            <p className="text-gray-500">Enter your credentials to access your account</p>
          </div>

          <form className="space-y-6">
            <Input
              label="Email Address"
              id="email"
              type="email"
              placeholder="name@school.com"
              required
            />

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="password">
                  Password
                </label>
                <a href="#" className="text-sm font-semibold text-primary hover:underline">
                  Forgot Password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>

            <Button type="submit" className="mt-4">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
