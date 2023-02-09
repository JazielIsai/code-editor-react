import {useRightClickMenu} from "../../../../../../../Hooks";
import {File} from "./File";
import {ContextMenuToFile} from "./ContextMenuToFile";
import {Actions} from "flexlayout-react";
import {useContext} from "react";
import {ScriptContext} from "../../../../Context/ScriptContext";


export const AccordionContent = ( { relationId, fileName, fileId, dataFile, path } ) => {

    const { layoutRef, setNodeFileInfo } = useContext(ScriptContext);

    const {x, y, showContextMenu, wrapperId} = useRightClickMenu(relationId);

    console.log('path: ', path)

    const verificateIfTabExist = (id) => {

        if (!id) {
            return false;
        }

        const tab = layoutRef.current.doAction(Actions.selectTab(id));

        if(tab){
            layoutRef.current.doAction(Actions.selectTab(id));
            return true;
        }
        return false;
    }

    const onAddActiveClick = (event, idTab, name) => {
        event.preventDefault();
        console.log("name: ", name, idTab, dataFile);

        setNodeFileInfo(dataFile);

        if (verificateIfTabExist(idTab)) {

        } else {
            layoutRef.current.addTabToActiveTabSet({
                id: idTab,
                type: "tab",
                component: "visualcode",
                // icon: "images/article.svg",
                name: name,
                config: {
                  dataFile: dataFile,
                  idTab: idTab,
                  name: name
                },
                enableClose: true,
                // enableDrag: true,
            });
        }
    }

    return (
        <div
            className={'d-flex align-items-center m-0 p-0 '}
            id={wrapperId}
        >
            <File
                name={fileName}
                handleAddTab={ (e)=> onAddActiveClick(e, fileId, fileName)}

            />
            <ContextMenuToFile showMenu={showContextMenu} x={x} y={y} path={path} dataFile={dataFile} />
        </div>
    )
}