import TextLink from "./components/textLink/textLink";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <main className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 flex h-screen w-full items-center justify-center rounded-md bg-gradient-to-bl from-base-100 from-1% via-base-200 to-base-300 to-90% drop-shadow-md md:h-[65vh] md:w-[70rem]">
        <div className="flex h-full w-full flex-col justify-between box-border p-4 text-content">
          <div className="flex flex-col justify-start">
            <div className="flex flex-row justify-between">
              <div>
                <h6 className="text-left text-base font-bold leading-none">
                  Joshua
                </h6>
                <h6 className="text-left text-base font-bold leading-none">
                  Ryland
                </h6>
              </div>
              <div>
                <h6 className="text-right text-base font-bold leading-none">
                  <div className="flex flex-row justify-end items-center content-baseline gap-x-1">
                    My Timeline
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-center font-bold leading-none text-5xl">
              Just another developer portfolio...
            </h3>
            <h3 className="text-center font-bold leading-none text-5xl">
              and a <TextLink href="blog">blog.</TextLink>
            </h3>
          </div>
          <div className="flex flex-row justify-between">
            <div className="p flex flex-col justify-start pb-2">
              <h6 className="text-left text-base font-bold leading-none">
                Paris, France
              </h6>
              <h6 className="mb-0 text-left text-base font-bold leading-none">
                London, England
              </h6>
              <h6 className="mb-0 text-left text-base font-bold leading-none">
                Remote, My Study
              </h6>
            </div>
            <div className="p flex flex-col justify-start pb-2">
              <h6 className="text-right text-base font-bold leading-none">
                Full Stack Developer
              </h6>
              <h6 className="mb-0 text-right text-base font-bold leading-none">
                Software Engineer
              </h6>
              <h6 className="mb-0 text-right text-base font-bold leading-none">
                Project Management
              </h6>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
