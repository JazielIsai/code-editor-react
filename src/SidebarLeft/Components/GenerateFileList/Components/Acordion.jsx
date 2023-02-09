import {useId} from "react";
import {useRightClickMenu} from "../../../../../../../Hooks";
import {FcFolder, FcFile} from 'react-icons/fc';
import {ContextMenuToFolder} from "./ContextMenuToFolder";

export const Accordion = ( {nameFolder, children, path} ) => {

    const {x, y, showContextMenu, wrapperId} = useRightClickMenu(nameFolder);

    let id = useId();
    id = id.replace(/[^a-zA-Z0-9]/g, '');

    console.log('id from useId: ', id);

    return (
        <div className="accordion-item" style={{border: 'none', margin: 0 }}>
            <h2 className="accordion-header" id={wrapperId}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target={`#panel${id}-collapse`} aria-expanded="false"
                        aria-controls={`panel${id}-collapse`} style={{padding: 0, margin: 0}} >
                    <FcFolder /> { nameFolder || 'Folder' }
                </button>
                <ContextMenuToFolder showMenu={showContextMenu} x={x} y={y} />
            </h2>

            <div id={`panel${id}-collapse`} className="accordion-collapse collapse"
                 aria-labelledby={wrapperId}>
                <div className="accordion-body" style={{padding: 0, paddingLeft: '12.5px'}}>
                   <div className={'d-flex flex-column '} style={{margin: 0, padding: 0}} >
                       { children }
                   </div>
                </div>
            </div>
        </div>
    )
}