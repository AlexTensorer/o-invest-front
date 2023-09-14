interface NumberDisplayProps {
  value: number;
}

const MainNumberDisplay = ({ value }: NumberDisplayProps) => {
  const textColorClass = value >= 0 ? 'text-white-500' : 'text-red-500';

  return (
    <span className={`text-3xl ${textColorClass}`}>
  {value >= 0 ? `$${value}` : `-$${Math.abs(value)}`}
</span>

  );
};

export default MainNumberDisplay;