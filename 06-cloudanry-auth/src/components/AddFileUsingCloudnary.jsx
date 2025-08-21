import React, { useState } from 'react'

const AddFileUsingCloudnary = () => {
    const [file,setFiles]=useState([]);

    const handlefileUpload = async (e) => {
      const seletedFile  = e.target.files[0];

        if(!seletedFile){
          return;
        }

        const data = new FormData();
        data.append("file",seletedFile);
        data.append("upload_preset","student")
        data.append("cloud_name","dpqbg9fck")



        try {
          const res = await fetch(
            "https://api.cloudinary.com/v1_1/dpqbg9fck/image/upload",
            {
              method:"POST",
              body:data,
            }
          );

          const uploadedData = await res.json();

          console.log("uploaded data",uploadedData.url);
          setFiles((prev)=>[...prev,uploadedData]);
        } catch (error) {
          alert("error")
        }
}
  return (
   <>
      <input type="file" onChange={handlefileUpload} />
      <button>upload</button>
   
    <br />
    {
      file.map((f,index)=>(
        <img key={index} src={f.url} alt={`file-${index}`} width="200" />
      ))
    }
   </>
  )
}

export default AddFileUsingCloudnary