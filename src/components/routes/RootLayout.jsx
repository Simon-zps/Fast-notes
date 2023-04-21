import { useState } from 'react';
import { Outlet } from "react-router-dom";
import {Link} from 'react-router-dom';

function RootLayout(){
    const [formVisible, setFormVisible] = useState(false);

    function displayUserForm() {
        setFormVisible(!formVisible);
    }

    return (
        <>
            <div className="header">
                <h3>FAST <br/>NOTES</h3>

                <div className="addNote" onClick={displayUserForm} >
                   <Link to="/form"> <img src="images/post-icon.png" alt="Post icon"/> </Link>
                </div>
            </div>

            <Outlet displayUserForm={displayUserForm} formVisible={formVisible}  />
        </>
    );
}

export default RootLayout;