import Image from 'next/image';
import Link from 'next/link';

import Logo from '~/images/logo.png';

const Nav = () => {
  return (
    <div className='flex flex-row py-8'>
      <div className='w-5/12'>
        <Link
          className='w-full text-center justify-center flex items-center p-2 text-white transition-all hover:bg-gray-600 bg-gray-700 rounded-md'
          href='/'
        >
          V2
        </Link>
      </div>
      <div className='flex w-2/12 items-center justify-center'>
        <Image src={Logo} alt='Logo' width={32} height={32} />
      </div>
      <div className='w-5/12'>
        <Link
          className='w-full text-center justify-center flex items-center p-2 text-white transition-all hover:bg-gray-600 bg-gray-700 rounded-md'
          href='/v3'
        >
          V2
        </Link>
      </div>
    </div>
  );
};

export default Nav;
