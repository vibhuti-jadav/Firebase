import { createSlice } from "@reduxjs/toolkit";
import { addStudent, deleteStudent, fetchStudent, updateStudent } from "./studentThunk";


const studentSlice=createSlice({
    name:"student",
    initialState:{list: [],status:"idle",error:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder
                .addCase(fetchStudent.pending,(state)=>{
                    state.status="Loading";
                })
                .addCase(fetchStudent.fulfilled,(state,action)=>{
                    (state.status="success"),(state.list=action.payload);
                })
                .addCase(addStudent.fulfilled,(state,action)=>{
                    state.list.push(action.payload);
                })
                .addCase(deleteStudent.fulfilled,(state,action)=>{
                    state.list=state.list.filter((s)=>s.id !== action.payload);
                })
                .addCase(updateStudent.fulfilled,(state,action)=>{
                    const {id,newData}=action.payload;
                    const index =state.list.findIndex((s)=>s.id === action.payload);
                    if(index !== -1){
                        state.list[index]={id,...newData};
                    }
                })
    }
})

export default studentSlice.reducer