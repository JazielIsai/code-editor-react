import {useFetch_RequestGet} from "../../../../../../../Hooks";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Accordion} from "./Acordion";
import {AccordionContent} from "./AccordionContent";


export const TreeListDirScripts = ({ nameFolder, path, dirScripts }) => {


    const { existingNodeId } = useParams();

    if ( dirScripts === undefined || dirScripts === null ) return null;

    return (
        <>
            <Accordion
                key={path}
                path={path.concat('-collapse')}
                nameFolder={nameFolder}
                children={
                    Object.entries(dirScripts).map( ( [key, value], index) => {
                        return (
                         <>
                             {
                                 key == '0' ? (
                                    Object.entries(value).map( ( [key, value], index) => {

                                        if (key === 'files') {
                                            return (
                                                value.map( (item, index) => {
                                                    console.log('item', item);

                                                    return (
                                                        <AccordionContent key={index} relationId={item?.original_file_name} fileId={item?.node_files_info_id} fileName={item?.original_file_name} dataFile={item} path={path} />
                                                    )
                                                })
                                            )
                                        } else {
                                            return (
                                                <TreeListDirScripts key={index} nameFolder={key} path={path.concat('/', key)} dirScripts={value}  />
                                            )
                                        }

                                    })
                                 ) : key === 'files' ? (
                                     value.map( (item, index) => {
                                         console.log('item', item);

                                         return (
                                             <AccordionContent key={index} relationId={item?.original_file_name} fileId={item?.node_files_info_id} fileName={item?.original_file_name} dataFile={item}  path={path} />
                                         )
                                     })
                                 ) : (
                                     <TreeListDirScripts key={index} nameFolder={key} path={path.concat('/', key)} dirScripts={value} />
                                 )
                             }
                         </>
                        )
                    })
                }
            />
        </>
    )
}