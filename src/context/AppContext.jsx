import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const AppContext=createContext()

const AppContextProvider = (props)=>{
    const [user,setUser] = useState(null);
    const [showLogin,setShowLogin] = useState(false);
    const [token,setToken] = useState(localStorage.getItem('token'))
    const [credit,setCredit] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const navigate=useNavigate()
 
    const loadCreditData = async ()=>{
        try {
            const{data} = await axios.get(backendUrl + '/api/user/credits',{headers:{token}})
            if(data.success){
                setCredit(data.credits)
                setUser(data.user)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            
        }
    }


const generateImage=async (prompt)=>{
    try{
 const{data} = await axios.post(backendUrl+'/api/image/generate-image',{prompt},{headers:{token}})

if(data.success){
    loadCreditData()
    return data.resultImage
}else{
    toast.error(data.message)
    loadCreditData()
    if(data.creditBalance === 0 ){
        navigate('/buy')
    }
}

    } catch(error){
        toast.error(error.message) 
        }
}

    const logout = ()=>{
        localStorage.removeItem('token');
        setToken('')
        setUser(null)
    }



    const purchaseCredits = async (planId) => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/user/purchase-credits', 
                { userId: user._id,planId }, // Pass the selected plan's ID
                { headers: { token } }
            );
    
            if (data.success) {
                toast.success('Credits purchased successfully!');
                loadCreditData(); // Refresh credit balance
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Failed to purchase credits. Please try again.');
        }
    };



//

useEffect(()=>{
if (token) {
    loadCreditData()
}
},[token])
    const value = {

        user,setUser,showLogin,setShowLogin,backendUrl,token,setToken,credit,setCredit,loadCreditData,logout,generateImage,purchaseCredits
    }


    
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider