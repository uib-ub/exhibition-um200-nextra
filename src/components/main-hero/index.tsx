import Image from 'next/image'
import illustration from '@/components/main-hero/main-illustration.png'
import logo from '@/components/main-hero/uib-logo.svg'

export function MainHero() {
  return (
    <div className="relative flex flex-col gap-10 items-center justify-center w-full lg:max-w-7xl mx-auto">
      <div className="grid grid-cols-[200px_1fr_200px] gap-5 items-center justify-center w-full">
        <Image src={logo} alt="Universitetet i Bergen" width={160} height={160} className="justify-self-start" />
        <h1 className="text-2xl md:text-4xl font-bold text-center uppercase"><span className='text-xl md:text-2xl'>200 år med</span><br />vidunderlig vitenskap</h1>
        <div>{' '}</div>
      </div>
      <Image src={illustration} alt="200 år med vidunderlig vitenskap" width={1200} height={1000} className="w-full" />
      <div className="flex flex-row gap-5 items-center justify-between w-3/4">
        <p className="text-xl md:text-2xl">1825</p>
        <p className="text-xl md:text-2xl text-center">Universitetet i Bergen, Universitetsmuseet og Universitetsbiblioteket</p>
        <p className="text-xl md:text-2xl">2025</p>
      </div>
    </div>
  )
}