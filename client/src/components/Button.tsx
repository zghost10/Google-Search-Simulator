import { FC, ReactNode } from "react";

type Props = {
  className?: string
  children?: ReactNode
  submit?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: FC<Props> = ({className, children, onClick, submit}) => {
  return (
    <button 
      onClick={onClick}
      type={submit ? "submit" : "button"}
      className={`
        ${className}
        flex justify-center items-center px-[1.1rem] pt-[0.44rem] pb-[0.6rem] rounded-[4px]
        bg-[#303134] border border-transparent hover:border-zinc-600
        text-sm
      `}
    >
      {children}
    </button>
  )
}