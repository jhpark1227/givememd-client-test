import axios from "axios";
import { useEffect } from "react";

const GithubRedirect = () =>{

    const code = new URL(window.location.href).searchParams.get("code");

    useEffect(()=>{
        console.log(code);
        axios.get("http://localhost:8080/api/v1/auth/code?code="+code)
            .then((res)=>{
                console.log(res);
                localStorage.setItem("githubAccessToken",res.data.result.githubAccessToken);
                localStorage.setItem("accessToken",res.data.result.accessToken);
                localStorage.setItem("refreshToken",res.data.result.refreshToken);
                window.location.href = "/mypage";
            })
    },[])
}

export default GithubRedirect;