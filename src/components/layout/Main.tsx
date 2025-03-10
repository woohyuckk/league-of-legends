const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="w-full h-screen pt-20">{children}</main>;
};

export default Main;
