"use client"

import { useParams, useRouter } from "next/navigation";

export function Control() {
  const params = useParams()
  const router = useRouter()
  const id = params.id
  console.log(params)
  return (
    <ul>
      <li><a href='/create'>Create</a></li>
      {id?<>
        <li><a href={"/update/"+id}>Update</a></li>
      <li><input type="button" value="delete" onClick={()=>{
        const options = {method: "DELETE"}
        fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+id,options)
        .then(resp=>resp.json())
        .then(result=>{
          router.refresh()
        })
      }}></input></li>
      </>:null}
    </ul>
  );
}
