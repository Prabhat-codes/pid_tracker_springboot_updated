import React from 'react'
import { useState } from 'react';
// import AdminDetailModal from './AdminDetailModal';
import Modal from 'react-modal';
const AdminTable = () => {
    const [selectedData, setSelectedData] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const handleRowClick = (rowData) => {
        setSelectedData(rowData);
        setModalOpen(true);
    };
    //Get data from backend
    const data = [
        {
            id: 1,
            name: 'John',
            numPIDsReviewed: 10,
            numPIDsDeveloped: 5,
            avgTimeApprovePID: 10,
            avgTimeGetPIDApproved: 20
        },
        {
            id: 2,
            name: 'Jane',
            numPIDsReviewed: 20,
            numPIDsDeveloped: 10,
            avgTimeApprovePID: 20,
            avgTimeGetPIDApproved: 40
        },
        {
            id: 3,
            name: 'Joe',
            numPIDsReviewed: 30,
            numPIDsDeveloped: 15,
            avgTimeApprovePID: 30,
            avgTimeGetPIDApproved: 60
        },
        {
            id: 4,
            name: 'Jill',
            numPIDsReviewed: 40,
            numPIDsDeveloped: 20,
            avgTimeApprovePID: 40,
            avgTimeGetPIDApproved: 80
        }
    ]

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number of PIDs Reviewed</th>
                    <th>Number of PIDs Developed</th>
                    <th>Average Time for Approving a PID</th>
                    <th>Average Time for Getting as PID Approved</th>
                </tr>
            </thead>
            <tbody>
                {data.map((rowData) => (
                    <tr key={rowData.id} onClick={() => handleRowClick(rowData)}>
                        <td>{rowData.name}</td>
                        <td>{rowData.numPIDsReviewed}</td>
                        <td>{rowData.numPIDsDeveloped}</td>
                        <td>{rowData.avgTimeApprovePID}</td>
                        <td>{rowData.avgTimeGetPIDApproved}</td>
                    </tr>
                ))}
            </tbody>
            <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} style={{width:"500z`Zpx" ,height:"auto"}}>
                <h2>{selectedData && selectedData.name}</h2>
                <p>Number of PIDs Reviewed: {selectedData && selectedData.numPIDsReviewed}</p>
                <p>Number of PIDs Developed: {selectedData && selectedData.numPIDsDeveloped}</p>
                <p>Average Time for Approving a PID: {selectedData && selectedData.avgTimeApprovePID}</p>
                <p>Average Time for Getting as PID Approved: {selectedData && selectedData.avgTimeGetPIDApproved}</p>
                

                <button onClick={() => setModalOpen(false)}>Close Modal</button>
            </Modal>
        </table>
    );
}

export default AdminTable
