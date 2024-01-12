
import Image from "next/image";

const imageStyle = {
  clipPath: 'circle(50%)',
}


export default function ProfileImage(){
  return(
    <Image
      src='/images/tiff.jpeg'
      alt='Photo'
      width={130}
      height={130}
      style={imageStyle}
    />
  )
}
