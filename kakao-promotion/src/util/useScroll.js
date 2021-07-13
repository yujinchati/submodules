import { useState , useEffect } from 'react';

const useScroll = () => {
    const [position,setPosition] = useState(0);
    const [spark,setSpark] = useState(false);
    const [scrollActive,setScrollActive] = useState(false); 

    const onScroll = () => {
        setPosition(window.scrollY);
        if(window.scrollY > (window.innerHeight *0.2)){
            setScrollActive(true);
        }else{
            setScrollActive(false);
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setSpark(true);
        }, 1000); 
        window.addEventListener("scroll",onScroll);
        return() =>{
            window.removeEventListener('scroll',onScroll);
        }
    },[]);
    return{
        position,spark,scrollActive
    }
};

export default useScroll;