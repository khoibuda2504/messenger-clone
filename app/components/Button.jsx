'use client'
import clsx from 'clsx'
interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode
  onClick?: () => void
  secondary?: boolean
  danger?: Boolean
  disabled?: boolean
}
export default function Button({ }: ButtonProps) {
  return (
    <div>
      Hello Button
    </div>
  )
}
