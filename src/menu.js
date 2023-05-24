import './menu.css'
import Option from './option.js'
import SubOption from './sub_option';
import {useState} from 'react'
import GitHubLogo from './res/svgs/Github.js'
import StitchesLogo from './res/svgs/Stitches.js'
import TwitterLogo from './res/svgs/Twitter.js'


function Menu() {

    //states
    const [isMyInputFocused, setIsMyInputFocused] = useState(false);
    const [isSubmenuFocused, setIsSubmenuFocused] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [selectedSubIndex, setSelectedSubIndex] = useState(-1);

    const onBlur = () => {
        setIsMyInputFocused(false);
        setSelectedIndex(-1);
        console.log('blur');
    }

    const onFocus = () => {
        setIsMyInputFocused(true);
        console.log('focus');
    }
    
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
        if (!isMyInputFocused){
            return;
        }

        if (selectedIndex === -1 && (event.key === 'ArrowUp' || event.key === 'ArrowDown')){
            setSelectedIndex(0);
            return;
        }

        if (!isSubmenuFocused) {
            if (event.key === 'ArrowUp') {
                setSelectedIndex((selectedIndex + 5) % 6);
            }else if (event.key === 'ArrowDown') {
                setSelectedIndex((selectedIndex + 1) % 6);
            }else if (event.key === 'Escape') {
                setIsMyInputFocused(false);
                setSelectedIndex(-1);
            }else if (event.key === 'ArrowRight' || event.key === 'Enter') {
                setIsSubmenuFocused(true);
                setSelectedSubIndex(0);
            }
        }else if (selectedIndex === 2){
            if (event.key === 'ArrowUp') {
                setSelectedSubIndex((selectedSubIndex + 2) % 3);
            }else if (event.key === 'ArrowDown') {
                setSelectedSubIndex((selectedSubIndex + 1) % 3);
            }else if (event.key === 'Escape' || event.key === 'ArrowLeft') {
                setSelectedSubIndex(-1);
                setIsSubmenuFocused(false);
            }
        }

        if (selectedIndex != 2){
            setSelectedSubIndex(-1);
            setIsSubmenuFocused(false);
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
                    onClick={() => {setSelectedIndex(0);}}
                    onKeyDown={(event) => {keyPressHandler(event)}}
                    className={selectedIndex===0 ? 'option selected' : 'option'}
                />
                <Option name='New Window' 
                    onClick={() => {setSelectedIndex(1);}}
                    onKeyDown={(event) => {keyPressHandler(event)}}
                    className={selectedIndex===1 ? 'option selected' : 'option'}
                />

                <hr />

                <Option name='Favorites' 
                    onClick={() => {
                        setSelectedIndex(2);
                        setIsSubmenuFocused(true);
                    }}
                    onKeyDown={(event) => {keyPressHandler(event)}}
                    className={selectedIndex===2 ? 'option selected' : 'option'}
                    hasmore={true}
                />
                <Option name='Downloads' 
                    onClick={() => {setSelectedIndex(3);}}
                    onKeyDown={(event) => {keyPressHandler(event)}}
                    className={selectedIndex===3 ? 'option selected' : 'option'}
                />

                <hr />

                <Option name='Show Toolbar' 
                    onClick={() => {setSelectedIndex(4);}}
                    onKeyDown={(event) => {keyPressHandler(event)}}
                    className={selectedIndex===4 ? 'option selected' : 'option'}
                    ischecked={true}
                />
                <Option name='Show Full URLs' 
                    onClick={() => {setSelectedIndex(5);}}
                    onKeyDown={(event) => {keyPressHandler(event)}}
                    className={selectedIndex===5 ? 'option selected' : 'option'}
                />
            </div>
            :
            <div></div>}
            {selectedIndex === 2 && isSubmenuFocused?
            <div id='sub-option-box'>
                <SubOption 
                    className={selectedSubIndex === 0 ? 'sub-option selected' : 'sub-option'}
                    onClick={() => {
                        setSelectedSubIndex(0);
                        console.log(`sub${selectedSubIndex}, main${selectedIndex}, ${isSubmenuFocused.toString()}`)
                    }}
                    name='GitHub' 
                    icon={<GitHubLogo color={selectedSubIndex === 0 ? 'white' : 'black'}/>}
                />
                <SubOption 
                    className={selectedSubIndex === 1 ? 'sub-option selected' : 'sub-option'}
                    onClick={() => {
                        setSelectedSubIndex(1);
                        console.log(`sub${selectedSubIndex}, main${selectedIndex}, ${isSubmenuFocused.toString()}`)
                    }}
                    name='Stitches' 
                    icon={<StitchesLogo color={selectedSubIndex === 1 ? 'white' : 'black'}/>}
                />
                <SubOption 
                    className={selectedSubIndex === 2 ? 'sub-option selected' : 'sub-option'}
                    onClick={() => {
                        setSelectedSubIndex(2);
                        console.log(`sub${selectedSubIndex}, main${selectedIndex}, ${isSubmenuFocused.toString()}`)
                    }}
                    name='Twitter' 
                    icon={<TwitterLogo color={selectedSubIndex === 2 ? 'white' : 'black'}/>}
                />
            </div>
            :
            <div></div>
            }
        </div>
    )
}

export default Menu
