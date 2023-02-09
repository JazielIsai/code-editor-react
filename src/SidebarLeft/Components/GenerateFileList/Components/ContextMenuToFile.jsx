

export const ContextMenuToFile = ({y, x, showMenu, path, dataFile }) => {

    console.log('path: ', path, 'dataFile: ', dataFile)

    const style = () => {
        return {
            top: y + 120,
            left: x,
            display: showMenu ? 'flex' : 'none',
            width: '120px',
            zIndex: 1000,
        }
    }


    return (
        <div style={style()} className='container_context_menu bg-white '>
            <button className='item_context_menu bg-white text-dark fs-6'  > Add file </button>
            <button className='item_context_menu bg-white text-dark fs-6'  > Add folder </button>
            <button className='item_context_menu bg-white text-dark fs-6'  > Duplicate </button>
        </div>
    )

}