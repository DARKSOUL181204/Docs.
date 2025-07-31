import React ,{useRef,useState}from 'react'
import Card from './card.jsx'

const Foreground = () => {
    const ref = useRef(null)
    const data = [
        {
            desc:"Whatever is written in this will be displayed.",
            fileSize:".4mb",
            close:true,
            tag:{isopen:true,tagTitle:"download",tagColor:"green"}
        },
             {
            desc:"Whatever is written in this will be displayed.",
            fileSize:".4mb",
            close:true,
            tag:{isopen:true,tagTitle:"download",tagColor:"green"}
        },     
        {
            desc:"Whatever is written in this will be displayed.",
            fileSize:".4mb",
            close:true,
            tag:{isopen:true,tagTitle:"download",tagColor:"green"}
        },
        {
            desc:"Whatever is written in this will be displayed.",
            fileSize:".4mb",
            close:true,
            tag:{isopen:true,tagTitle:"download",tagColor:"blue"}
        }
    ]

  return (
   <div ref={ref} className="fixed  w-full h-full z-[3] top-0 left-0 flex gap-10 flex-wrap p-10">
    {
    data.map((item,index)=>(
        <Card data={item} refrence={ref} />
    ))
    }
   </div>
  )
}

export default Foreground