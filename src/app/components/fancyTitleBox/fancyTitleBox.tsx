import Image from "next/image";
import TextLink from "../textLink/textLink";
import { isMobile } from "react-device-detect";
type FancyTitleBoxProps = {
  imgHref: string;
};

const FancyTitleBox = (props: FancyTitleBoxProps) => {

  return (
    <div className="flex flex-row gap-5 h-fit justify-between md:bg-neutral p-5 bg-profile-photo-bw bg-cover md:bg-none md:rounded-md">
      <div className="
      flex 
      flex-col 
      justify-start 
      w-64
      p-3 
      md:p-0
      text-primary-content
      glassMorphism
      md:glassMorphism-none
      ">
        <div className="flex flex-row items-start font-sans">
          <span className="text-9xl font-bold mr-[0.5rem] mt-[-0.15em] text-primary">P</span>
          <span className="flex flex-col justify-even h-full">
            <span className="text-3xl md:text-4xl">ORTFOLIO</span>
            <span className="text-3xl md:text-4xl">TIMELINE</span>
          </span>
        </div>
        <div className="italic">
          Check out my portfolio timeline below and click on what interests you, <TextLink href='/contact'><span className="underline decoration-secondary">contact</span></TextLink> me if you have any questions!
        </div>
      </div>
      <Image
        src={props.imgHref}
        alt="Picture of the author"
        width={200}
        height={200}
        className="grayscale hidden md:block" />
    </div>
  );
};
export default FancyTitleBox;