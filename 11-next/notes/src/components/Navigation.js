import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Navigation() {
    const router = useRouter();
    console.log(router.pathname);
    return (
        <div>
            <nav>
                <ul className="flex flex-row  justify-evenly justify-items-stretch text-white p-3 text-lg bg-blue-300 w-full">
                    <li><Link href="/" className={router.pathname == "/" ? "bg-blue-400 flex-1 p-3" : ""} >Home</Link></li>
                    <li><Link href="/notes" className={router.pathname == "/notes" ? "bg-blue-400 flex-1 p-3" : ""} >Notes</Link></li>
                    <li><Link href="/about" className={router.pathname == "/about" ? "bg-blue-400 flex-1 p-3" : ""} >About</Link></li>
                </ul>
            </nav>
        </div>
    )
}