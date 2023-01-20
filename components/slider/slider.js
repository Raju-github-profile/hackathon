import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
// import Nilesh from "../images/nilesh.jpg"
const Nilesh = 'https://github.com/pandeyprashant123-coder/krishi_bazar/blob/main/src/images/nilesh.jpg?raw=true'
const images = [
    { url: 'https://github.com/pandeyprashant123-coder/krishi_bazar/blob/main/src/images/banner3.png?raw=true' },
    { url: 'https://github.com/pandeyprashant123-coder/krishi_bazar/blob/main/src/images/banner1.png?raw=true' },
    { url: 'https://github.com/pandeyprashant123-coder/krishi_bazar/blob/main/src/images/banner2.png?raw=true' },

];
export const Slider = () => {
    return (
        <>
            <div className='sliderImg'>
                <SimpleImageSlider
                    width={1518}
                    height={470}
                    images={images}
                    className='obje'
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                />
            </div>
            <div className="available_farmers">
                <h1 className="text-5xl font-bold text-center">
                    Our Happy Farmers
                </h1>
                <div className="farmer_cards">
                    <div className="farmer_card">
                        <img className='farmer_img' src={Nilesh} alt="" />
                        <div className="farmer_detail">
                            <h3 className="name">Yukesh Katwal</h3>
                            <h5 className="occupation">Cauliflower farmer</h5>
                            <div className="rating">stars</div>
                        </div>
                    </div>
                    <div className="farmer_card">
                        <img className='farmer_img' src={Nilesh} alt="" />
                        <div className="farmer_detail">
                            <h3 className="name">Yukesh Katwal</h3>
                            <h5 className="occupation">Cauliflower farmer</h5>
                            <div className="rating">stars</div>
                        </div>
                    </div>
                    <div className="farmer_card">
                        <img className='farmer_img' src={Nilesh} alt="" />
                        <div className="farmer_detail">
                            <h3 className="name">Yukesh Katwal</h3>
                            <h5 className="occupation">Cauliflower farmer</h5>
                            <div className="rating">stars</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="available_farmers">
                <h1 className="available">
                    Categories
                </h1>
                <div className="farmer_cards">
                    <div className="farmer_card">
                        <img className='farmer_img' src={Nilesh} alt="" />
                        <div className="farmer_detail">
                            <h3 className="name">Grains</h3>
                        </div>
                    </div>
                    <div className="farmer_card">
                        <img className='farmer_img' src={Nilesh} alt="" />
                        <div className="farmer_detail">
                            <h3 className="name">Vegetables</h3>
                        </div>
                    </div>
                    <div className="farmer_card">
                        <img className='farmer_img' src={Nilesh} alt="" />
                        <div className="farmer_detail">
                            <h3 className="name">Fruits</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="available_farmers">
                <h1 className="available">
                    Our Products
                </h1>
                <div className="farmer_cards">
                    <div className="farmer_card">
                        <img className='farmer_img' src={Nilesh} alt="" />
                        <div className="farmer_detail">
                            <h3 className="name">Cauliflower</h3>
                            <div className="rating">stars</div>
                        </div>
                    </div>
                    <div className="farmer_card">
                        <img className='farmer_img' src={Nilesh} alt="" />
                        <div className="farmer_detail">
                            <h3 className="name">Cauliflower</h3>
                            <div className="rating">stars</div>
                        </div>
                    </div>
                    <div className="farmer_card">
                        <img className='farmer_img' src={Nilesh} alt="" />
                        <div className="farmer_detail">
                            <h3 className="name">Cauliflower</h3>
                            <div className="rating">stars</div>
                        </div>
                    </div>
                    <div className="farmer_card">
                        <img className='farmer_img' src={Nilesh} alt="" />
                        <div className="farmer_detail">
                            <h3 className="name">Cauliflower</h3>
                            <div className="rating">stars</div>
                        </div>
                    </div>
                    <div className="farmer_card">
                        <img className='farmer_img' src={Nilesh} alt="" />
                        <div className="farmer_detail">
                            <h3 className="name">Cauliflower</h3>
                            <div className="rating">stars</div>
                        </div>
                    </div>
                    <div className="farmer_card">
                        <img className='farmer_img' src={Nilesh} alt="" />
                        <div className="farmer_detail">
                            <h3 className="name">Cauliflower</h3>
                            <div className="rating">stars</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}