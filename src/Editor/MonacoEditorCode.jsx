import React, {useContext, useEffect} from "react";

import Editor, {useMonaco} from "@monaco-editor/react";
import {ScriptContext} from "../Context/ScriptContext";

export function MonacoEditorCode( { language, infoToSaveCode, defaultValueCode, height = "50vh"}  ) {

    const monaco = useMonaco();

    const {theme, setNodeFileInfo} = useContext(ScriptContext);

    useEffect(() => {
        // do conditional chaining
        //monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
        console.log('language -> ', language)
        // or make sure that it exists by other ways
        if (monaco) {
          console.log("here is the monaco instance:", monaco);
        }

    }, [monaco, language]);

      
    function handleEditorDidMount(editor, monaco) {
        monaco.current = editor;

    }

    function showValue() {
        alert(monaco.current.getValue());
    }

    function handleEditorChange(value, event) {
        console.log("value",{
            ...infoToSaveCode?.dataFile,
            fileNameTab: infoToSaveCode?.name,
            idTab: infoToSaveCode?.idTab,
            content: value
        })

        setNodeFileInfo({
            ...infoToSaveCode?.dataFile,
            fileNameTab: infoToSaveCode?.name,
            idTab: infoToSaveCode?.idTab,
            content: value
        } )
    }

    return (
        <>
            <Editor
                height = {height}
                width="auto"
                theme={theme}
                defaultLanguage={ language }
                language={ language }
                value={ defaultValueCode }
                onMount={handleEditorDidMount}
                onChange={handleEditorChange}

            />
        </>
    );
}