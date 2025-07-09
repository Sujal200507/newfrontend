

function BackendLoader() {
  return (
    <div className="w-full h-screen bg-[#0D1117] flex flex-col items-center justify-center text-center">
      <h2 className="text-[#8B949E] mb-4 text-xl font-semibold">
        Preparing your environment...
      </h2>
      <span className="text-3xl mb-2">💤</span>
      <p className="text-[#8B949E]">
        The backend server was temporarily asleep due to inactivity.<br />
        It’s now waking up and getting ready for you.<br />
        <span className="text-[#58A6FF]">This usually takes just a few seconds. Thank you for your patience!</span>
      </p>
    </div>
  );
}

export default BackendLoader;