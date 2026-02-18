import Image from 'next/image';

export default function SubHero({ title }: {
  title: string
}) {
  return (
    <div
      className={`
        bg-bylov-white
        h-100
        mb-10
        pl-10
        pb-10
        flex
      `}
    >
      <Image 
        src='/logos/svg/UiB_Bylovjubileet_2026_Initial_Sirkel.svg' 
        alt='Logo Bylovsjubileet' 
        height={350} 
        width={350}/>
      <div className='grid content-center ml-10'>
        <div className='mt-5'>
          <div className='text-5xl text-bylov-red'>{title}</div>
        </div>
      </div>
    </div>
  )
}