import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function About() {
  const stats = [
    { number: "100+", label: "Developers" },
    { number: "50+", label: "Languages Supported" },
    { number: "24/7", label: "AI Availability" },
    { number: "0", label: "Setup Required" }
  ];

  const team = [
    {
      name: "Sujal",
      role: "Full Stack Developer",
      description: "Passionate about creating AI-powered tools that help developers write better code.",
      github: "https://github.com/Sujal200507"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#0D1117]">
      <div className="bg-[#0095ff] flex items-center justify-center w-full min-h-8 py-1 px-4">
        <h6 className="text-white tracking-tighter font-semibold text-[10px] sm:text-[11.3px] md:text-xs text-center">
          Supports JavaScript, Python, React, and other popular frameworks! 🚀
        </h6>
      </div>
      <Navbar />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#E6EDF3] font-black tracking-tighter mb-4 sm:mb-6">
            About Our
            <span className="text-[#0095ff]"> AI Code Reviewer</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#8B949E] max-w-4xl mx-auto leading-relaxed px-4">
            We're on a mission to help developers write better code through intelligent AI-powered analysis. 
            Our tool provides instant feedback, identifies potential issues, and suggests improvements 
            to make your code more efficient, secure, and maintainable.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-[#161B22] p-4 sm:p-6 rounded-lg border border-[#30363D]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0095ff] mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-xs sm:text-sm md:text-base text-[#8B949E] font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-[#161B22] p-6 sm:p-8 rounded-lg border border-[#30363D] mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#E6EDF3] font-black tracking-tighter mb-4 sm:mb-6 text-center">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#E6EDF3] mb-3 sm:mb-4">🎯 What We Do</h3>
              <p className="text-sm sm:text-base text-[#8B949E] leading-relaxed">
                We provide instant, intelligent code review using advanced AI technology. 
                Our system analyzes your code for bugs, performance issues, security vulnerabilities, 
                and coding best practices, giving you actionable feedback to improve your code quality.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#E6EDF3] mb-3 sm:mb-4">💡 Why We Do It</h3>
              <p className="text-sm sm:text-base text-[#8B949E] leading-relaxed">
                Code quality is crucial for successful software development. We believe every developer 
                deserves access to professional-level code review, regardless of their experience level 
                or team size. Our AI makes this possible 24/7.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#E6EDF3] font-black tracking-tighter mb-6 sm:mb-8 text-center">
            Powered by Advanced AI
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-[#161B22] p-4 sm:p-6 rounded-lg border border-[#30363D]">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🤖</div>
              <h3 className="text-lg sm:text-xl font-bold text-[#E6EDF3] mb-2 sm:mb-3">Gemini AI</h3>
              <p className="text-sm sm:text-base text-[#8B949E]">
                Built on Google's Gemini AI model for advanced code understanding and analysis capabilities.
              </p>
            </div>
            <div className="bg-[#161B22] p-4 sm:p-6 rounded-lg border border-[#30363D]">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">⚡</div>
              <h3 className="text-lg sm:text-xl font-bold text-[#E6EDF3] mb-2 sm:mb-3">Real-time Processing</h3>
              <p className="text-sm sm:text-base text-[#8B949E]">
                Instant feedback and analysis with no waiting time, powered by optimized AI processing.
              </p>
            </div>
            <div className="bg-[#161B22] p-4 sm:p-6 rounded-lg border border-[#30363D] sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🔒</div>
              <h3 className="text-lg sm:text-xl font-bold text-[#E6EDF3] mb-2 sm:mb-3">Privacy First</h3>
              <p className="text-sm sm:text-base text-[#8B949E]">
                Your code is processed securely and we don't store any of your source code permanently.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#E6EDF3] font-black tracking-tighter mb-6 sm:mb-8 text-center">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-1 gap-6 sm:gap-8 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-[#161B22] p-4 sm:p-6 rounded-lg border border-[#30363D] text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#0095ff] rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl">👨‍💻</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#E6EDF3] mb-1 sm:mb-2">{member.name}</h3>
                <p className="text-sm sm:text-base text-[#0095ff] font-semibold mb-2 sm:mb-3">{member.role}</p>
                <p className="text-sm sm:text-base text-[#8B949E] mb-3 sm:mb-4">{member.description}</p>
                <a 
                  href={member.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#0095ff] text-[#E6EDF3] px-3 sm:px-4 py-2 rounded-full hover:bg-[#1F6FEB] transition-all duration-300 text-sm sm:text-base"
                >
                  <i className="ri-github-fill mr-2"></i>
                  GitHub Profile
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#161B22] p-6 sm:p-8 rounded-lg border border-[#30363D]">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-[#E6EDF3] font-black tracking-tighter mb-3 sm:mb-4">
            Ready to Experience AI-Powered Code Review?
          </h2>
          <p className="text-sm sm:text-base text-[#8B949E] mb-4 sm:mb-6">
            Join hundreds of developers who are already improving their code quality with our AI reviewer.
          </p>
          <Link 
            to={'/code-review'} 
            className="bg-[#0095ff] tracking-tight font-bold text-[#E6EDF3] px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-[#1F6FEB] transition-all duration-300 text-sm sm:text-base"
          >
            Start Reviewing Now 🚀
          </Link>
        </div>
      </div>
      
      <p className="text-xs sm:text-sm text-center text-[#8B949E] mt-6 sm:mt-8 pb-6 sm:pb-8">Powered by Gemini <i className="ri-gemini-fill"></i></p>
    </div>
  );
}

export default About; 