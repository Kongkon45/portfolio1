import Image from 'next/image'
import React from 'react'
import myPic from '@/public/images/Kongkon.jpg'

export default function Home() {
  return (
    <div>
      <h1 className='my-10'>This is Home page</h1>
      <Image src={myPic} alt='my pic' width={300} height={300} placeholder='blur' blurDataURL='data...'/>
    </div>
  )
}
