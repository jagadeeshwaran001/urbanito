import Image from 'next/image';
import printingBeaver from '@/public/imgDark.jpg';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';
import UrbanitoSlider from '@/components/common/UrbanitoSlider';

export default function Home() {
  return (
    <section className='w-full'>
      <div className='flex justify-center w-full'>
        <Image src={printingBeaver} alt='printing beaver' />
      </div>
      <ThemeSwitcher />
      <div className='mt-10 mb-10'>
        <UrbanitoSlider />
      </div>
    </section>
  )
}
