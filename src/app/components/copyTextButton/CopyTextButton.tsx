'use client';

import clsx from "clsx";
import { useState } from "react";

type CopyTextButtonProps = {
  textToCopy: string;
  toolTip?: string;
  children: React.ReactNode;
}

const CopyTextButton = ({ textToCopy, toolTip = 'Copied!', children }: CopyTextButtonProps) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className={clsx(clicked ? "flex tooltip" : "flex")} data-tip={toolTip}>
      <button onClick={() => {
        setClicked(true);
        navigator.clipboard.writeText(textToCopy);
        setTimeout(() => setClicked(false), 1000);
      }}
        onMouseEnter={() => setClicked(true)}
        onMouseLeave={() => setClicked(false)}
        >
        {children}
      </button>
    </div>
  )
}

export default CopyTextButton;