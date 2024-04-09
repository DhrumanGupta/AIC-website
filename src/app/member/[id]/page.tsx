import Head from 'next/head';
import Image from 'next/image';

export default function MemberPage({ params }: { params: { slug: string } }) {
  const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/johndoe' },
    { name: 'Twitter', url: 'https://www.twitter.com/johndoe' },
    { name: 'Facebook', url: 'https://www.facebook.com/johndoe' },
  ];
  return (
    <>
      <div className='absolute w-full flex flex-col items-center justify-end h-[87vh]'>
        <Image src='/cdown.svg' alt='Caret Down' width={32} height={32} />
      </div>
      <div className='flex flex-row justify-between mx-auto mt-20 h-[90vh]'>
        <div className='ml-[10rem] w-[20rem] flex flex-col justify-end'>
          <Image src='/person.png' alt={`Profile picture of ${params.slug}`} width={512} height={512} />
        </div>

        <div className='flex flex-col w-[30rem] mr-[10rem] mt-[8rem] text-right justify-start'>
          <p className='text-5xl font-[800] text-black'>JOHN DOE</p>
          <p className='text-xl text-gray-800'>Investments Analyst (2023 - 2027)</p>

          {/* About them */}
          <p className='text-lg text-gray-800 mt-[1.5rem]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Social Icons */}
          <div className='mt-[2rem] flex justify-end gap-2 w-full'>
            {socials.map((social) => (
              <a key={social.url} href={social.url} target='_blank' rel='noreferrer'>
                <div className='w-[2.5rem] h-[2.5rem] bg-gray-300 rounded-md flex items-center justify-center'></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
