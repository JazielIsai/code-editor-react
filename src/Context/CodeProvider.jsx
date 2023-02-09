import {useState, useRef} from "react";
import {CodeContext} from "./CodeContext";

export const CodeProvider = ({children}) => {

    const [theme, setTheme] = useState("light");
    const [nodeFileInfo, setNodeFileInfo] = useState({});
    const [jsonModel, setJsonModel] = useState({});
    const layoutRef = useRef(null);


    return (
        <CodeContext.Provider value={{
            theme,
            setTheme,
            nodeFileInfo,
            setNodeFileInfo,
            jsonModel,
            setJsonModel,
            layoutRef
        }}>
            {children}
        </CodeContext.Provider>
    )
}