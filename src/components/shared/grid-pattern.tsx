type GridPatternProps = {
  scrollY: number;
};

const GridPattern = ({ scrollY }: GridPatternProps) => {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        transform: `translateY(${scrollY * 0.1}px)`,
      }}
    />
  );
};

export default GridPattern;
