import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Features() {
  const features = [
    {
      icon: "🔍",
      title: "Code Analysis",
      description: "Deep analysis of your code structure, identifying potential bugs, performance issues, and code smells."
    },
    {
      icon: "🚀",
      title: "Performance Optimization",
      description: "Get suggestions for improving code performance, reducing complexity, and optimizing algorithms."
    },
    {
      icon: "📝",
      title: "Code Style & Standards",
      description: "Ensure your code follows best practices and coding standards for better maintainability."
    },
    {
      icon: "🛡️",
      title: "Security Review",
      description: "Identify security vulnerabilities and potential security risks in your codebase."
    },
    {
      icon: "📚",
      title: "Learning Suggestions",
      description: "Get educational insights and explanations to help you understand and improve your coding skills."
    },
    {
      icon: "⚡",
      title: "Instant Feedback",
      description: "Receive immediate feedback on your code without waiting for human reviewers."
    }
  ];

  const supportedLanguages = [
    { name: "JavaScript", icon: "⚡" },
    { name: "Python", icon: "🐍" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "TypeScript", icon: "📘" },
    { name: "Java", icon: "☕" },
    { name: "C++", icon: "⚙️" },
    { name: "Go", icon: "🐹" }
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
            Powerful Features for
            <span className="text-[#0095ff]"> Better Code</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#8B949E] max-w-3xl mx-auto px-4">
            Our AI-powered code reviewer provides comprehensive analysis and suggestions 
            to help you write cleaner, more efficient, and maintainable code.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#161B22] p-4 sm:p-6 rounded-lg border border-[#30363D] hover:border-[#0095ff] transition-all duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-[#E6EDF3] mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-[#8B949E] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Supported Languages */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#E6EDF3] font-black tracking-tighter mb-6 sm:mb-8">
            Supported Languages & Frameworks
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
            {supportedLanguages.map((lang, index) => (
              <div key={index} className="bg-[#161B22] p-3 sm:p-4 rounded-lg border border-[#30363D] hover:border-[#0095ff] transition-all duration-300">
                <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{lang.icon}</div>
                <p className="text-xs sm:text-sm font-semibold text-[#E6EDF3]">{lang.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#161B22] p-6 sm:p-8 rounded-lg border border-[#30363D]">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-[#E6EDF3] font-black tracking-tighter mb-3 sm:mb-4">
            Ready to Improve Your Code?
          </h2>
          <p className="text-sm sm:text-base text-[#8B949E] mb-4 sm:mb-6">
            Start reviewing your code with AI-powered insights today!
          </p>
          <Link 
            to={'/code-review'} 
            className="bg-[#0095ff] tracking-tight font-bold text-[#E6EDF3] px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-[#1F6FEB] transition-all duration-300 text-sm sm:text-base"
          >
            Start Code Review 🚀
          </Link>
        </div>
      </div>
      
      <p className="text-xs sm:text-sm text-center text-[#8B949E] mt-6 sm:mt-8 pb-6 sm:pb-8">Powered by Gemini <i className="ri-gemini-fill"></i></p>
    </div>
  );
}

export default Features; 