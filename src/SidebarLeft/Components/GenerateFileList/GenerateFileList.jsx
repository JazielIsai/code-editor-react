import {AccordionContent} from "./Components/AccordionContent";
import {Accordion} from "./Components/Acordion";
import {useParams} from "react-router-dom";
import {useFetch_RequestGet} from "../../../../../../Hooks";
import {useEffect, useState} from "react";
import {TreeListDirScripts} from "./Components/TreeListDirScripts";

const Datos = [
    {
        name: 'Code 1',
        id: 1
    },
    {
        name: 'Code 2',
        id: 2
    },
    {
        name: 'Code 3',
        id: 3
    }
]

export const GenerateFileList = () => {

    const { existingNodeId } = useParams();

    const { data : dirScripts } = useFetch_RequestGet(`services.php?serviceName=get_dir_script_by_id_node_rep&node_id=${existingNodeId}`)

    const [getDirScripts, setGetDirScripts] = useState([]);

    useEffect( () => {
        console.log('dirScripts', dirScripts);

        if (dirScripts) {
            setGetDirScripts(dirScripts);
        }

    }, [dirScripts] )

    return (
        <div>
            {

                <TreeListDirScripts
                    path={existingNodeId}
                    dirScripts={getDirScripts}
                    nameFolder={existingNodeId}
                />

            }
        </div>
    )
}