const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-neutral-950">
      {children}
    </div>
  );
};

export default AuthLayout;
