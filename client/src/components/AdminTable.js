import React from 'react'
import {useState} from 'react';

const AdminTable = () => {
    const [selectedRow, setSelectedRow] = useState(null);

    const handleRowClick = (row) => {
        setSelectedRow(row);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>PIDs Reviewed</th>
                    <th>PIDs Developed</th>
                    <th>Avg Time to Approve PID</th>
                    <th>Avg Time to Get PID Approved</th>
                </tr>
            </thead>
            <tbody>
                {usersData.map((user) => (
                    <tr key={user.id} onClick={() => handleRowClick(user)}>
                        <td>{user.name}</td>
                        <td>{user.pidsReviewed}</td>
                        <td>{user.pidsDeveloped}</td>
                        <td>{user.avgTimeToApprove}</td>
                        <td>{user.avgTimeToGetApproved}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default AdminTable