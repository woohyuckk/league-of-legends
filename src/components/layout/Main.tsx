const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="min-h-screen w-full pt-20">{children}</main>;
};

export default Main;
