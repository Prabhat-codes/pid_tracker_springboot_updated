import { useState } from 'react'
import {
    createStandaloneToast
} from '@chakra-ui/react'
import { validateFileSize, validateFileType } from '../service/fileValidatorService'
import FileService from '../service/fileService'
function FileUpload(props) {
    const { setFileId } = props
    const [uploadFormError, setUploadFormError] = useState('')
    const [value, setvalue] = useState('')

    const handleInputChange = (e) => {
        let inputValue = e.target.value
        setvalue(inputValue)
    }

    const handleSubmit = async (e) => {
        console.log(e.target[0].value);
        handleFileUpload(e.target[1], e.target[0].value)
        e.preventDefault();

    }

    const handleFileUpload = async (element, comment) => {
        //element.preventDefault()
        console.log(element)
        const file = element.files

        if (!file) {
            return
        }

        const validFileSize = await validateFileSize(file[0].size)
        const validFileType = await validateFileType(FileService.getFileExtension(file[0].name))

        if (!validFileSize.isValid) {
            setUploadFormError(validFileSize.errorMessage)
            return
        }

        if (!validFileType.isValid) {
            setUploadFormError(validFileType.errorMessage)
            return
        }

        if (uploadFormError && validFileSize.isValid) {
            setUploadFormError('')
        }

        const fileService = new FileService(file[0], comment)
        const fileUploadResponse = await fileService.uploadFile2()

        element.value = ''

        const toast = createStandaloneToast()

        toast({
            title: fileUploadResponse.success ? 'File Uploaded' : 'Upload Failed',
            description: fileUploadResponse.message,
            status: fileUploadResponse.success ? 'success' : 'error',
            duration: 3000,
            isClosable: true
        })
        //setFileId(fileUploadResponse.fileId ?? 0)
    }

    return (
        <div className="container" style={{ backgroundColor: "", width: "500px", borderWidth: "1px", borderColor: "black" }}>
            {
                uploadFormError &&
                <div mt="5" color="red">{uploadFormError}</div>
            }
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Add File</label>
                    <input className="form-control" type="file" id="formFile"
                    //onChange={(e) => handleFileUpload(e.currentTarget)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Add Comments</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleInputChange}
                        placeholder='Add Comments'></textarea>
                </div>
                <div style={{ textAlign: "center" }}>
                    <button type="submit" className="btn btn-primary mb-3">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FileUpload