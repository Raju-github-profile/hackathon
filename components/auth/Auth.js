import React, { useState } from 'react'
import Login from '../Login'
import Signup from '../Signup'
const Auth = () => {
    const [isLogin, setIsLogin] = useState(true)
    console.log(isLogin)
    return (
        <div className='bg-purple-300 h-screen w-full'>
            {isLogin ? (
                <Login setIsLogin={setIsLogin} />
            ) : (
                <Signup setIsLogin={setIsLogin} />
            )}
        </div>
    )
}
export default Auth