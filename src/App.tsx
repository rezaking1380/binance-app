import { useEffect, useState } from "react";
import "./App.css";
import Chart from "./components/Chart";
import Navbar from "./components/Navbar";
import { fetchData } from "./lib/Api";
import TimeSelector from "./components/TimeSelector";

function App() {
  const [candlestickData, setCandlestickData] = useState<any[]>([]);
  const [intervalTime, setIntervalTime] = useState<string>("1m");
  console.log(intervalTime);
  useEffect(() => {
    const Data = async () => {
      const data = await fetchData("BTCUSDT", intervalTime);
      setCandlestickData(data);
    };
    Data();
    const intervalId = setInterval(Data, 60000);

    return () => clearInterval(intervalId);
  }, [intervalTime]);

  return (
    <main className="dark:bg-background w-full h-screen">
      <Navbar />
      <div className="flex justify-center space-x-4">
        <TimeSelector onChange={setIntervalTime} />
      </div>
      <Chart data={candlestickData} />
    </main>
  );
}

export default App;
