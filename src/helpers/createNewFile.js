import {useContext, useState} from "react";
import {Model, TabNode, Actions, DockLocation, Node} from "flexlayout-react";
import {AlertText} from "../../../../Helpers/Alerts/AlertText";
import {ScriptContext} from "../Context/ScriptContext";


export const CreateNewFile = () => {

    const { layoutRef } = useContext(ScriptContext);

    const addTab = (e, path, name) => {

        if ( !name ) return null;

        AlertText('New File')
            .then( (res) => {
                if ( res.isConfirmed ) {
                    console.log("enter to if", res.value);

                    const tab = {
                        type: "tab",
                        component: "visualcode",
                        // icon: "images/article.svg",
                        name: res.value,
                        enableClose: true,
                        // enableDrag: true,
                    }

                    layoutRef.current?.addTabToActiveTabSet(tab)

                } else {
                    console.log('cancel')
                }
            } )
            .catch((error) => {
                console.log(error);
            } );

        // Model.setOnCreateTabSet(tab);
        // layoutRef.current?.addTabToActiveTabSet(tab)
        // Model.doAction(Actions.addNode(tab, 'visualEditCode',DockLocation.CENTER, 0))
        // Actions.addNode(tab, 'visualEditCode',DockLocation.CENTER, 0)
    }

    return {
        addTab
    }

}
