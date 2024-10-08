'use client';

import React, { useEffect, useState } from 'react';

import { ParsedSensor, parseSensor } from '@/lib/parse/v2';

import Nav from '@/app/_components/Nav';

export default function HomePage() {
  const [sensorL, setSensorL] = useState<string>('');
  const [parsedSensorL, setParsedSensorL] = useState<ParsedSensor>({});

  useEffect(() => {
    if (sensorL) {
      setParsedSensorL(parseSensor(sensorL, false));
    }
  }, [sensorL]);

  const [sensorR, setSensorR] = React.useState<string>('');
  const [parsedSensorR, setParsedSensorR] = useState<ParsedSensor>({});

  useEffect(() => {
    if (sensorR) {
      setParsedSensorR(parseSensor(sensorR, false));
    }
  }, [sensorR]);

  return (
    <main className='px-8'>
      <Nav />
      <div className='flex flex-row p-4 bg-gray-800 h-full'>
        <div className='flex flex-col w-full pr-4 border-r border-gray-700'>
          <textarea
            className='w-full text-white transition-all border-2 border-gray-600 hover:bg-gray-600 bg-gray-700 rounded-md'
            placeholder='Sensor L'
            rows={10}
            onChange={(e): void => setSensorL(e.target.value)}
          />
          {Object.keys(parsedSensorL)?.length ? (
            <textarea
              className='w-full mt-4 text-white transition-all border-2 border-gray-600 hover:bg-gray-600 bg-gray-700 rounded-md'
              readOnly
              rows={10}
              value={JSON.stringify(parsedSensorR)}
            />
          ) : null}
        </div>
        <div className='flex flex-col w-full pl-4 border-l border-gray-700'>
          <textarea
            className='w-full text-white transition-all border-2 border-gray-600 hover:bg-gray-600 bg-gray-700 rounded-md'
            placeholder='Sensor R'
            rows={10}
            onChange={(e): void => setSensorR(e.target.value)}
          />
          {Object.keys(parsedSensorR)?.length ? (
            <textarea
              className='w-full mt-4 text-white transition-all border-2 border-gray-600 hover:bg-gray-600 bg-gray-700 rounded-md'
              readOnly
              rows={10}
              value={JSON.stringify(parsedSensorR)}
            />
          ) : null}
        </div>
      </div>
    </main>
  );
}
