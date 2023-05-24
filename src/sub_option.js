import './sub_option.css'

function SubOption({name, onClick, className, onKeyDown, icon}) {
    return (
        <button 
            value={name} 
            onClick={onClick} 
            className={className}
            onKeyDown={onKeyDown}>
                <div style={{marginRight:'5px'}}>
                    {icon}
                </div>
                {name}
        </button>
    )
}

export default SubOption