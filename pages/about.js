import Navbar from '@/components/Navbar/Navbar'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDoc, collection, addDoc, doc, setDoc, getDocs } from "firebase/firestore";
import { toast } from 'react-hot-toast';
import { handleUserData } from '@/redux/slices/slice1';
import { db } from "../firebase/index"
import axios from 'axios';
const API_KEY = '496bdb6a6b012b965f3a45c5063597a3'
const city_name = 'Pokhara'
const about = () => {
    const state = useSelector((state) => state.Slice1)
    const dispatch = useDispatch()
    console.log(state?.userData)

    const saveUser = async () => {
        try {
            const docRef = await addDoc(collection(db, "cities"), {
                name: "Tokyo",
                country: "Japan"
            });
            console.log(docRef)
            toast.success('Successfully created user')
        } catch (error) {
            console.log({ error })
            toast.error('Something went wrong')
        }
    }
    const getUser = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "cities"));
            const data = querySnapshot.docs.map((doc) => doc.data());
            dispatch(handleUserData(data));
            if (data) {
                toast.success('Successfully retrieved user')
                // console.log("Document data:", docSnap.data());
            } else {
                toast.error('Sorry, no documents were retrieved')
                console.log("No such document!");
            }
        } catch (error) {
            console.log({ error })
            toast.error('Something went wrong')
        }
    }
    const playText = () => {
        console.log('called lannn')
        state.alan.playText('A metaverse is a user-created virtual world that relies on the power of 3D graphics and user-generated content')
    }
    return (
        <>
            <div className='bg-red-500 h-screen mt-[-9vh] flex justify-center items-center'>
                <p className='p-2 bg-yellow-400 rounded-md m-3 ' onClick={saveUser}>save user</p>
                <p className='p-2 bg-yellow-400 rounded-md m-3' onClick={getUser}>Get user</p>

                <div>
                    {state?.userData?.map((item) => (<p className='p-4 my-3'>{item?.name}</p>))}
                </div>
            </div>
        </>
    )
}
export default about