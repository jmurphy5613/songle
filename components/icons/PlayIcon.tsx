
interface PlayIconProps {
    stroke: string
}

const PlayIcon: React.FC<PlayIconProps> = ({ stroke }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2111 11.1056L9.73666 7.86833C8.93878 7.46939 8 8.04958 8 8.94164V15.0584C8 15.9504 8.93878 16.5306 9.73666 16.1317L16.2111 12.8944C16.9482 12.5259 16.9482 11.4741 16.2111 11.1056Z" stroke={stroke} stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="12" cy="12" r="9" stroke={stroke} />
        </svg>

    )
}

export default PlayIcon