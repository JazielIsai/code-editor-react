import {useState, useEffect, useContext} from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { requestPost, AlertError, AlertToast } from "../../../../Helpers";
import { useDataCollectionRequest, useFetch_RequestGet } from "../../../../Hooks";
import { FcSettings } from 'react-icons/fc';
import {CurrentFile} from "./Components/CurrentFile";
import { CreateNewFile } from "../helpers/createNewFile";
import {Theme} from "./helpers/Theme";
import {ScriptContext} from "../Context/ScriptContext";
export const Menu = (  ) => {

	const { existingNodeId } = useParams();

	const { nodeFileInfo } = useContext(ScriptContext)

	const { addTab } = CreateNewFile();

	const handleNewFile = (e) => {
		addTab(e, '/', 'newFile.js');
	}

	const handleSaveFile = (e) => {
		console.log('nodeFileInfo -> ', nodeFileInfo);

		const body = {
			"node_id": existingNodeId,
			"original_file_name": nodeFileInfo?.original_file_name,
			"code": nodeFileInfo?.content,
			"type": 'code',
			"language": nodeFileInfo?.file_format,
		}

		const formData = new FormData();
		formData.append('script_info', JSON.stringify(body));

		requestPost('services.php?serviceName=save_script_for_node', formData)
			.then((response) => {
				console.log('response -> ', response);
				if (response == '1') {
					AlertToast('success', 'File saved successfully');
				} else {
					AlertError('Error to save file');
				}
			} )
			.catch((error) => {
				console.log('error -> ', error);
				AlertError('Error al guardar el archivo');
			} )

	}

    return (
		<header className="menu ">
			<div className="container-fluid menu-container " >
				<div className="menu-wrap  d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

					<a href="/" className="d-flex align-items-center text-capitalize text-dark text-decoration-none mx-3">
						Scripts
					</a>

					<ul className="menu-list nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
						<li>
							<div className="menu-wrap-list dropdown text-end" >
								<button className="menu-title d-block link-dark text-decoration-none dropdown-toggle "
										 data-bs-toggle="dropdown" aria-expanded="false"
								>
									File
								</button>
								<ul className="menu-items dropdown-menu text-small" >
									<li><button className="menu-item dropdown-item" onClick={handleNewFile} >New file</button></li>
									<li><button className="menu-item dropdown-item" >Open file</button></li>
									<li><button className="menu-item dropdown-item"> Open recently</button></li>
									<li><button className="menu-item dropdown-item" onClick={handleSaveFile} > Save </button></li>
									<li><button className="menu-item dropdown-item"> Save as </button></li>
									<li><button className="menu-item dropdown-item"> Auto save </button></li>
									<li><button className="menu-item dropdown-item"> Exit </button></li>
								</ul>
							</div>
						</li>
						<li>
							<div className="menu-wrap-list dropdown text-end">
								<button className="menu-title  d-block link-dark text-decoration-none dropdown-toggle "
								   data-bs-toggle="dropdown" aria-expanded="false"
								>
									Edit
								</button>
								<ul className="menu-items dropdown-menu text-small" style={{}}>
									<li><button className="menu-item dropdown-item" >Undo</button></li>
									<li><button className="menu-item dropdown-item" > Redo </button></li>
									<li><button className="menu-item dropdown-item"> Cut </button></li>
									<li><button className="menu-item dropdown-item"> Copy </button></li>
									<li><button className="menu-item dropdown-item"> Paste </button></li>
									<li><button className="menu-item dropdown-item"> Find </button></li>
									<li><button className="menu-item dropdown-item"> Replace </button></li>

								</ul>
							</div>
						</li>
						<li>
							<div className="menu-wrap-list dropdown text-end">
								<button className="menu-title d-block link-dark text-decoration-none dropdown-toggle "
								   data-bs-toggle="dropdown" aria-expanded="false"
								>
									Code
								</button>
								<ul className="menu-items dropdown-menu text-small" style={{}}>
									<li><button className="menu-item dropdown-item" > Comment with Line Comment </button></li>
									<li><button className="menu-item dropdown-item" > Comment with Block Comment </button></li>
								</ul>
							</div>
						</li>

					</ul>


					<div className={''}>
						<CurrentFile />
					</div>

					<div className="mx-4 dropdown text-end ">
						<button className="d-block link-dark text-decoration-none dropdown-toggle border-0 bg-white me-3"
						   data-bs-toggle="dropdown" aria-expanded="false"
						>
							<FcSettings className={'fs-3'} />
						</button>
						<ul className="dropdown-menu text-small" style={{}}>
							<li> <Theme nameClass={'dropdown-item'} /> </li>
							<li><button className="dropdown-item"> Settings </button></li>
						</ul>
					</div>

					<div className={'me-5'}></div>

				</div>
			</div>
		</header>
    )
}