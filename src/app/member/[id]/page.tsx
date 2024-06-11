import Image from 'next/image';
import Link from 'next/link';
import data from '../../../../output.json';
import { SocialIcon } from 'react-social-icons';

function getGoogleDriveImageLink(id: string, size: number = 1080) {
  return `https://lh3.googleusercontent.com/d/${id}=s${size}`;
}

type Member = {
  ID: string;
  name: string;
  about_me: string;
  position: string;
  linkedin: string;
  website: string;
  top_stocks: string[];
  internships: string[];
  stock_pitch: string[];
  book_review: string[];
  photo: string;
};

export default function MemberPage({ params }: { params: { id: string } }) {
  const member: Member | undefined = data.find((p) => p.ID === params.id);

  if (!member) return <p>Member not found!</p>;

  const socials = [
    { name: 'LinkedIn', url: member.linkedin },
    { name: 'Website', url: member.website },
  ];
  return (
    <>
      {/* Background */}
      <div className='absolute w-full flex flex-col items-center justify-end h-screen -mt-[15vh] z-[-1] bg-[radial-gradient(var(--tw-gradient-stops))] from-20% to-70% from-white to-neutral-100'>
        <div className='w-8 h-8 2xl:w-12 2xl:h-12 mb-[3vh]'>
          <Image src='/cdown.svg' alt='Caret Down' width={64} height={64} />
        </div>
      </div>

      {/* Foreground */}
      <div className='flex flex-col sm:flex-row sm:justify-between mx-auto h-[85vh] mt-[15vh] w-full sm:w-4/5 md:w-4/5'>
        <div className='max-h-[80vh] mx-auto sm:m-0 w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[25vw] flex flex-col self-end overflow-hidden'>
          <Image src={getGoogleDriveImageLink(member.photo)} alt={`Profile picture of ${params.id}`} width={256} height={256} layout='responsive' />
          {/* <Image src='/person.png' alt={`Profile picture of ${params.id}`} width={256} height={256} layout='responsive' /> */}
        </div>

        <div className='flex flex-col mx-auto w-[90vw] sm:mx-0 sm:w-[60vw] md:w-[70vw] lg:w-[35vw] text-center sm:text-right justify-start sm:mt-[7.5%] gap-1'>
          <div className='border-2 border-neutral-600 sm:border-0 rounded-lg sm:rounded-none p-2 sm:p-0'>
            <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold text-black'>{member.name}</p>
            <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-medium text-gray-800'>{member.position}</p>
          </div>

          <p className='text-base sm:text-lg md:text-xl lg:text-lg 2xl:text-2xl text-gray-800 mt-[0.75rem] sm:mt-[1.5rem]'>{member.about_me}</p>

          <div className='mt-[0.75rem] sm:mt-[2rem] flex justify-center sm:justify-end gap-2 md:gap-3 lg:gap-4 2xl:gap-8 w-full'>
            {socials
              .filter((social) => social.url)
              .map((social) => (
                <SocialIcon
                  url={social.url}
                  key={social.url}
                  // bgColor='transparent'
                  // fgColor='black'
                  style={{ height: 48, width: 48 }}
                  target='_blank'
                  rel='noreferrer'></SocialIcon>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
