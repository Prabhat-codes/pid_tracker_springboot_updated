import { useEffect, useState } from 'react'
import FileUpload from './FileUpload'
import { useNavigate } from 'react-router-dom';
import DevFileList from './DevFileList'
import DevPendingFileList from './DevPendingFileList'

function Dev() {
    const [fileId, setFileId] = useState<number>(0)
    // const [username, setusername] = useState('')
    let navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }
        else {
            fetch('http://localhost:9191/user/name', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}` || ''
                }
            }).then(response => {
                //console.log(response)
                return response.json()
            }).then(data => {
                console.log(data)
                //setFileList(data)
                // setusername(data.user_name)
            })
        }
    }, [])
    return (
        <>
            <div className="my-4" style={{ fontSize: "150%", textAlign: "center" }}>
                <h1><b>Developer</b></h1>
            </div>

            <div style={{ width: "60%", margin: "50px auto" }}>
                <div>
                    <div style={{ textAlign: "center" }}><div style={{ fontSize: "40px" }}>Upload a Document</div></div>
                    <FileUpload setFileId={setFileId} />
                </div>
                <div className="accordion my-2" style={{}} id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Reviewed Files
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" >
                            <div className="accordion-body">
                                <div className="row">
                                    <DevFileList fileId={fileId} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Pending Files
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" >
                            <div className="accordion-body">
                                <div className="row">
                                    <DevPendingFileList fileId={fileId}></DevPendingFileList>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dev