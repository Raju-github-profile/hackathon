import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase/index"
import { handleMapLocation } from "../../redux/slices/slice1"
const Nilesh = '/hero.png'


const slug = () => {
    const state = useSelector((state) => state.Slice1)
    const router = useRouter()
    const [isOrdered, setIsOrdered] = useState(false)
    const dispatch = useDispatch()

    const { uid } = state?.auth
    const Email = state?.auth?.emails
    const fullName = state?.fullName?.fullName
    const userCoordinates = state?.fullName?.userCoordinates

    console.log({ uid, Email, fullName, userCoordinates })
    const slug = router?.query?.slug
    const filterData = state?.userData?.filter((item) => item?.productName == slug)
    const { farmerName, farmerPhone, productName, productPrice, productQuantity, farmerCoordinates, farmerAddress, category, email } = filterData[0]

    const handleLocation = () => {
        dispatch(handleMapLocation(userCoordinates))
        router.push('/map')
    }



    const handleOrder = async () => {
        try {
            const data = await addDoc(collection(db, "orderItem"), { orderStatus: 'pending', farmerOrSeller: filterData[0], date: new Date(), buyeruid: uid, buyer: { uid, email: Email, userCoordinates, fullName } });
            console.log({ data })
            setIsOrdered(true)
            // setLoading(true)
            toast.success('Thank you for adding Product')
        } catch (error) {
            console.log({ error })
            toast.error('Something went wrong')
        }
    }
    return (
        <div className="subcontainer single-product">
            <div className="row">
                <div className="cols">
                    <img src={'/hero.png'} width="100%" id="product-img" />
                </div>
                <div className="cols">
                    <p>{farmerName}</p>
                    <h1>{productName}</h1>
                    <h4>Rs. {productPrice}</h4>
                    {/* <select name="" id="">
                        <option value="">Select Quantity</option>
                        <option value="">small</option>
                        <option value="">Medium</option>
                        <option value="">Large</option>
                    </select> */}
                    {isOrdered ? (
                        <p onClick={handleOrder} href="#" className="p-2 bg-green-400 text-white font-medium">Thank you for Ordering...</p>

                    ) : (
                        <p onClick={handleOrder} href="#" className="btn">Order Now</p>
                    )}
                    <h3>Product details</h3>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, numquam atque similique aliquam cum, dignissimos error adipisci corporis assumenda a repellendus porro dolore aliquid modi!</p>
                </div>
            </div>
            <div>
                <p onClick={handleLocation} className='text-xl bg-red-400 font-bold'>
                    see my location on map
                </p>
            </div>
            <div className="farmer_produced">
                <h1 className="supplyer">
                    Good Supplyer
                </h1>
                <div className="supplyer_card">
                    <img className='supplyer_img' src={Nilesh} alt="" />
                    <div className="supplyer_detail">
                        <h2 className="name">Yukesh Katwal</h2>
                        <h3 className="occupation">Cauliflower farmer</h3>
                        <h4 className="email">...@gmail.com</h4>
                        <h5 className="Phone Number"></h5>
                        <div className="rating">stars</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, numquam atque similique aliquam cum, dignissimos error adipisci corporis assumenda a repellendus porro dolore aliquid modi!</p>
                        <div className="coordinates">00000000</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default slug


