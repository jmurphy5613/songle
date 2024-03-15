

interface BookIconProps {
    stroke: string
}

const BookIcon: React.FC<BookIconProps> = ({ stroke }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6663 10V13.5C16.6663 15.3856 16.6663 16.3284 16.0806 16.9142C15.4948 17.5 14.552 17.5 12.6663 17.5H5.41634C4.26575 17.5 3.33301 16.5673 3.33301 15.4167V15.4167C3.33301 14.2661 4.26575 13.3333 5.41634 13.3333H12.6663C14.552 13.3333 15.4948 13.3333 16.0806 12.7475C16.6663 12.1618 16.6663 11.219 16.6663 9.33333V6.5C16.6663 4.61438 16.6663 3.67157 16.0806 3.08579C15.4948 2.5 14.552 2.5 12.6663 2.5H7.333C5.44739 2.5 4.50458 2.5 3.91879 3.08579C3.33301 3.67157 3.33301 4.61438 3.33301 6.5V15.4167" stroke={stroke} />
            <path d="M7.5 6.6665L12.5 6.6665" stroke={stroke} stroke-linecap="round" />
        </svg>

    )
}

export default BookIcon