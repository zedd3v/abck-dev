'use client';

import React, { useEffect, useState } from 'react';

import { ParseResult, parseSensor } from '@/lib/parse/v3';

import Nav from '@/app/_components/Nav';
import SensorDetails, { SensorDetailsProps } from '@/app/_components/SensorDetails';

export default function HomePage() {
  const [encodeKeyL, setEncodeKeyL] = useState<number>(0);
  const [sensorL, setSensorL] = useState<string>('');
  const [parsedSensorL, setParsedSensorL] = useState({} as ParseResult);

  useEffect(() => {
    if (encodeKeyL && sensorL) {
      setParsedSensorL(parseSensor(sensorL, encodeKeyL, true));
    } else {
      setParsedSensorL({ sensor: '' });
    }
  }, [encodeKeyL, sensorL]);

  const [encodeKeyR, setEncodeKeyR] = useState<number>(0);
  const [sensorR, setSensorR] = React.useState<string>('');
  const [parsedSensorR, setParsedSensorR] = useState({} as ParseResult);

  useEffect(() => {
    if (encodeKeyR && sensorR) {
      setParsedSensorR(parseSensor(sensorR, encodeKeyR, true));
    } else {
      setParsedSensorR({ sensor: '' });
    }
  }, [encodeKeyR, sensorR]);

  return (
    <main className='px-8'>
      <Nav />
      <div className='flex flex-row p-4 bg-gray-800 h-full'>
        <div className='flex flex-col w-full pr-4 border-r border-gray-700'>
          <input
            type='text'
            className='w-full text-white mb-4 transition-all border-2 border-gray-600 hover:bg-gray-600 bg-gray-700 rounded-md'
            placeholder='Encode Key L'
            onChange={(e): void => setEncodeKeyL(Number(e.target.value))}
          />
          <textarea
            className='w-full text-white transition-all border-2 border-gray-600 hover:bg-gray-600 bg-gray-700 rounded-md'
            placeholder='Sensor L'
            rows={10}
            onChange={(e): void => setSensorL(e.target.value)}
          />
          {parsedSensorL?.sensor !== '' ? (
            <textarea
              className='w-full mt-4 text-white transition-all border-2 border-gray-600 hover:bg-gray-600 bg-gray-700 rounded-md'
              readOnly
              rows={10}
              value={parsedSensorL?.sensor}
            />
          ) : null}
          {parsedSensorL?.detailed && Object.keys(parsedSensorL?.detailed)?.length
            ? Object.keys(parsedSensorL?.detailed).map((key) => {
                const details: SensorDetailsProps = { key, value: parsedSensorL?.detailed?.[key] || '' };
                if (
                  parsedSensorR?.detailed &&
                  Object.keys(parsedSensorR?.detailed)?.length &&
                  parsedSensorR?.detailed?.[key] !== details.value
                ) {
                  details.mismatch = true;
                }

                return SensorDetails(details);
              })
            : null}
        </div>
        <div className='flex flex-col w-full pl-4 border-l border-gray-700'>
          <input
            type='text'
            className='w-full text-white mb-4 transition-all border-2 border-gray-600 hover:bg-gray-600 bg-gray-700 rounded-md'
            placeholder='Encode Key R'
            onChange={(e): void => setEncodeKeyR(Number(e.target.value))}
          />
          <textarea
            className='w-full text-white transition-all border-2 border-gray-600 hover:bg-gray-600 bg-gray-700 rounded-md'
            placeholder='Sensor R'
            rows={10}
            onChange={(e): void => setSensorR(e.target.value)}
          />
          {parsedSensorR?.sensor !== '' ? (
            <textarea
              className='w-full mt-4 text-white transition-all border-2 border-gray-600 hover:bg-gray-600 bg-gray-700 rounded-md'
              readOnly
              rows={10}
              value={parsedSensorR?.sensor}
            />
          ) : null}
          {parsedSensorR?.detailed && Object.keys(parsedSensorR?.detailed)?.length
            ? Object.keys(parsedSensorR?.detailed).map((key) => {
                const details: SensorDetailsProps = {
                  key,
                  value: parsedSensorR?.detailed?.[key] || '',
                  inverted: true,
                };
                if (
                  parsedSensorL?.detailed &&
                  Object.keys(parsedSensorL?.detailed)?.length &&
                  parsedSensorL?.detailed?.[key] !== details.value
                ) {
                  details.mismatch = true;
                }

                return SensorDetails(details);
              })
            : null}
        </div>
      </div>
    </main>
  );
}
