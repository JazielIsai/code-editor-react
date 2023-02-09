import {Actions} from "flexlayout-react";


export const focusToTabIfExist = (refLayout, id) => {

    if (!id) {
        return false;
    }

    const tab = refLayout.current.doAction(Actions.selectTab(id));

    if(tab){
        refLayout.current.doAction(Actions.selectTab(id));
        return true;
    }
    return false;

}