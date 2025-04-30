
import { Link } from 'react-router-dom';
import heroimage from '../assets/heroimage.png'
import logo from '../assets/logo.png';
import londisHome1 from '../assets/londisHome1.png';
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image10 from "../assets/image10.png";


const LandingPage = () => {
    return (
      <div className="min-h-screen bg-white">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between p-6 border-b border-gray-200">
          {/* Logo and Brand Name - Left Side */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src={logo}
              alt="Logo" 
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold text-black">ServeConnect</span>
          </div>

          {/* Navigation Links - Right Side - Hamburger menu for mobile */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile Menu Button (hidden on desktop) */}
          <button className="md:hidden bg-purple-600 text-white p-2 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
  
        {/* Hero Section */}
        <section className="flex-grow bg-gray-50">
        <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
          {/* Left Column - Text Content */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-5xl font-bold text-black leading-tight mb-6">
              DISCOVER OPPORTUNITIES TO MAKE A DIFFERENCE IN YOUR COMMUNITY
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Embark on a meaningful Journey: Explore various Volunteer Opportunities and make a lasting impact in your community. 
              From teaching underpriviledged children to caring for the elderly, ServeConnect will bridge the connection you desire. 
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/signup" 
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition font-medium"
              >
                Register
              </Link>
            </div>
          </div>
  
          {/* Right Column - Image */}
          <div className="md:w-1/2">
            <img 
              src={heroimage}
              alt="Hero" 
              className="rounded-lg"
            />
          </div>
        </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12 flex-grow">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="block">EMPOWER YOURSELF</span>
          <span className="block">THROUGH VOLUNTEERING</span>
        </h1>
      </header>
      </div>

    {/* Opportunity Cards */}
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Two Column Layout */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Left Container - Londis Care Home */}
        <div className='bg-white p-8 rounded-1g shadow-md border border-black-200'>
        <div className="bg-gray-50 px-6 py-3 border-t text-gray-500">
           Lend a Helping Hand
          <div className=" bg-gray-100">
            <img 
            src={londisHome1}
            alt="LondisHome" 
            className="w-full h-auto rounded-lg mb-6"
          />
            <h1 className="text-3xl font-bold text-black mb-1">
              UNLOCK THE POWER OF</h1>
              <h2 className="text-3xl text-black font-bold mb-4">
                CONTINUITY ENGAGEMENT
              </h2>

              <p className="text-gray-600 mb-8">
              Discover how you can makes a positive impact <br />
              in your community by exploring our wide range <br />
              of volunteer opportunities
              </p>
              
              <h2 className="bg-gray-50 text-sm text-gray-500">
            Volunteer Today, Transform, Tomorrow
              </h2>
          </div>
          </div>
        </div>

         {/* Right Container - Embrace the Spirit of Service */}
        <div className='bg-white p-6 md:p-8 rounded-1g shadow-md border border-gray-200'>
        <div className="bg-gray-50 px-4 md:px-6 py-3 border-t text-gray-500">
          Embrace the Spirit of Service
          <div className=" bg-gray-100 p-4 md:p-6">
            <img 
            src={image3}
            alt="Image3" 
            className="w-full h-auto rounded-lg mb-6"
          />
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">
              IGNITE CHANGE THROUGH</h1>
              <h2 className="text-2xl md:text-3xl text-black font-bold mb-4">
                VOLUNTEERING
              </h2>

              <p className="text-gray-600 mb-6">
              Join our vibrant community of volunteers and make a <br />
              meaningful difference in the lives of those in need <br />
              </p>
              
              <h2 className="bg-gray-50 text-sm text-gray-500">
            Volunteer, Connect, Transform
              </h2>
          </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
            <img 
            src={image4}
            alt="Image4" 
            className="w-full h-auto rounded-lg"
          />
          </div>
          
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8 my-6 md:my-8">
          {/* Header Section */}
          <div >
            <img 
            src={image5}
            alt="Image5" 
            className="w-1/2 h-auto mb-1"
          />
          
              <h1 className="text-3xl font-bold mb-8">
                EMPOWERING <br />
                VOLUNTEERS, <br /> 
                ENRICHING <br />
                COMMUNITIES
                </h1>
              <p className="text-gray-600 text-lg">
                Our volunteer program offers a diverse range of <br /> 
                opportunities to make a tangible impact on the lives <br /> 
                of others <br />
                </p>
                </div>
          
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-left gap-4 mt-10">
            {/* Apply Now Button */}
            <button className="bg-black text-white font-small py-3 px-8 rounded-lg transition">
              Apply Now
              </button>
            </div>
          </div>
        </div>
              
              <div className="max-w-4xl mx-auto px-4 py-18 md:py-12">
                {/* Header Section */}
                <header className="text-center mb-8">
                  <h1 className="text-2xl md:text-4xl font-bold">
                    <span className="block">DISCOVER YOUR PASSION,</span>
                    <span className="block">MAKE A DIFFERENCE </span>
                    </h1>
                  </header>
                </div> 
                
                
                <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
                  {/* Three Column Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    
                    {/* Volunteer Opportunities */}
                    <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition overflow-hidden">
                      {/* Image Section */}
                      <div className=" relative overflow-hidden h-50">
                        <img
                        src={image6} 
                        alt="image6"
                        className="w-1/2 h-full object-cover"
                        />
                        </div>
                        
                        {/* Content Section */}
                        <div className="p-6">
                          <h2 className="text-xl md:text-2xl font-bold mb-3">VOLUNTEER OPPORTUNITIES</h2>
                          <p className="text-gray-600 ">
                            Explore a world of possibilities and find the perfect volunteer role that matches your skills and passions.
                            </p>
                          </div>
                        </div>
                            
                            {/* Volunteer Profiles */}
                            <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition overflow-hidden">
                              {/* Image Section */}
                              <div className=" relative overflow-hidden h-50">
                                <img
                                src={image7}
                                alt="Happy volunteer"
                                className="w-1/2 h-full object-cover"
                                />
                                </div>
                                
                                {/* Content Section */}
                                <div className="p-4 md:p-6">
                                  <h2 className="text-xl  md:text-2xl font-bold mb-3">VOLUNTEER PROFILES</h2>
                                  <p className="text-gray-600">
                                    Discover inspiring stories of volunteers who have made a lasting impact in their communities.
                                    </p>
                                  </div>
                                </div>
                                    
                                    {/* Volunteer Dashboard */}
                                    <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition overflow-hidden">
                                      {/* Image Section */}
                                      <div className=" relative overflow-hidden h-50">
                                        <img
                                        src={image8}  
                                        alt="Person using dashboard"
                                        className="w-1/2 h-full object-cover"
                                        />
                                        </div>
          
          {/* Content Section */}
          <div className="p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3">VOLUNTEER DASHBOARD</h2>
            <p className="text-gray-600">
              Stay organized and track your volunteer hours, achievements, and upcoming commitments.
            </p>
          </div>
        </div>
      </div>
    </div>


          <section className="flex-grow bg-gray-50">
          <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-5xl font-bold text-black-800 leading-tight mb-6">
              EMPOWERING <br />
              VOLUNTEERS, TRANSFORMING <br />
              COMMUNITIES 
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6">
              Join our vibrant community of volunteers and make a lasting <br />
              impact. Whether you have a few hours a week or a few days <br />
              a month, we habe a wide range of opportunities that will <br /> 
              inspire and empower ypu to create positive change.
            </p>
            <div className="flex justify-start space-x-4">
              <Link 
                to="/signup" 
                className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-700  font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
  
          {/* Right Column - Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src={image10}
              alt="image10" 
              className="w-full rounded-lg"
            />
          </div>
            </div>
            </section>
            
            
            <footer className=" text-gray-300 py-8 md:py-12 px-4">
              <div className="max-w-7xl mx-auto">
                {/* Footer Columns */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                  {/* Copyright Section */}
                  <div className="flex flex-col items-center md:items-start">
                  <img 
                  src={logo}
                  alt="logo" 
                  className="h-12 w-12 mb-4 rounded-lg"
                  />
                  <p className="text-center md:text-left">
                    © 2025 ServerConnect, Inc. <br />
                    All rights reserved.</p>
                  </div>
                  
                  
                  {/* Resources Column */}
                  <div>
                    <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="hover:text-white transition">Volunteer Opportunities</a></li>
                      <li><a href="#" className="hover:text-white transition">Volunteer Stories</a></li>
                      <li><a href="#" className="hover:text-white transition">Volunteer FAQs</a></li>
                      <li><a href="#" className="hover:text-white transition">Donate</a></li>
                      </ul>
                      </div>
                      
                      {/* Connect Column */}
                      <div>
                        <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
                        <ul className="space-y-2">
                          <li><a href="#" className="hover:text-white transition">Social Media</a></li>
                          <li><a href="#" className="hover:text-white transition">Newsletter</a></li>
                          <li><a href="#" className="hover:text-white transition">Partner With Us</a></li>
                          <li><a href="#" className="hover:text-white transition">Volunteer Meetups</a></li>
                          </ul>
                          </div>
                          
                          {/* Company Column */}
                          <div>
                            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
                            <ul className="space-y-2">
                              <li><a href="#" className="hover:text-white transition">About Us</a></li>
                              <li><a href="#" className="hover:text-white transition">Careers</a></li>
                              <li><a href="#" className="hover:text-white transition">Press</a></li>
                              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </footer>
                    </div>
                  </div>
                );
              };

export default LandingPage;