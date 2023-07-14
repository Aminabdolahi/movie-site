import Image from "next/image"
import Link from "next/link"


let page = 1

const getData = async() => {
  const data = await fetch (`https://moviesapi.ir/api/v1/movies?page=${page}`,{cache: 'no-store'})
  return data.json()
}

const Home =async () => {
  const data = await getData();
  return (
    <main className="flex flex-col gap-8 container mx-auto text-gray-50 ">
      <div className="flex justify-center items-center flex-wrap gap-4">
        {
          data.data.map((mov)=>(
            <Link key={mov.id} href={`/movies/${mov.id}`} className="h-[28rem] w-1/6 border-2 shadow-lg bg-[#1a1010] shadow-black border-zinc-300 rounded-2xl p-4 ">
              <div className="justify-center items-center flex">
              <Image className="rounded-lg hover:transition hover:scale-110 duration-700 hover:rotate-1" src={mov.poster} height={260} width={200} alt={mov.title}/>
              </div>
              <div className=" hover:transform  text-center  hover:scale-110 pt-3">
              <h3 >{mov.title}</h3>

              </div>
              <div className="justify-around text-lg pt-3">
                <div className="text-3xl" >{mov.year}</div>
                <div >{mov.country}</div>
              </div>
            </Link>
          ))
        }
      </div>
      <div>
      </div>
      
    </main>
  );
}

export default Home;