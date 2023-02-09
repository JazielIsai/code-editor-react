import {FcFile} from "react-icons/fc";


export const File = ({ name, handleAddTab=()=>{}}) =>{


    return (
        <div className={'m-0 p-0 w-100'}>
            <button className={'border-0 bg-white m-0 p-0 text-start '} style={{width: '100%'}} onClick={ (e)=> handleAddTab(e) }>
                <FcFile className={'fs-5 m-0 mx-2 '} />
                { name }
            </button>

        </div>
    )
}