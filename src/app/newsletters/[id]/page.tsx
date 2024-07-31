import Image from 'next/image';
import Link from 'next/link';
import data from '../../../../newsletters.json';

type Newsletter = {
  id: string;
  image: string;
  date: string;
  title: string;
  content: string;
};

export default function NewsletterPage({ params }: { params: { id: string } }) {
  const newsletter: Newsletter | undefined = data.find((n) => n.id === params.id);

  if (!newsletter) return <p>Newsletter not found!</p>;

  return (
    <div>
      <div className='text-center mt-10'>
        <h1 className='text-3xl font-bold'>{newsletter.title}</h1>
        <p className='text-sm text-gray-600'>{newsletter.date}</p>
      </div>

      <div className='flex flex-col items-center mt-6'>
        <div className='w-full max-w-4xl'>
          {/* Assuming you want to maintain the aspect ratio of the image */}
          <Image
            src={newsletter.image}
            alt={newsletter.title}
            width={800} // You might want to dynamically set these based on the image's actual dimensions
            height={450}
            layout='responsive'
            objectFit='contain'
            className='rounded-md'
          />
        </div>

        <div className='w-full max-w-4xl mt-4 px-2'>
          <p className='text-lg text-gray-800'>{newsletter.content}</p>
        </div>
      </div>
    </div>
  );
}
