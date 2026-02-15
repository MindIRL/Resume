
// res มาจาก หน้า Login.js หน้ากรอกรหัสล็อคอิน

export const authenticate = (res , next) => {
    if(typeof window !== "undefined"){
        sessionStorage.setItem("token" , JSON.stringify(res.data.token))
        sessionStorage.setItem("username" , JSON.stringify(res.data.username))
    }
    next()
}

export const getToken = () => {
    if(typeof window !== "undefined"){
        if(sessionStorage.getItem("token")){
            return JSON.parse(sessionStorage.getItem("token"))
        }else{
            return false
        }
    }
}

export const getUsername = () => {
    if(typeof window !== "undefined"){
        if(sessionStorage.getItem("username")){
            return JSON.parse(sessionStorage.getItem("username"))
        }else{
            return false
        }
    }
}

export const logout = (next) => {
    if(typeof window !== "undefined"){
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("username")
    }
    next()
}