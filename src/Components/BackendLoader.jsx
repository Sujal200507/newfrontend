

function BackendLoader() {
  return (
    <div className="w-full h-screen bg-[#0D1117] flex items-center justify-center px-4 text-center">
    <h2 className="text-[#8B949E] text-2xl font-bold leading-relaxed">
      Setting up the environment for you.<br />
      <span className="text-xl font-semibold text-[#8B949E] block mt-4">
        💤 The backend server was asleep due to inactivity.<br />
        It's now restarting — please wait a few seconds...
      </span>
    </h2>
  </div>
  )
}

export default BackendLoader