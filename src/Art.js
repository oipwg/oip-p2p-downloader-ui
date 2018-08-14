import React, { Component } from "react";
import Folder from "./assets/imgs/folder-open.svg";
import Pause from "./assets/imgs/pause-circle.svg";
import Play from "./assets/imgs/play-circle.svg";
import Settings from "./assets/imgs/cog.svg";
import Up from "./assets/imgs/arrow-up.svg";
import Down from "./assets/imgs/arrow-down.svg";
import { Artifact } from "oip-index";
const { ipcRenderer, remote } = window.require('electron');

class ArtSuite extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFiles: []
        }
    }
    

        render(){
        var art;

        if (this.props.artifact){
            art = this.props.artifact;
        } else {
			art = new Artifact();
        }
        
        // ipcRenderer.on("ArtTest", (event, ) => {
        //     this.setState({
        //         selectedFiles: 
        //     })
        // })
  
    console.log(art)
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="OpenFolder">
                                <img
                                    width="70"
                                    height="70"
                                    src={Folder}
                                    style={{ marginRight: "0px" }}/>
                            </th>
                            
                            <td style={{marginLeft:"30px"}}>
                                <div>
                                    {art.getTitle()} ({this.state.selectedFiles} Files)
                                </div>
                                <div>
                                    249.6 MB of 3.94 GB (6.19%)
                                    <div class="progress">
                                        <div
                                            class="progress-bar"
                                            role="progressbar"
                                            style={{ width: "6.19%" }}
                                            aria-valuenow="6.19"
                                            aria-valuemin="0"
                                            aria-valuemax="100">
                                            6.19%
                                        </div>
                                    </div>
                                </div>
                                <div className="float-right">
                                    DL from 3 nodes, UL to 0 nodes (Down
                                    1.25MB/s Up 0.00KB/s)
                                </div>
                            </td>
                            <td className="Pause">
                                <img width="30" height="30" src={Pause} />
                                <img
                                    width="30"
                                    height="30"
                                    src={Settings}
                                    style={{ marginLeft: "15px" }}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
            </div>
        );
    }
}

export default ArtSuite;