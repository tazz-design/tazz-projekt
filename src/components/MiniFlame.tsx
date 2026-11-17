import { useId } from 'react'

type MiniFlameProps = {
  size?: number
  delay?: number
  className?: string
}

export default function MiniFlame({ size = 18, delay = 0, className = '' }: MiniFlameProps) {
  const gradientId = useId()

  return (
    <span
      data-flame-icon
      aria-hidden="true"
      className={`relative inline-block shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <span
        className="absolute inset-0 rounded-full bg-ember-500/60 blur-[5px]"
        style={{ animation: `flame-glow 1.6s ease-in-out ${delay}ms infinite` }}
      />
      <svg
        viewBox="0 0 24 24"
        className="relative h-full w-full"
        style={{ transformOrigin: '50% 95%', animation: `flame-dance 1.8s ease-in-out ${delay}ms infinite` }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#b3141d" />
            <stop offset="55%" stopColor="#f9722f" />
            <stop offset="100%" stopColor="#ffd84d" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${gradientId})`}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.177A7.547 7.547 0 0 1 6.648 6.61a.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1.004a.75.75 0 0 0 .944-.95 4.5 4.5 0 0 1-.577-2.01 1.5 1.5 0 0 1 1.5-1.5c.008.011.015.023.022.034a2.25 2.25 0 0 1 3.513-.057.75.75 0 0 0 .906.17 3.75 3.75 0 0 1 3.75 3.75Z"
        />
      </svg>
    </span>
  )
}
