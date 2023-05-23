import Display from '@/components/sorting/display'
import SettingsPanel from '@/components/sorting/settings'
import Image from 'next/image'


export default function Home() {
  return (
    <main>
       <div className='visualizer-grid'>

          <Display/>
          <SettingsPanel/>
       </div>
    </main>
  )
}
