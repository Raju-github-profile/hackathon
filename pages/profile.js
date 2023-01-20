import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { collection, query, where, getDocs, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/index"
import { handleUserProfile, handleAdminOrders } from "../redux/slices/slice1"
import { getDatabase, ref, child, get } from "firebase/database";
import { toast } from 'react-hot-toast';
const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
    console.log("Current data: ", doc.data());
});
const profile = () => {
    const state = useSelector((state) => state.Slice1)
    const dispatch = useDispatch()

    useEffect(() => {
        const getUserData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "orderItem"));
                const data = querySnapshot.docs.map((doc) => doc.data());
                dispatch(handleAdminOrders(data));
                console.log("called hai state.flag")
            } catch (error) {
                console.log({ error })
                toast.error('Something went wrong')
            }
        }
        getUserData()
    }, [state.flag])

    // useEffect(() => {
    //     const dbRef = ref(getDatabase());
    //     get(child(dbRef, `orderItem`)).then((snapshot) => {
    //         if (snapshot.exists()) {
    //             console.log(snapshot.val());
    //         } else {
    //             console.log("No data available");
    //         }
    //     }).catch((error) => {
    //         console.error(error);
    //     });
    // }, [])
    console.log(state?.userData)
    console.log(state?.adminOrders)
    const profile = state?.userData?.filter((item) => item.uid === state?.auth?.uid)
    const orders = state?.adminOrders?.filter((item) => item?.buyer.uid === state?.auth?.uid)
    console.log({ profile })
    console.log({ orders })

    const getUser = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "cities"));
            const data = querySnapshot.docs.map((doc) => doc.data());
            dispatch(handleUserProfile(data));
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
    return (
        <div>profile</div>
    )
}

export default profile



// const dbRef = ref(getDatabase());
// get(child(dbRef, `orderItem`)).then((snapshot) => {
//     if (snapshot.exists()) {
//         console.log(snapshot.val());
//     } else {
//         console.log("No data available");
//     }
// }).catch((error) => {
//     console.error(error);
// });
