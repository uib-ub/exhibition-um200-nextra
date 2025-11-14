/* import Image from 'next/image'
import illustration from '@/components/main-hero/main-illustration.png' */
import { Animation } from '@/components/animation'

export function MainHero() {
  return (
    <div className="relative flex flex-col gap-10 items-center justify-center w-full lg:max-w-7xl mx-auto pt-8">
      <div className="grid grid-cols-1 gap-5 items-center justify-center w-full">
        <h1 className="text-2xl md:text-4xl text-center uppercase">
          <span className='text-lg md:text-xl md:pb-3 inline-block'>200 år med</span>
          <br />
          vidunderlig vitenskap
        </h1>

      </div>
      {/* <Image src={illustration} alt="200 år med vidunderlig vitenskap" width={1200} height={1000} className="w-full" /> */}
      <Animation />
      <div className="flex flex-row gap-5 items-center justify-between w-full">
        <p className="text-xl aspect-square flex items-center justify-center font-medium md:text-2xl ">1825</p>
        <p className="text-xl md:text-2xl text-center">Universitetet i Bergen, Universitetsmuseet<br />& Universitetsbiblioteket</p>
        <p className="text-xl aspect-square flex items-center justify-center font-medium md:text-2xl ">2025</p>
      </div>
    </div>
  )
}