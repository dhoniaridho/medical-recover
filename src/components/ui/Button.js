import classNames from "classnames"

export default function Button (props) {
    const {children, type, className} = props
    const buttonClass = classNames('px-5 py-2 font-semibold text-sm', className,{
        'bg-red-500 text-white hover:bg-red-600 border border-red-500' : type === 'primary',
        'bg-white text-red-500 border-red-500 border hover:bg-red-500 hover:text-white' : type === 'secondary',
    })
    return (
        <button className={buttonClass}>
            {children}
        </button>
    )
}