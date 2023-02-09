import {useContext} from "react";
import {ScriptContext} from "../Context/ScriptContext";
import {useParams} from "react-router-dom";
import {requestPost} from "../../../../Helpers";

export const CreateFolder = () => {

    const {scriptId} = useParams();

    const addFolder = (folderName, parentFolder) => {

      const body = {
        name: folderName
      }

      const formData = new FormData();
      formData.append('name', folderName);

      requestPost(`/api/folders/${parentFolder}`, formData)
        .then(response => {
          console.log(response);
        } )
        .catch(error => {
            console.log(error);
        })

    }

    return {
        addFolder
    }
}