// newsletters.js or newsletters.tsx
import NewsletterPreview, { Newsletter } from '@/components/NewsletterPreview';
import newsletters from '../../../newsletters.json'; // adjust the path as necessary

const NewslettersPage = () => {
  return (
    <div className='mt-8'>
      <h1 className='text-4xl font-bold text-center mt-8 mb-4'>All Newsletters</h1>
      <div className='flex flex-col mx-4 sm:mx-12 md:max-w-[85ch] md:mx-auto md:px-4 gap-4'>
        {newsletters.map((newsletter: Newsletter) => (
          <div key={newsletter.id}>
            <NewsletterPreview newsletter={newsletter} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewslettersPage;
