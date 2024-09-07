const ResourcesLayout: React.FC = ({
  children,
}: React.PropsWithChildren<{}>) => {
  return <main className="mt-[10vh] max-w-[110ch] mx-auto">{children}</main>;
};

export default ResourcesLayout;
