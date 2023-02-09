import {useContext, useState} from "react";
import {ScriptContext} from "../../Context/ScriptContext";
import {AlertSelect} from "../../../../../Helpers";


export const Theme = ({nameClass}) => {



    const {setTheme} =useContext(ScriptContext);



    const options ={
        'light':'Light',
        'vs-dark':'VS-Dark',
        'Cobalt':'Cobalt'
    }

    const handleOnClick = () =>{
        AlertSelect('Select Color Theme', options)
            .then(res=>{
                if(res.isConfirmed){
                    setTheme(res.value)
                }

            })
            .catch(err=>{
                console.log(err);
            })
    }





    return (
        <button className={nameClass} onClick={handleOnClick}>
            Theme
        </button>
    )
}