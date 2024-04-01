import "./NoPage.css";

export default function NoPage() {
  return (
    <>
      <div className="page-container lg:w-auto font-sans bg-gray-200 flex justify-center items-center h-screen select-none">
        <h2 className="p-5 rounded-lg bg-black text-gray-300 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
          Error 404: Not Found
        </h2>
      </div>
    </>
  );
}
