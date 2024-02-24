import Sidebar from "./_components/Sidebar/Sidebar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-col h-full w-full">
      <Sidebar />
      <div className="ml-20 h-full">{children}</div>
    </div>
  );
};

export default DashBoardLayout;
