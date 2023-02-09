import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";


export const SearchFile = ( { } ) => {

    const {existingNodeId} = useParams();

    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control p-1" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" onChange={handleSearch}/>
        </div>
    )

}