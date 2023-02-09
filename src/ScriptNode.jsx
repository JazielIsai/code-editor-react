import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { requestPost, AlertError, AlertToast } from '../../../Helpers';
import { useFetch_RequestGet } from '../../../Hooks';

import {LayoutCode} from "./Layout/LayoutCode";
import {ScriptProvider} from "./Context/ScriptProvider";

export function ScriptNode ({fetchNodeType}) {

    const {existingNodeId} = useParams();

    const {data: getScript} = useFetch_RequestGet(`services.php?serviceName=get_node_file_info_from_db&node_id=${existingNodeId}`);

    const [changeFile, setChangeFile] = useState(false);
    const [changeLanguage, setChangeLanguage] = useState('');
    
    const [changeCode, setChangeCode] = useState('');
    const [getFileScript, setFileScript] = useState(null);
    
    const [defaultValueCode, setDefaultValueCode] = useState('');
   
    useEffect(() => {
        //load data if exist
        // setDefaultValueCode(getScript?.content)

        //setJsonModel(Model.fromJson(jsonVisualCode));

    }, []);

    const handleRadioButton = () => {
        setChangeFile(!changeFile);
    }

    const captureTypeLanguage = (e) => {
        setChangeLanguage(e.target.value);
        console.log(e.target.value);
    }

    const hanldeFilesOnChange = (event) => {
        console.log("files: ", event.target.files);
        console.log("files[0]: ", event.target.files[0]);

        setFileScript(event.target.files[0]);
    }

    const handleSaveCode = (e) => {
        e.preventDefault();
        // it is building the formData and his body for request to db
        const formData = new FormData();

        const bodyRequest = {
            "node_id": parseFloat(existingNodeId),
            "language": changeLanguage,
            "code": `${changeCode}`,
            "type": getScript?.info === null || getScript === null ? changeFile ? "file" : "code" : getScript?.info?.upload_method
        };
        // it is checking that option choose the user
        if(changeLanguage !== undefined && changeLanguage !== "" && changeLanguage !== null) {
            if(changeFile){
                formData.append('script_info', JSON.stringify(bodyRequest))
                formData.append('script_file', getFileScript);
            } else {
                formData.append('script_info', JSON.stringify(bodyRequest))
            }
            // it is sending the request to db
            requestPost('services.php?serviceName=save_script_for_node', formData)
                .then(response => {
                    AlertToast('Has been saved successfully.');
                 })
                 .catch(err => {
                    AlertError('ERROR', 'Error saving script: ' + err.message);
                 })
        } else {
            AlertError('You need to specify a language for the script to be saved');
        }
    }


    return(
        <div className={'d-flex script-node'} >
            <ScriptProvider>
                <LayoutCode />
            </ScriptProvider>

        </div>
    )
}
