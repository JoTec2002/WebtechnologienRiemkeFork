import Hallo from '../components/Hallo';
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <Hallo vorname="Susi" nachname="Super"/>
      <Hallo vorname="Horst" nachname="Horstinger"/>
      <Hallo vorname="Freddy" nachname="Frisch"/>
      <Link href="/about">zu about</Link>
    </div>
   
  )
}
