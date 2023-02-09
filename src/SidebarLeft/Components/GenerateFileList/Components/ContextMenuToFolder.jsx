import {CreateNewFile} from "../../../../helpers/createNewFile";

export const ContextMenuToFolder = ({y, x, showMenu }) => {

    const { addTab } = CreateNewFile();

    const style = () => {
        return {
            top: y + 60,
            left: x,
            display: showMenu ? 'flex' : 'none',
            width: '120px',
            zIndex: 1000,
        }
    }

    const handleCreateFile = (e) => {
        addTab(e, '/', 'name');
    }

    return (
        <div style={style()} className='container_context_menu bg-white '>
            <button className='item_context_menu bg-white text-dark fs-6' onClick={handleCreateFile} > Add file </button>
            <button className='item_context_menu bg-white text-dark fs-6'  > Add folder </button>
            <button className='item_context_menu bg-white text-dark fs-6'  > Duplicate </button>
        </div>
    )

}