import Image from "next/image";
import TextLink from "../textLink/textLink";

type FancyTitleBoxProps = {
  imgHref: string;
};

const FancyTitleBox = (props: FancyTitleBoxProps) => {
  return (
    <div className="flex flex-row gap-5 h-fit justify-between bg-neutral-content p-5">
      <div className="flex flex-col justify-start w-64">
        <div className="flex flex-row items-start font-sans">
          <span className="text-9xl font-bold mr-[0.5rem] mt-[-0.15em] text-accent">P</span>
          <span className="flex flex-col justify-even h-full">
            <span className="text-4xl">ORTFOLIO</span>
            <span className="text-4xl">TIMELINE</span>
          </span>
        </div>
        <div className="italic">
          Check out my portfolio timeline below and click on what interests you, <TextLink href='/contact'>contact</TextLink> me if you have any questions!
        </div>
      </div>
      <Image
        src={props.imgHref}
        alt="Picture of the author"
        width={200}
        height={200}
        className="grayscale"/>
    </div>
  );
};
export default FancyTitleBox;