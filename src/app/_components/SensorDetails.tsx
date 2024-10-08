export interface SensorDetailsProps {
  key: string;
  value: string;
  mismatch?: boolean;
  inverted?: boolean;
}

const SensorDetails = ({ key, value, mismatch = false, inverted = false }: SensorDetailsProps) => {
  return (
    <div key={key} className={`flex  ${inverted ? 'flex-row-reverse' : 'flex-row'} mt-3`}>
      <div className={`${inverted ? 'text-right' : 'text-left'} text-white text-sm w-1/4 pr-2`}>{key}</div>
      <input
        type='text'
        className={`${
          mismatch ? 'border-red-500' : value !== '' && value !== '""' ? 'border-green-500' : 'border-yellow-500'
        } w-full text-xs text-white mt-0.5 transition-all border-1 border-opacity-40 py-1 px-2 bg-gray-700 rounded-md`}
        readOnly
        value={value}
      />
    </div>
  );
};

export default SensorDetails;
