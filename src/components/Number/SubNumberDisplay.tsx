interface NumberDisplayProps {
  value: number;
}

const SubNumberDisplay = ({ value }: NumberDisplayProps) => {
  const textColorClass = value >= 0 ? 'text-white-500' : 'text-red-500';

  return (
    <span className={`text-lg ${textColorClass}`}>
  {value >= 0 ? `$${value}` : `-$${Math.abs(value)}`}
</span>

  );
};

export default SubNumberDisplay;