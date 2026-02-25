import { use, useState } from 'react'
import './index.css'
function App() {
  const [sum, setSum] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [sequence, setSequence] = useState([]);
  const [isStop, setIsStop] = useState(false);
  const [output, setOutput] = useState(null)

  function startFib() {
    let a = 0, b = 1;
    let id = setInterval(() => {
      setSequence(prev => [...prev, a]);
      let temp = a + b;
      a = b;
      b = temp;
      setSum(sum => sum + a);
    }, 1000);

    setIntervalId(id)
  }


  function endFib() {
    setIsStop(true);
    clearInterval(intervalId);
    setSequence([]);
    setOutput(sum)
    setSum(0);
  }


  return (
    <div className='min-h flex flex-col items-center justify-center'>
      <div className="flex flex-col items-center justify-center gap-5 text-black bg-gray-300 h-80 w-90 rounded-lg p-5 m-40">
        <h1 className="text-2xl font-bold">Fibbonaci-Genrator</h1>
        <div className="flex gap-4">
          <button
            className="px-6 py-3 bg-green-500 rounded-lg text-white hover:cursor-pointer"
            onClick={startFib}
          >
            Start
          </button>
          <button
            className="px-6 py-3 bg-red-500 rounded-lg text-white hover:cursor-pointer"
            onClick={endFib}
          >
            Stop
          </button>
        </div>
        <div className="text-center">
          <h2 className="font-semibold">
            Generated Sequence: {sequence.join(", ")}
          </h2>
          <h2 className="font-semibold">Sum: {sequence.reduce((a, b) => a + b, 0)}</h2>
        </div>
      </div>
    </div>
  )
}

export default App