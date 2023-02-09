import {useFetch_RequestGet} from "../../../../../Hooks";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";


export const CurrentFile = () => {

    const { existingNodeId } = useParams();

    const { data : infoFiles  } = useFetch_RequestGet(`services.php?serviceName=get_node_files_info_for_node&node_id=${existingNodeId}`);

    const [getInfoFiles, setGetInfoFiles] = useState([]);

    useEffect( () => {
        try {
            setGetInfoFiles(infoFiles)
        } catch (e) {
            console.log('error -> ', e);
        }
    }, [infoFiles] )

    return (
        <div className={''}>
            <div className=" border-0 p-0 m-0 ">
                <select className="form-select">
                    {
                        getInfoFiles &&
                        getInfoFiles.map( file => {
                            return (
                                <option value={file.node_files_info_id} > {file.original_file_name} </option>
                            )
                        } )
                    }
                </select>
            </div>
        </div>
    )
}