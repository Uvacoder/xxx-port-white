
import Image from "next/image";

const imageStyle = {
  clipPath: 'circle(50%)',
  border: '1px solid #fff',
}


export default function ProfileImage(){
  return(
    <Image
      src='/images/tiff.jpg'
      alt='Photo'
      width={150}
      height={150}
      style={imageStyle}
    />
  )
}
