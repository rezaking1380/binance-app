import React, { useEffect, useRef } from 'react';
import { createChart, IChartApi, ISeriesApi } from 'lightweight-charts';

interface TradingViewChartProps {
  data: [number, string, string, string, string, string, number, string, number, string, string, string][];
}

const TradingViewChart: React.FC<TradingViewChartProps> = ({ data }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      chartRef.current = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 400,
      });

      seriesRef.current = chartRef.current.addCandlestickSeries();

      const formattedData: any[] = data.map(item => ({
        time: item[0] / 1000,
        open: parseFloat(item[1]),
        high: parseFloat(item[2]),
        low: parseFloat(item[3]),
        close: parseFloat(item[4]),
      }));

      seriesRef.current.setData(formattedData);
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.remove();
      }
    };
  }, [data]);

  return <div className=' dark:bg-background mx-auto' ref={chartContainerRef} style={{ width: '90%', height: '400px' }} />;
};

export default TradingViewChart;
