'use client';

import { cn } from '@/lib/utils/utils';
import { Highlight, themes } from 'prism-react-renderer';
import { useEffect, useState } from 'react';

const codeSnippets = [
  {
    language: 'javascript' as const,
    filename: 'dragon.js',
    code: `var ctx = document.getElementById('dragon').getContext('2d');
function dragon(n, dir) {
  if (n == 0) return;
  dragon(n - 1, 1);
  ctx.translate(5, 0); ctx.rotate(1.57079 * dir); ctx.lineTo(0, 0);
  dragon(n - 1, -1);
}
ctx.translate(600, 150); ctx.beginPath(); ctx.moveTo(0, 0);
dragon(13, -1);
ctx.stroke();`,
  },
  {
    language: 'c' as const,
    filename: 'q_rsqrt.c',
    code: `float Q_rsqrt( float number )
{
  long i;
  float x2, y;
  const float threehalfs = 1.5F;

  x2 = number * 0.5F;
  y  = number;
  i  = * ( long * ) &y;                       // evil floating point bit level hacking
  i  = 0x5f3759df - ( i >> 1 );               // what the fuck?
  y  = * ( float * ) &i;
  y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration

  return y;
}`,
  },
  {
    language: 'javascript' as const,
    filename: 'wisdom.js',
    code: `// "Measuring programming progress by lines of code
//  is like measuring aircraft building progress by weight."
//
//  -- Bill Gates

console.log(\`
    ✈️
      __|__
--o--(_)--o--
\`);`,
  },
];

type CodeTerminalProps = {
  isInView: boolean;
};

const CodeTerminal = ({ isInView }: CodeTerminalProps) => {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isInView) return;

    const snippet = codeSnippets[currentSnippet];
    const fullCode = snippet.code;

    if (isTyping) {
      if (displayedCode.length < fullCode.length) {
        const timeout = setTimeout(() => {
          setDisplayedCode(fullCode.slice(0, displayedCode.length + 1));
        }, 20);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait then switch
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Switch to next snippet
      const timeout = setTimeout(() => {
        setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
        setDisplayedCode('');
        setIsTyping(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isInView, currentSnippet, displayedCode, isTyping]);

  const snippet = codeSnippets[currentSnippet];

  return (
    <div
      className={cn(
        'relative mt-16 transition-all duration-1000',
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
      )}
      style={{ transitionDelay: '600ms' }}
    >
      <div className="absolute -inset-1 rounded-xl bg-linear-to-r from-primary/50 via-cyan-500/50 to-primary/50 opacity-75 blur-lg" />
      <div className="absolute -inset-0.5 rounded-xl bg-linear-to-r from-primary via-cyan-500 to-primary opacity-50" />
      <div className="relative rounded-xl border border-primary/30 bg-background/95 backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-muted-foreground">
              {snippet.filename}
            </span>
            <span className="rounded bg-primary/20 px-2 py-0.5 font-mono text-xs text-primary">
              {snippet.language.toUpperCase()}
            </span>
          </div>
          <div className="flex gap-1">
            {codeSnippets.map((_, index) => (
              <div
                key={index}
                className={cn(
                  'h-1.5 w-1.5 rounded-full transition-colors duration-300',
                  index === currentSnippet
                    ? 'bg-primary'
                    : 'bg-muted-foreground/30',
                )}
              />
            ))}
          </div>
        </div>
        <div className="h-92 overflow-hidden p-4">
          <Highlight
            theme={themes.nightOwl}
            code={displayedCode}
            language={snippet.language}
          >
            {({ tokens, getLineProps, getTokenProps }) => (
              <pre
                className="font-mono text-sm leading-relaxed"
                style={{ background: 'transparent' }}
              >
                <code>
                  {tokens.map((line, lineIndex) => (
                    <div
                      key={lineIndex}
                      {...getLineProps({ line })}
                      className="table-row"
                    >
                      <span className="table-cell select-none pr-4 text-right text-muted-foreground/40">
                        {lineIndex + 1}
                      </span>
                      <span className="table-cell">
                        {line.map((token, tokenIndex) => (
                          <span
                            key={tokenIndex}
                            {...getTokenProps({ token })}
                          />
                        ))}
                      </span>
                    </div>
                  ))}
                  {isTyping && (
                    <span className="inline-block h-5 w-2 animate-pulse bg-primary" />
                  )}
                </code>
              </pre>
            )}
          </Highlight>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-b from-transparent via-primary/2 to-transparent" />
      </div>
    </div>
  );
};

export default CodeTerminal;
