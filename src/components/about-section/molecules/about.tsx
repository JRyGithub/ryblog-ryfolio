import { AboutSectionCopy } from '../about-section.props';

const About = () => {
  return (
    <div>
      <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-primary">
        About
      </h2>
      <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
        {AboutSectionCopy.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default About;
