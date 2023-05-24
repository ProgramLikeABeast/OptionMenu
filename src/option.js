import './option.css'

function Option({name, onClick, className, onKeyDown, ischecked, hasmore}) {
    return (
        <button 
            value={name} 
            onClick={onClick} 
            className={className}
            onKeyDown={onKeyDown}
            ischecked={ischecked}
            hasmore={hasmore}>
                <span className="material-symbols-outlined" style={ischecked ? {} : {visibility: 'hidden'}}>
                    check
                </span>
                <div style={{textAlign:'left', width:'140px'}}>
                    {name}
                </div>
                <span className="material-symbols-outlined" style={hasmore ? {} : {visibility: 'hidden'}}>
                    chevron_right
                </span>
        </button>
    )
}

export default Option