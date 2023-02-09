import { useNavigate, useParams } from "react-router-dom";
import { requestPost, AlertError, AlertToast } from "../../../../Helpers";
import { useDataCollectionRequest, useFetch_RequestGet } from "../../../../Hooks";
import {UploadFile} from "./Components/UploadFile";
import {CreateFile} from "./Components/CreateFile";
import {SearchFile} from "./Components/SearchFile";
import {GenerateFileList} from "./Components/GenerateFileList";



export const Sidebar = () => {



    return (
        <div className="d-flex flex-column w-100">

            <div className={'d-flex justify-content-center gap-2 w-auto m-2 '} style={{height: '40px'}} >
                <SearchFile />
                <CreateFile />
                <UploadFile />
            </div>

            <div>
                <GenerateFileList  />
            </div>
        </div>
    )
}