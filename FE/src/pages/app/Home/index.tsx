import React,{FC} from 'react'
import Navbars from '../../../components/Navbar'
import Sidebar from '../../../components/Sidebar'

type Props = {}

const Home: FC<Props> = () => {
  return (
    <div>
      <Navbars/>
      <Sidebar/>
    </div>
  )
}

export default Home
