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
        <div className='flex-col justify-center'>
          <a className='text-3xl font-bold underline basis-fill font-proxima text-center' href='/resume'>Current Resume Here!</a>
          <p className='justify-center text-center'><br/><br/>Website is work in progress! <br/> Trying to go for a homemade look/aesthetic <br/>I also like plants</p>
        </div>
        <div className='flex flex-col w-1/14 justify-right'>
          <Bamboo/>
          <Bamboo/>
          <Bamboo/>
        </div>
      </div>
    </main>
  );
}
