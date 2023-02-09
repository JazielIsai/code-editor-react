import {useState, useEffect, useMemo, useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { requestPost, AlertError, AlertToast } from "../../../../Helpers";
import { useFetch_RequestGet } from "../../../../Hooks";
import {MonacoEditorCode} from "./MonacoEditorCode";


export const VisualCode = ({configNode}) => {

    const { node_id, language, name_file } = useParams();


    const {data: getContentScript} = useFetch_RequestGet(`services.php?serviceName=get_script_node_content_by_node_file_id&node_files_info_id=${configNode?.dataFile?.node_files_info_id}`);

    const [ getContent, setContent ] = useState('');

    useEffect(() => {
        console.log('configNode -> ', configNode)

        console.log("getContentScript -> ", getContentScript);
        if (getContentScript !== null) {
            setContent(getContentScript?.content);
        }

    }, [getContentScript, node_id, configNode]);

    return (
        <div className='d-flex flex-column vs-code'>

            <MonacoEditorCode
                defaultValueCode={ getContent }
                infoToSaveCode = { configNode }
                language = { configNode?.dataFile?.file_format }
                height={'90vh'}
            />

        </div>
    )
}