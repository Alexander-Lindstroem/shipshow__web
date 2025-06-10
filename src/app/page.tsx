import Introduction from "@/components/Introduction";

const Home = () =>  {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-20 z-10">
        <main className="flex flex-col gap-8 items-center text-center">
          <Introduction />
        </main>
      </div>
  );
}

export default Home