interface Props {
    type: string,
    className?: string,
    placeholder?: string,
    required?: boolean,
    min?: number,
    max?: number,
    pattern?: string,
    func?: Function
}

export default function Input({className, placeholder, type, required, min, max, pattern, func}: Props) {
    return <input 
        className={className} 
        placeholder={placeholder}
        required={required}
        type={type}
        min={min}
        max={max}
        pattern={pattern}
        onChange={(event) => func(event.target.value)}
    />
}
