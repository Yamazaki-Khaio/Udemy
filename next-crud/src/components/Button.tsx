interface ButtonProps {
    color?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${props.color}-400 to-${props.color}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}