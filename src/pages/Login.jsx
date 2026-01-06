import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
  return (
    <div className="min-h-screen flex font-sans">
      {/* Left Side - Premium Aesthetic Background */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden items-center justify-center">
        {/* Sophisticated Dotted Grid */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Large Architectural Shapes */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] border border-white/[0.05] rotate-[15deg] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] border border-white/[0.03] -rotate-[10deg] pointer-events-none"></div>
        
        {/* Decorative UI Markers */}
        <div className="absolute top-1/2 left-10 w-12 h-[1px] bg-white/20"></div>
        <div className="absolute top-1/2 left-10 w-[1px] h-12 bg-white/20"></div>
        <div className="absolute bottom-20 right-20 flex space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
          ))}
        </div>

        {/* Abstract Geometric Composition */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-[800px] h-[800px] border-[0.5px] border-white/20 rounded-full scale-150"></div>
          <div className="absolute w-[600px] h-[600px] border-[0.5px] border-white/10 rounded-full"></div>
          <div className="absolute w-[400px] h-[400px] border-[0.5px] border-white/5 rounded-full"></div>
        </div>
        
        <div className="relative z-10 px-20 text-center w-full max-w-3xl">
          <div className="mb-12">
            <h1 className="text-8xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
              Skoodex<span className="text-white/20">.</span>
            </h1>
          </div>
          
          <p className="text-white/90 text-3xl font-light leading-tight tracking-tight max-w-xl mx-auto">
            Empowering the <span className="text-white font-semibold italic">future of education</span> through intelligent management.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">
              Let’s signed in
            </h2>
            <p className="text-gray-500">
              Enter your credentials to access your school.
            </p>
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
