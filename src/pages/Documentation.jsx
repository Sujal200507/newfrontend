import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Documentation() {
  const quickStartSteps = [
    {
      step: "1",
      title: "Navigate to Code Review",
      description: "Click on the 'Review My Code Now' button or go to the Code Review page."
    },
    {
      step: "2",
      title: "Paste Your Code",
      description: "Copy your code from your editor and paste it into the code input area."
    },
    {
      step: "3",
      title: "Get AI Review",
      description: "Click the arrow button and receive instant AI-powered feedback and suggestions."
    }
  ];

  const examples = [
    {
      language: "JavaScript",
      code: `function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}`,
      suggestions: [
        "Consider using Array.reduce() for cleaner code",
        "Add input validation for empty arrays",
        "Consider using const instead of let for sum variable"
      ]
    },
    {
      language: "Python",
      code: `def find_max(numbers):
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num`,
      suggestions: [
        "Use built-in max() function instead of manual loop",
        "Add error handling for empty lists",
        "Consider using type hints for better code documentation"
      ]
    }
  ];

  const faqs = [
    {
      question: "What programming languages are supported?",
      answer: "We support JavaScript, Python, React, Node.js, TypeScript, Java, C++, Go, and many other popular programming languages and frameworks."
    },
    {
      question: "Is my code stored or saved?",
      answer: "No, we don't permanently store your code. It's processed securely for analysis and then discarded to protect your privacy."
    },
    {
      question: "How accurate are the AI suggestions?",
      answer: "Our AI provides high-quality suggestions based on best practices, but it's always good to review and validate the recommendations for your specific use case."
    },
    {
      question: "Can I use this for large codebases?",
      answer: "Currently, we recommend reviewing code in smaller chunks (up to 1000 lines) for optimal performance and accuracy."
    },
    {
      question: "Is this tool free to use?",
      answer: "Yes, our AI code reviewer is completely free to use with no limitations on the number of reviews."
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
            Documentation &
            <span className="text-[#0095ff]"> Usage Guide</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#8B949E] max-w-3xl mx-auto px-4">
            Learn how to use our AI-powered code reviewer effectively and get the most out of 
            your code analysis experience.
          </p>
        </div>

        {/* Quick Start Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#E6EDF3] font-black tracking-tighter mb-6 sm:mb-8 text-center">
            Quick Start Guide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {quickStartSteps.map((step, index) => (
              <div key={index} className="bg-[#161B22] p-4 sm:p-6 rounded-lg border border-[#30363D]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0095ff] rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-white font-bold text-sm sm:text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#E6EDF3] mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-[#8B949E] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Examples Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#E6EDF3] font-black tracking-tighter mb-6 sm:mb-8 text-center">
            Code Examples & Suggestions
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {examples.map((example, index) => (
              <div key={index} className="bg-[#161B22] p-4 sm:p-6 rounded-lg border border-[#30363D]">
                <h3 className="text-lg sm:text-xl font-bold text-[#E6EDF3] mb-3 sm:mb-4">{example.language} Example</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#0095ff] mb-2 sm:mb-3">Original Code</h4>
                    <pre className="bg-[#0D1117] p-3 sm:p-4 rounded-lg text-[#E6EDF3] text-xs sm:text-sm overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#0095ff] mb-2 sm:mb-3">AI Suggestions</h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {example.suggestions.map((suggestion, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#0095ff] mr-2">•</span>
                          <span className="text-xs sm:text-sm text-[#8B949E]">{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#E6EDF3] font-black tracking-tighter mb-6 sm:mb-8 text-center">
            Best Practices
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-[#161B22] p-4 sm:p-6 rounded-lg border border-[#30363D]">
              <h3 className="text-lg sm:text-xl font-bold text-[#E6EDF3] mb-3 sm:mb-4">✅ Do's</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-sm sm:text-base text-[#8B949E]">Review code in smaller, focused chunks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-sm sm:text-base text-[#8B949E]">Include comments in your code for better context</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-sm sm:text-base text-[#8B949E]">Consider multiple suggestions before implementing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-sm sm:text-base text-[#8B949E]">Use for learning and improving coding skills</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#161B22] p-4 sm:p-6 rounded-lg border border-[#30363D]">
              <h3 className="text-lg sm:text-xl font-bold text-[#E6EDF3] mb-3 sm:mb-4">❌ Don'ts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span className="text-sm sm:text-base text-[#8B949E]">Submit sensitive or proprietary code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span className="text-sm sm:text-base text-[#8B949E]">Rely solely on AI suggestions without understanding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span className="text-sm sm:text-base text-[#8B949E]">Submit extremely large code files</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span className="text-sm sm:text-base text-[#8B949E]">Ignore context-specific requirements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#E6EDF3] font-black tracking-tighter mb-6 sm:mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#161B22] p-4 sm:p-6 rounded-lg border border-[#30363D]">
                <h3 className="text-base sm:text-lg font-bold text-[#E6EDF3] mb-2 sm:mb-3">{faq.question}</h3>
                <p className="text-sm sm:text-base text-[#8B949E] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#161B22] p-6 sm:p-8 rounded-lg border border-[#30363D]">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-[#E6EDF3] font-black tracking-tighter mb-3 sm:mb-4">
            Ready to Start Reviewing Your Code?
          </h2>
          <p className="text-sm sm:text-base text-[#8B949E] mb-4 sm:mb-6">
            Now that you know how to use our tool, let's improve your code quality!
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

export default Documentation; 