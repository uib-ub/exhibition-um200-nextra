import UiB from '@/components/logos/logo-uib-no';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='w-full p-5 bg-bylov-white'>
      <div className='grow w-full'>
        <p className='font-medium text-center'>Denne utstillingen er skapt av:</p>
      </div>
      <div className='flex flex-col sm:flex-row sm:justify-center gap-20 w-full'>
        <div className='sm:w-1/2 md:w-1/3'>
          <Link href="https://www.uib.no/" target='_blank'>
            <UiB/>
          </Link>
        </div>
      </div>
      <div className='grow mb-5 mt-10 w-full'>
        <p className='font-medium text-center'>
          <a href='https://uustatus.no/' target='_blank'>Tilgjengelighetserklæring</a>
          {/* Her trenger vi lenken til tilgjengelighetserklæringen vår */}
        </p>
      </div>
    </div>
  );
};