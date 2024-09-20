interface TimeSelectorProps {
  onChange: (value: string) => void;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({ onChange }) => {
  return (
    <div className="my-8">
      <select className="rounded-lg px-2 py-1 border dark:bg-primary text-background " onChange={(e) => onChange(e.target.value)}>
        <option value={'1m'}>1 m</option>
        <option value={'5m'}>5 m</option>
        <option value={'15m'}>15 m</option>
        <option value={'1h'}>1 h</option>
        <option value={'1d'}>1 d</option>
      </select>
    </div>
  );
};

export default TimeSelector;
