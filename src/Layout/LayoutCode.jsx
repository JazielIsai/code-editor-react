import React, {useState, useEffect, useRef, useContext} from "react";
import { Layout, Model } from "flexlayout-react";
import { ScriptContext } from "../Context/ScriptContext";
import {Menu} from "../Menu/Menu";
import {Sidebar} from "../SidebarLeft/Sidebar";
import {VisualCode} from "../EditCode/VisualCode";
import {jsonVisualCode} from "./layoutVisualCode";

export const LayoutCode = () => {

    //const layoutRef = useRef(null);

    const { layoutRef } = useContext(ScriptContext);

    const [jsonModel] = useState(Model.fromJson(jsonVisualCode));

    useEffect( () => {

        //setJsonModel(Model.fromJson(jsonVisualCode));

    }, [] )

    const onAddActiveClick = (event, idTab, name) => {
        console.log("name: ", name);
        layoutRef.current.addTabToActiveTabSet({
            id: idTab,
            type: "tab",
            component: "visualcode",
            // icon: "images/article.svg",
            name: name,
            enableClose: true,
            // enableDrag: true,
        });
    }

    const factory = (node, TabNode) => {
        let component = node.getComponent();


        if (component === "menu") {
            return (
                <Menu

                />
            )
        } else if (component === "sidebar") {
            return (
                <Sidebar
                    //handleAddTab={onAddActiveClick}
                />
            )
        } else if (component === "visualcode") {
            return (
                <VisualCode
                    configNode={node.getConfig()}
                />
            )
        }
    }

    const onAction = (action) => {
        return action;
    }


    return (
        <>
            {
                jsonModel && (
                    <Layout
                        ref={layoutRef}
                        model={jsonModel || {} }
                        factory={factory}
                        onAction={onAction}
                        iconFactory={null}
                    />
                )
            }

        </>
    )
}