import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
// import Nilesh from "../images/cauliflower.jpg"
const Nilesh = '/hero.png'
const product = () => {
  const state = useSelector((state) => state.Slice1)
  console.log(state.userData)
  const vegetables = state?.userData?.filter((item) => item?.category == 'Vegetables')
  const fruits = state?.userData?.filter((item) => item?.category == 'Fruits')
  const grains = state?.userData?.filter((item) => item?.category === 'Grain')

  return (

    <div className="available_farmers">
      <div className="product_head">
        <h1 className="available text-5xl font-bold">
          Our Products            </h1>
        {/* <select name="" id="">
          <option value="">Select Quantity</option>
          <option value="">small</option>
          <option value="">Medium</option>
          <option value="">Large</option>
        </select> */}


      </div>

      <div className='mt-8'>
        <div>
          <p className='text-2xl font-bold '>Vegetables</p>
          <div className="farmer_cards">

            {vegetables?.map(({ productName, productPrice }) => (
              <Link href={`/product-detail/${productName}`}>
                <div className="farmer_card">
                  <img className='farmer_img' src={Nilesh} alt="" />
                  <div className="farmer_detail">
                    <h3 className="name">{productName}</h3>
                    <div className="rating">stars</div>
                    <div>Price : Rs {productPrice}/quintal</div>
                  </div>
                </div>


              </Link>
            ))}
          </div>

        </div>
        <div>
          <p className='text-2xl font-bold '>Grain</p>
          <div className="farmer_cards">

            {grains?.map(({ productName, productPrice }) => (
              <Link href={`/product-detail/${productName}`}>
                <div className="farmer_card">
                  <img className='farmer_img' src={Nilesh} alt="" />
                  <div className="farmer_detail">
                    <h3 className="name">{productName}</h3>
                    <div className="rating">stars</div>
                    <div>Price : Rs {productPrice}/quintal</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
        <div>
          <p className='text-2xl font-bold '>Fruits</p>
          <div className="farmer_cards">

            {fruits?.map(({ productName, productPrice }) => (
              <Link href={`/product-detail/${productName}`}>
                <div className="farmer_card">
                  <img className='farmer_img' src={Nilesh} alt="" />
                  <div className="farmer_detail">
                    <h3 className="name">{productName}</h3>
                    <div className="rating">stars</div>
                    <div>Price : Rs {productPrice}/quintal</div>
                  </div>
                </div>


              </Link>
            ))}
          </div>

        </div>


      </div>




    </div>
  )
}

export default product