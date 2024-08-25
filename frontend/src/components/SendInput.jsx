import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const SendInput = () => {
    const [message, setMessage] = useState("")
    
    const dispatch = useDispatch()

    const  { selectedUser } = useSelector((store) => store.user);
    const { messages } = useSelector((store) => store.message); 

    const onSubmitHandler = async (e) =>{
        e.preventDefault

        // try {
        //     const res = await axios.post(

        //     )
        // } catch (err) {
        //    console.log(err) 
        // }
    }

  return (
    <div>SendInput</div>
  )
}

export default SendInput