import './option.css'

function Option({name, onClick, className, onKeyDown}) {
    return (
        <button 
            value={name} 
            onClick={onClick} 
            className={className}
            onKeyDown={onKeyDown}>
            {name}
        </button>
    )
}

export default Option