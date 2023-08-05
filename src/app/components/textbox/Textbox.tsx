import clsx from 'clsx';

type TextBoxProps = {
  classes?: string;
  children: React.ReactNode;
};
const TextBox = ({ classes, children }: TextBoxProps) => {
  return (
    <div
      className={clsx(
        `bg-base-content text-neutral w-fit h-fit box-border p-3 rounded ${classes}`,
      )}
    >
      {children}
    </div>
  );
};

export default TextBox;
