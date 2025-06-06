import NavBar from "./lib/NavBar"
import Bamboo from "./lib/Bamboo"

export default function Home() {
  return (
    <main className='bg-blue-200'>
      <NavBar/>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col w-1/14'>
          <Bamboo/>
          <Bamboo/>
          <Bamboo/>
        </div>
        <div className='text-3xl font-bold underline basis-fill font-proxima'>Eric Chu!</div>
        <div className='flex flex-col w-1/14 justify-right'>
          <Bamboo/>
          <Bamboo/>
          <Bamboo/>
        </div>
      </div>
    </main>
  );
}
