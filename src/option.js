import './option.css'

function Option({name, onClick, className, onKeyDown, isChecked, hasMore}) {
    return (
        <button 
            value={name} 
            onClick={onClick} 
            className={className}
            onKeyDown={onKeyDown}
            isChecked={isChecked}
            hasMore={hasMore}>
                <span className="material-symbols-outlined" style={isChecked ? {} : {visibility: 'hidden'}}>
                    check
                </span>
                <div style={{textAlign:'left', width:'140px'}}>
                    {name}
                </div>
                <span className="material-symbols-outlined" style={hasMore ? {} : {visibility: 'hidden'}}>
                    chevron_right
                </span>
        </button>
    )
}

export default Option