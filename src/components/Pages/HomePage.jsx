import {useState} from "react";
import App from "../../App";

export default function Home() {
    const [activeTab, setActiveTab] = useState(1)
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-icon">
                    <img src={"/Dexter_Logo.png"} width={200} height={100} alt={"icon"}/>
                </div>
                <div className={(activeTab === 1) ? "active" : ""} onClick={() => setActiveTab(1)}>
                    <img className={"sidebar-item-icon"} src={"/favicon.ico"} alt={"icon"}/>
                    <a>Home</a>
                </div>
                <div className={(activeTab === 2) ? "active" : ""} onClick={() => setActiveTab(2)}>
                    <img className={"sidebar-item-icon"} src={"/favicon.ico"} alt={"icon"}/>
                    <a>Content</a>
                </div>
                <div className={(activeTab === 3) ? "active" : ""} onClick={() => setActiveTab(3)}>
                    <img className={"sidebar-item-icon"} src={"/favicon.ico"} alt={"icon"}/>

                    <a>Content extra</a>
                </div>
                <div className={(activeTab === 4) ? "active" : ""} onClick={() => setActiveTab(4)}>
                    <img className={"sidebar-item-icon"} src={"/favicon.ico"} alt={"icon"}/>
                    <a>About</a>
                </div>

                <div className="sidebar-footer">
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"/>
                    </label>
                    {/*<img src={"/Dexter_Logo.png"} alt={"icon"} width={200} height={100}/>*/}
                </div>
            </div>
            <div className="content">
                <div hidden={(activeTab !== 1)}>
                    <h1>
                        Hello World Still work in progress...
                        <App/>
                    </h1>
                </div>
                <div hidden={(activeTab !== 2)}>
                    <h1>Work in progress...</h1>
                </div>
                <div hidden={(activeTab !== 3)}>
                    <h1>Work in progress...</h1>
                </div>
                <div hidden={(activeTab !== 4)}>
                    <h1>Work in progress...</h1>
                    <h2>- Dexter</h2>
                </div>
            </div>
        </>
    )
}