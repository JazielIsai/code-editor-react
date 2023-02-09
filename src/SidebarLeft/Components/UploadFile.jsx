import {useRef} from "react";
import {AiOutlineCloudUpload} from 'react-icons/ai';


export const UploadFile = () => {

    const refInput = useRef(null);

    const handleUpload = () => {
        refInput.current.click();
    }

    const handleOnChange = (e) => {
        console.log(e.target.files);
    }

    return(
        <div>
            <button className={'m-0 p-0 border-1 bg-white '} onClick={handleUpload} >
                <AiOutlineCloudUpload className={'fs-3 '} />
            </button>
            <input ref={refInput} type="file" id="" style={{display: 'none'}} multiple onChange={handleOnChange} name="upload_file[]" />
        </div>
        
    )
}