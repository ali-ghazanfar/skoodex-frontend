import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
  return (
    <div className="min-h-screen flex font-sans">
      {/* Left Side - Premium Aesthetic Background */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden items-center justify-center">
        {/* Abstract Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-white/5 rounded-full"></div>
        
        <div className="relative z-10 text-center px-12">
          <h1 className="text-6xl font-black text-white mb-6 tracking-tight">
            Skoodex
          </h1>
          <p className="text-blue-100/80 text-xl max-w-md mx-auto font-light leading-relaxed">
            The next generation of <span className="text-white font-medium">school management</span>. 
            Simple, powerful, and built for the future.
          </p>
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
