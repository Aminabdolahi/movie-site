import Image from "next/image"
import Link from "next/link"

const getData = async() => {
  const data = await fetch ('https://moviesapi.ir/api/v1/movies?page={page}',{cache: 'no-store'})
  return data.json()
}

const Home =async () => {
  const data = await getData()
  return (
    <main className="flex flex-col gap-8 container mx-auto">
      <div className="text-center text-[32px] text-blue-400">صفحه اصلی</div>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {
          data.data.map((mov)=>(
            <Link key={mov.id} href={`/movies/${mov.id}`} className="h-[26rem] w-72 border-2  border-zinc-300 rounded-2xl p-4 ">
              <div className="justify-center items-center flex">
              <Image className="rounded-lg" src={mov.poster} height={260} width={200} alt={mov.title}/>
              </div>
              <h3 className="flex justify-end items-center text-lg">{mov.title}</h3>
              <div className="flex justify-around pt-3">
                <div className="px-3 py-1 bg-zinc-200 rounded-lg w-1/4">{mov.year}</div>
                <div className="px-3 py-1 bg-zinc-200 text w-1/4 h-10 rounded-lg">{mov.country}</div>
              </div>
            </Link>
          ))
        }
      </div>
    </main>
  );
}

export default Home;