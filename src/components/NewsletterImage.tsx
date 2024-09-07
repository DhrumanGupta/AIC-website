const NewsletterImage = ({ children, slug, src, alt, ...props }: any) => {
  const realSrc = `/newsletters/${slug}/${src.substring(2, src.length)}`;

  return (
    <div className=" w-auto h-auto relative rounded-lg -mt-8 -mb-8 overflow-hidden">
      <img
        className="w-[90%] md:w-[85%] mx-auto border-2 border-black dark:border-white"
        src={realSrc}
        alt={alt}
      />
      <p className="italic text-center mt-2">{alt}</p>
    </div>
  );
};

export default NewsletterImage;
