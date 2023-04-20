interface UploadFileResponse {
    success: boolean,
    message: string
}

class FileService 
{
    private file: File
    private comment:string
    

    constructor(file: File,comment:string) {
        this.file = file
        this.comment = comment
    }

    static getFileExtension(fileName: string): string {
        const fileNames: Array<string> = fileName.split('.')

        if (fileNames.length === 0) {
            return ''
        }

        return fileNames[fileNames.length - 1]
    }

    async uploadFile(): Promise<UploadFileResponse> {
        const uploadResponse = await fetch('http://localhost:5000/uploadFile', {
            method: 'POST',
            
            body: this.getFormData()
        })

        const responseJson = await uploadResponse.json()

        if (responseJson.success === false) {
            return {
                success: false,
                message: responseJson.message
            }
        }

        return {
            success: true,
            message: 'Uploaded Successfully'
        }
    }
    async uploadFile2(): Promise<UploadFileResponse> {
        const uploadResponse = await fetch('http://localhost:9191/dev/uploadfile', {
            method: 'POST',
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}` || ''
            },
            body: this.getFormData()
        })
        // const response = await fetch('http://localhost:9191/image',{
        //     method: 'POST',
        //     body:this.getFormData()
        // })

        // console.log(response)
        const responseJson = await uploadResponse.json()

        if (responseJson.success === false) {
            return {
                success: false,
                message: responseJson.message
            }
        }

        return {
            success: true,
            message: 'Uploaded Successfully'
        }
    }
    async uploadFile3(fileID:string): Promise<UploadFileResponse> {
        const data = this.getFormData();
        console.log("uploadfile3 : "+ fileID);
        data.append('fileName', fileID);
        const uploadResponse = await fetch('http://localhost:9191/rev/uploadfile', {
            method: 'POST',
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}` || ''
            },
            body: data
        })

        const responseJson = await uploadResponse.json()

        if (responseJson.success === false) {
            return {
                success: false,
                message: responseJson.message
            }
        }

        return {
            success: true,
            message: 'Uploaded Successfully'
        }
    }

    async uploadFile4(fileID:string): Promise<UploadFileResponse> {
        const data = this.getFormData();
        console.log("uploadfile4 : "+ fileID);
        data.append('fileName', fileID);
        const uploadResponse = await fetch('http://localhost:9191/dev/uploadfilerev', {
            method: 'POST',
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}` || ''
            },
            body: data
        })

        const responseJson = await uploadResponse.json()

        if (responseJson.success === false) {
            return {
                success: false,
                message: responseJson.message
            }
        }

        return {
            success: true,
            message: 'Uploaded Successfully'
        }
    }


    private getFormData(): FormData {
        const formData = new FormData()
        formData.append('file', this.file)
        formData.append('comment', this.comment)
        
        
            formData.append('pass',localStorage.getItem('pass')!)
        
        return formData
    }
}

export default FileService