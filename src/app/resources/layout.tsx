const ResourcesLayout: React.FC = ({
  children,
}: React.PropsWithChildren<{}>) => {
  return (
    <p className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 font-medium text-xl">
      Coming soon!
    </p>
  );
  // return <main className='mt-[12vh] mx-4 sm:mx-20 md:max-w-[110ch] md:mx-auto md:px-4'>{chi/ldren}</main>;
  return (
    <main className="mt-[12vh] mx-4 sm:mx-20 md:max-w-[110ch] md:mx-auto md:px-4">
      {children}
    </main>
  );
};

export default ResourcesLayout;
