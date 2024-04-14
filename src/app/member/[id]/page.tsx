import Image from 'next/image';
import Link from 'next/link';

export default function MemberPage({ params }: { params: { slug: string } }) {
  const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/johndoe' },
    { name: 'Twitter', url: 'https://www.twitter.com/johndoe' },
    { name: 'Facebook', url: 'https://www.facebook.com/johndoe' },
  ];
  return (
    <>
      <div className='absolute w-full flex flex-col items-center justify-end h-screen -mt-[15vh] z-[-1] bg-[radial-gradient(var(--tw-gradient-stops))] from-20% to-70% from-white to-neutral-100'>
        <div className='w-8 h-8 2xl:w-12 2xl:h-12 mb-[3vh]'>
          <Image src='/cdown.svg' alt='Caret Down' width={64} height={64} />
        </div>
      </div>
      <div className='flex flex-row justify-between mx-auto h-[85vh] mt-[15vh] w-4/5 2xl:w-4/5'>
        <div className='max-h-[80vh] lg:w-[25vw] flex flex-col self-end overflow-hidden'>
          <Image src='/person.png' alt={`Profile picture of ${params.slug}`} width={512} height={512} className='' />
        </div>

        <div className='flex flex-col lg:w-[35vw] text-right justify-start mt-[7.5%] gap-1'>
          <p className='text-xl lg:text-5xl 2xl:text-7xl font-[800] text-black'>JOHN DOE</p>
          <p className='text-lg lg:text-2xl 2xl:text-4xl font-[400] text-gray-800'>Investments Analyst (2023 - 2027)</p>

          {/* About them */}
          <p className='text-base lg:text-lg 2xl:text-2xl text-gray-800 mt-[1.5rem]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Social Icons */}
          <div className='mt-[2rem] flex justify-end lg:gap-4 2xl:gap-8 w-full'>
            {socials.map((social) => (
              <Link key={social.url} href={social.url} target='_blank' rel='noreferrer'>
                <div className='w-12 h-12 2xl:w-16 2xl:h-16 bg-gray-300 rounded-lg flex items-center justify-center'></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-neutral-100'></div>
    </>
  );
}
