import React from 'react'

async function getStudentData(){
  const res = await fetch('https://gorest.co.in/public/v2/users')

  return res.json()
  //Every function 
  
}


export default async function Page() {
  const data = await getStudentData();
  console.log(data);
  return (
    <section class="col-6 a_tbdr">
        Student Route
        <ul>
            {
              data.map((cv,idx,arr)=>{
                return <li key={idx}>{cv.name} {cv.email}</li>
              })
            }
          
        </ul>
    </section>
  )
}
