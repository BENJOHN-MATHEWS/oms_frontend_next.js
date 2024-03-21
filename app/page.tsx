
 import Image from 'next/image'
 import Link from 'next/link'

 export default function Home() {
   return (
    <main>
    <div style={{ marginBottom: '1rem' }}>
    <h1>OMS-Organization Management System</h1>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <h1><Link href='/organization'>Organization</Link></h1>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <h1><Link href='/employee'>Employee</Link></h1>
    </div>
  </main>    
   )
 }