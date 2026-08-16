import { Link } from "react-router-dom"

const Button = ({
    children,
    text,
    url,
    onClick,
    className = "",
    type = "button",
    disabled = false,
    ...props
}) => {
    const content = children || text

    const baseClasses =
        "px-4 py-2 rounded-xl font-medium transition-all duration-200 text-center inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none"

    const finalClasses = `${baseClasses} ${className}`
    const isExternal = url && (url.startsWith("http") || url.startsWith("tel:") || url.startsWith("mailto:"))

    if (url && isExternal) {
        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClick}
                className={finalClasses}
                {...props}
            >
                {content}
            </a>
        )
    }

    if (url) {
        return (
            <Link
                to={url}
                onClick={onClick}
                className={finalClasses}
                {...props}
            >
                {content}
            </Link>
        )
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={finalClasses}
            {...props}
        >
            {content}
        </button>
    )
}

export default Button