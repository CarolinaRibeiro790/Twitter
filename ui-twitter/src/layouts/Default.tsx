import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

//Outlet para aparecer o conteudo na tela da home e tweet

import './Default.css';

export function Default(){
    return(
        <div className='layout'>
            <Sidebar />
        <div className="content">
            <Outlet />
        </div>
      </div>
    )
}