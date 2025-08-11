import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteStudent, fetchStudent, updateStudent } from '../store/studentThunk';

const Studentlist = () => {
    const {list,status}=useSelector((state)=>state.students);

    const [editId,setEditId]=useState(null);

    const [newData,setNewData]=useState(null)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchStudent());
    },[dispatch])

    if(status === "Loading") return <p>Loading</p>
    if (!list.length) return <p>student data not found</p>

    const handleDelete=(id)=>{
        dispatch(deleteStudent(id));
        alert("student deleted");
    }

        const handleSave = async (id)=>{
            if(!newData?.trim()) return alert ("name cannot be empty");

            await dispatch(updateStudent({id,newData:{name:newData}}));
            alert("student data updated");
            setEditId(null);
            setNewData("");
        }


  return (
     <table>
      <thead>
        <tr>
          <th>student name</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        {list.map((student) => (
          <tr key={student.id}>
            {/* <td>{student.name}</td> */}

            <td>
              {editId === student.id ? (
                <input
                  placeholder="enter new data"
                  value={newData}
                  onChange={(e) => setNewData(e.target.value)}
                />
              ) : (
                student.name
              )}
            </td>

            <td>
              {editId === student.id ? (
                <button onClick={() => handleSave(student.id)}>save</button>
              ) : (
                <button
                  onClick={() => {
                    setEditId(student.id), setNewData(student.name);
                  }}
                >
                  edit
                </button>
              )}
            </td>
            <td>
              <button onClick={() => handleDelete(student.id)}>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Studentlist