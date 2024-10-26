import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import Lights from "./Lights"
import { Suspense } from "react"
import IPhone from './IPhone';


const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    <View
    index={index}
    id={gsapType}
    className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >

     {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights></Lights>

      <OrbitControls></OrbitControls>

      <group  ref={groupRef} name={`${index === 1} ? 'small' : 'large`} position={[0, 0 ,0]}>

      <Suspense fallback={<div>Loading</div>}>
        <IPhone></IPhone>

      </Suspense>
      </group>
     
    </View>
  )
}

export default ModelView