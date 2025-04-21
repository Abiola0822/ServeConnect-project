import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-6 border-b border-gray-200">
        {/* Logo and Brand Name - Left Side */}
        <div className="flex items-center space-x-3">
          <img 
            src="/logo.svg" 
            alt="ServeConnect Logo" 
            className="h-10 w-10"
          />
          <span className="text-2xl font-bold text-purple-600">ServeConnect</span>
        </div>

        {/* Navigation Links - Right Side */}
        <div className="flex items-center space-x-8">
        <Link to="/home" className="text-purple-700 hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="text-purple-700 hover:text-blue-600 transition">About</Link>
          <Link to="/volunteer" className="text-purple-700 hover:text-blue-600 transition">Volunteer</Link>
          <Link to="/contact" className="text-purple-700 hover:text-blue-600 transition">Contact</Link>
          <Link 
            to="/login" 
            className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        {/* Left Column - Text Content */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-5xl md:text-5xl font-bold text-purple-800 leading-tight mb-6">
            DISCOVER OPPORTUNITIES TO MAKE A DIFFERENCE IN YOUR COMMUNITY
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Embark on a meaningful Journey: Explore various Volunteer Opportunities and make a lasting impact in your community. 
            From teaching underpriviledged children to caring for the elderly, ServeConnect will bridge the connection you desire. 
          </p>
          <div className="flex space-x-4">
            <Link 
              to="/signup" 
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="md:w-1/2">
          <img 
            src="/hero-image.png" 
            alt="People volunteering" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 p-6 border-t border-gray-200">
        <div className="container mx-auto text-center text-gray-600">
          © {new Date().getFullYear()} ServeConnect. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;