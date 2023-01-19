import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { auth } from "../firebase/index"
import toast from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth'
import Navbar from '@/components/Navbar/Navbar'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { handleAlan, handleCount } from '@/redux/slices/slice1'
const alanKey = 'c411c68b1472d0c9b61616ccb9a09ec72e956eca572e1d8b807a3e2338fdd0dc/stage'
export default function Home() {
  const state = useSelector((state) => state.Slice1)
  console.log(state.alan)
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    const alanBtn = require('@alan-ai/alan-sdk-web');
    dispatch(handleAlan(
      alanBtn({
        key: alanKey,
        onCommand: ({ command }) => {
          console.log({ command })
          if (command === 'introduce me') {
            alert('i received command')
          }
          if (command === 'about page') {
            router.push('/about')
          }
          if (command === 'about page') {
            router.push('/about')
          }
          if (command == 'goBack') {
            router.back()
          }
        }
      })
    ))
  }, []);
  useEffect(() => {
    if (state?.alan && !state?.count) {
      state?.alan?.activate()
    }
  }, [state?.alan])
  useEffect(() => {
    if (state?.alan && !state?.count) {
      state?.alan?.playText('Hello i am your voice assistant.Please remember me if you need any help')
      dispatch(handleCount(1))
    }
  }, [state?.alan])

  const handleClick = async (e) => {
    e.preventDefault();
    await signOut(auth)
    toast.success('Successfully sign out');
  }
  const playText = () => {
    console.log('called lannn')
    state?.alan?.activate()

    state.alan.playText('Welcome home buddy')
  }
  return (
    <div className='h-screen mt-[-9vh]'>
      <Head>
        <title>Home</title>
      </Head>
      <div className='bg-gradient-to-l from-indigo-300 to-purple-400 py-[54px]'>
        <div className="pt-24">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              <p className="uppercase lg:pl-12 text-5xl font-bold tracking-loose w-full text-white">Bug Lovers</p>
              <h1 className="text-slate-300 my-4 md:px-8 text-lgl font-bold leading-tight">
                “Let's Uplift the agriculture sector of Nepal”
              </h1>
            </div>
            <div className="w-full md:w-3/5 py-6 text-center">
              <img className="rounded-lg  duration-150 ease-out w-full md:w-3/5 z-50" src="/hero.png" />
            </div>
            {/* <p onClick={playText} className='p-3 bg-red-500 text-white'>Play me</p>
            <p onClick={playText} className='p-3 my-5 bg-red-500 text-white'>Sign Out</p> */}
          </div>
        </div>
      </div>
    </div>

  )
}
