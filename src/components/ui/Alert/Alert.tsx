import { FC } from "react"

interface AlertProps {
  className?: string
}

export const Alert: FC<AlertProps> = ({ children, className }) => {
  return (
    <div className="shadow-lg alert">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="shrink-0 w-6 h-6 stroke-info"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <h3 className="font-bold">New message!</h3>
          <div className="text-xs">You have 1 unread message</div>
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-sm">See</button>
      </div>
    </div>
  )
}
