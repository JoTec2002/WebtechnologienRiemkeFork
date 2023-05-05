import Hallo from '../components/Hallo';
import Navigation from '../components/Navigation';
import Link from 'next/link';
export default function Home() {
  const namen = [
    {vorname: "Susi", nachname:"Super"},
    {vorname: "Horst", nachname:"Horstinger"},
    {vorname: "Freddy", nachname:"Frisch"},

  ];
  return (
    <div>
      <Navigation/>
      {
        namen.map((item)=>
        <Hallo vorname={item.vorname} nachname={item.nachname} />
        )
      }
      <Hallo vorname="Susi" nachname="Super"/>
      <Hallo vorname="Horst" nachname="Horstinger"/>
      <Hallo vorname="Freddy" nachname="Frisch"/>
      <Link href="/about">zu about</Link>
    </div>
   
  )
}
