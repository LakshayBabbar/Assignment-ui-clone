const ContainerSection = ({ children, title, desc, btnLink, btnTitle }) => {
  return (
    <section className="flex flex-col w-full items-center py-20">
      <div className="w-4/5 space-y-4">
        <div className="flex justify-between w-full">
          <h1 className="text-3xl font-bold font-serif">{title}</h1>
          {btnTitle && (
            <a
              href={btnLink}
              target="_blank"
              className="bg-amber-400 border border-black px-4 py-2 rounded-md text-sm hidden md:block"
            >
              <button>{btnTitle}</button>
            </a>
          )}
        </div>
        <p className="text-md">{desc}</p>
        {children}
      </div>
    </section>
  );
};

export default ContainerSection;
