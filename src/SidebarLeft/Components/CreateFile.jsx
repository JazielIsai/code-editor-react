import {useContext, useRef, useState} from "react";
import {ScriptContext} from "../../Context/ScriptContext";
import {AiOutlineFileAdd} from 'react-icons/ai';
import {AlertText} from "../../../../../Helpers/Alerts/AlertText";
import {CreateNewFile} from "../../helpers/createNewFile";


export const CreateFile = () => {

    const [name, setName] = useState('');

    const {addTab} = CreateNewFile();

    const handleOnChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);

    }

    const handleCreateFile = (e) => {
        addTab(e, '/', 'name');
    }

    return(
        <div>
            <button
                className={'m-0 p-0 border-1 bg-white'}
                onClick={handleCreateFile}
            >
                <AiOutlineFileAdd className={'fs-3 '} />
            </button>
        </div>

    )
}