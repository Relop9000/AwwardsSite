interface ButtonProps {
  id: string;
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClass?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      id={props.id}
      onClick={props.onClick}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${props.containerClass}`}
    >
      {props.leftIcon && <span className="mr-2">{props.leftIcon}</span>}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        {props.title}
      </span>

      {props.rightIcon && <span className="ml-2">{props.rightIcon}</span>}
    </button>
  );
};

export default Button;
