import Hallo from '../components/Hallo';
import Navigation from '../components/Navigation';
import Link from 'next/link';
import Zaehler from '../components/Zaehler';
export default function Home() {
  const namen = [
    {vorname: "Susi", nachname:"Super"},
    {vorname: "Horst", nachname:"Horstinger"},
    {vorname: "Freddy", nachname:"Frisch"},

  ];
  return (
    <div>
      <Navigation/>
      <Zaehler/>
      {
        namen.map((item, index)=>
        <Hallo key={index} vorname={item.vorname} nachname={item.nachname} />
        )
      }
      <Hallo vorname="Susi" nachname="Super"/>
      <Hallo vorname="Horst" nachname="Horstinger"/>
      <Hallo vorname="Freddy" nachname="Frisch"/>
      <Link href="/about">zu about</Link>
    </div>
   
  )
}
