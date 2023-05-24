import './menu.css'
import Option from './option.js'
import {useState} from 'react'


function Menu() {

    //states
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [isMyInputFocused, setIsMyInputFocused] = useState(false);
    const onBlur = () => {setIsMyInputFocused(false);console.log('blur');}
    const onFocus = () => {setIsMyInputFocused(true);console.log('focus');}
    
    // function handling options hide/show
    function switchFocus() {
        if(!isMyInputFocused){
            onFocus()
        }else{
            onBlur()
        }
    }

    // function handling keypress
    function keyPressHandler(event){
        if(selectedIndex === -1){return;}

        if(event.key === 'ArrowUp'){
            setSelectedIndex((selectedIndex + 5) % 6);
        }
        else if (event.key === 'ArrowDown') {
            setSelectedIndex((selectedIndex + 1) % 6);
        }else if (event.key === 'Escape') {
            setIsMyInputFocused(false);
            setSelectedIndex(-1);
        }
    }

    return (
        <div id="box">
            <button id='click-show' 
                    onClick={switchFocus}
                    onKeyDown={(event) => keyPressHandler(event)}
            >
                Options
                <span className="material-symbols-outlined">
                    expand_more
                </span>
            </button>
            {isMyInputFocused ?
            <div id='option-box'>
                {/* a better option is to use map() function*/}
                <Option name='New Tab' 
                    onClick={() => {setSelectedIndex(0);console.log(0)}}
                    onKeyDown={(event) => {keyPressHandler(event)}}
                    className={selectedIndex===0 ? 'option selected' : 'option'}
                />
                <Option name='New Window' 
                    onClick={() => {setSelectedIndex(1);console.log(1)}}
                    onKeyDown={(event) => {keyPressHandler(event)}}
                    className={selectedIndex===1 ? 'option selected' : 'option'}
                />

                <hr />

                <Option name='Favorites' 
                    onClick={() => {setSelectedIndex(2);console.log(2)}}
                    onKeyDown={(event) => {keyPressHandler(event)}}
                    className={selectedIndex===2 ? 'option selected' : 'option'}
                    hasMore={true}
                />
                <Option name='Downloads' 
                    onClick={() => {setSelectedIndex(3);console.log(3)}}
                    onKeyDown={(event) => {keyPressHandler(event)}}
                    className={selectedIndex===3 ? 'option selected' : 'option'}
                />

                <hr />

                <Option name='Show Toolbar' 
                    onClick={() => {setSelectedIndex(4);console.log(4)}}
                    onKeyDown={(event) => {keyPressHandler(event)}}
                    className={selectedIndex===4 ? 'option selected' : 'option'}
                    isChecked={true}
                />
                <Option name='Show Full URLs' 
                    onClick={() => {setSelectedIndex(5);console.log(5)}}
                    onKeyDown={(event) => {keyPressHandler(event)}}
                    className={selectedIndex===5 ? 'option selected' : 'option'}
                />
            </div>
            :
            <div></div>}
        </div>
    )
}

export default Menu
