import Image from 'next/image'

interface LogoProps {
    className?: string
    size?: number
}

export function Logo({ className = "", size = 48 }: LogoProps) {
    return (
        <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
            <Image
                src="/st-brazil-logo.jpg"
                alt="Superteam Brazil Logo"
                fill
                className="object-contain rounded-xl"
                priority
            />
        </div>
    )
}
