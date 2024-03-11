
import Navbar from "./_components/Navbar";
import Projects from "./_components/Projects/Projects";
import Welcome from "./_components/Welcome";

interface DashBoardLayoutProps {
  params: {
    userId: string;
  };
}
const DashBoardLayout = async ({ params }: DashBoardLayoutProps) => {
  return (
    <div className="dark:bg-neutral-900 bg-neutral-200 text-black dark:text-white h-full">
      <Navbar />
      <Welcome />

      <div className=" h-full">
        <Projects />
      </div>
    </div>
  );
};

export default DashBoardLayout;
