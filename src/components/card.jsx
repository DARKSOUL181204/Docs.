import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import {motion, scale } from "framer-motion"
const Card = ({data,refrence}) => {
  return (
    <div>
        <motion.div drag  dragConstraints={refrence} whileDrag={{scale:1.2}}  className="relative flex-shrink-0 w-50 h-60 bg-zinc-700/90 rounded-[40px] text-white p-5 overflow-hidden">
            <FaRegFileAlt/>
            <p className='text-sm mt-5 font-semibold leading-tight  '>{data.desc}</p>
            <div className="footer absolute bottom-0 w-full left-0">
                <div className=" mt-10 flex justify-between text-zinc-300 p-5 mb-2">
                    <div className=" text-sm ">{data.fileSize}</div>
                    {data.close ? <MdOutlineFileDownload/>:<IoClose />}
                </div>
                {
                    data.tag.isopen &&(
                        <div className={`tag w-full ${data.tag.tagColor === "blue"? "bg-blue-600":"bg-green-600" } py-4 flex justify-center items-center`}>
                            <h3 className='text-md font-semibold'> {data.tag.tagTitle}</h3>
                        </div>
                    ) 
                }
            </div>
           
        </motion.div>
    </div>
  )
}

export default Card