import Link from "next/link";
import CopyTextButton from "../components/copyTextButton/CopyTextButton";
import ImageWithLink from "./components/ImageWithLink";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center m-5">
      <div className="m-5 md:w-fit max-w-2xl p-5 bg-computer-background bg-cover rounded-lg min-h-[50vh]">
        <div className="flex flex-col gap-2 justify-center text-center glassMorphism p-5 rounded-md text-primary-content font-bold">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text animate-gradient bg-300% underline underline-offset-4">Feel free to reach out!</h1>
          <div>Do you love tacky colours and 90s graphics? Fear not, you have your developer 🔥</div>
          <div>But seriously if you want to discuss IT, jobs, web application ideas, Leeds United or anything at all. Contact me through one of the methods below!</div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <CopyTextButton textToCopy="nzryland@gmail.com" toolTip="Copy Email">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
              </svg>
            </CopyTextButton>
            <ImageWithLink link="https://github.com/jRyGithub" src="/github-mark-white.png" alt="Github Logo" width={24} height={24} />
            <ImageWithLink link="https://www.linkedin.com/in/joshua-ryland/" src="/LI-In-Bug.png" alt="LinkedIn Logo" width={24} height={24} />
          </div>
          <div className="w-100 h-0 pb-[56%] relative"><iframe src="https://giphy.com/embed/ZZiLDJ98R2GOY" width="100%" height="100%" className="absolute giphy-embe" frameBorder="0" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/funny-random-house-ZZiLDJ98R2GOY">via GIPHY</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;