import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext()
export const AuthProvider = ({ children }) => 
{
    const [token, setToken] = useState(localStorage.getItem('Token'))
    const [user, setUser] = useState("");

    const tokenglobal = token;
    const storeTokenInLS = (token) => {
        setToken(token)
        return localStorage.setItem('Token', token)
    }
    let isloggedin = !!token

    const logoutUser = () => {
        setToken("")
        localStorage.removeItem('Token')
        console.log(isloggedin)
    }

    const getUser = async () => {
        const response = await fetch('http://localhost:3000/v1/user',
            {
                method: 'get',
                headers:
                {
                    Authorization: `Bearer ${token}`
                }
            });

        //console.log(response)

        if (response.ok) {
            const data = await response.json()
            //console.log("our data",data.msg);
            setUser(data.msg);

        }

    }

    const [gotjob, setgotjob] = useState([]);
    const getJob = async () => {
        try {

            const jobData = await fetch("http://localhost:3000/v1/viewjobs",
                {
                    method: "GET",
                    headers:
                {
                    Authorization: `Bearer ${token}`
                }
                })

            if (jobData.ok) {
                const jobs = await jobData.json()
                setgotjob(jobs.msg)
                //console.log(token)
            }


        } catch (error) {
            console.log(`error in getting job ${error}`)

        }
    }

    
    useEffect(() => {
        getUser();
        getJob();
    }, [])


    return <AuthContext.Provider value={{ storeTokenInLS, logoutUser, isloggedin, user, gotjob, tokenglobal}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}




















// import { createContext, useContext } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {

//     const storetokentols = (token)=>
//     {
//          return localStorage.setItem('Token', token)
//     }

//     return <AuthContext.Provider value={{storetokentols}}>
//         {children}

//     </AuthContext.Provider>

// }

// export const useAuth = ()=>
// {
//     return useContext(AuthContext);
// }