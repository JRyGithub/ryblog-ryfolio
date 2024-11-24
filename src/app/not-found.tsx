import Spline from "@splinetool/react-spline";


export default function NotFound() {
  return (
       <main className="flex min-h-screen flex-col items-center justify-center">
         <div className="h-screen w-screen relative">
           <div className="absolute m-4 md:m-10 text-white text-md font-thin flex flex-col gap-1">
             <span>Joshua Ryland</span>
             <span className='italic'>Lead Software Developer</span>
           </div>
           <div className="absolute bottom-2 right-0 w-44 h-12 bg-[#1c232b]" />
           <Spline
             className='h-full'
             scene="https://prod.spline.design/zgSriR078vW2ueYZ/scene.splinecode" 
           />
         </div>
       </main>
  );
}
