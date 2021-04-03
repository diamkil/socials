import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <h1>User not found! (404)</h1>
            <Link href="/">
                <a>Return home</a>
            </Link>
        </>
    )
}