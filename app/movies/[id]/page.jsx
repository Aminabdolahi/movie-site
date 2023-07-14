import Notfound from "@/app/not-found";
import Image from "next/image";

const getData = async (id) => {
  const data = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, {
    cache: "no-store",
  });
  return data.json();
};

const Single = async ({ params }) => {
  const data = await getData(params.id);

  if (!data.id){
    return Notfound();
  }

  return (
    <div className=" container mx-auto leading-loose text-justify  text-gray-50">
      <section className="rounded-lg bg-[#1a1010] p-8 flex justify-between items-start">
        <div className='text-[20px]'>
          <h1>{data.title}</h1>
          <div>سال ساخت :{data.year}</div>
          <div>کارگردان :{data.director}</div>
          <div>مدت زمان فیلم: {data.runtime}</div>
          <div>امتیاز IMDB :{data.imdb_rating}</div>
        <div>
            <div>خلاصه فیلم:</div>
            <div className="w-2/3">{data.plot}</div>
        </div>
        <div>
            <div>دسته یندی:</div>
            <div className="flex justify-start items-center gap-8">
                {
                    data.genres.map((gen, i)=>(
                        <div key={i} className="bg-[#ca6b12] px-2  rounded-lg ">{gen}</div>
                    ))
                }
                </div>
        </div>
        </div>
        <div>
          <Image
          className="rounded-3xl"
          // layout="responsive"
            width={500}
            height={600}
            alt={data.title}
            src={data.poster}
            priority={true}
          />
        </div>
      </section>
      <section className="flex justify-around items-center py-10">
       {
        data.images.map((imge)=>(
            <Image
            key={data.id}
          className="rounded-3xl px-1 w-1/3"
          // layout="responsive"
            width={300}
            height={200}
            alt={data.title}
            src={imge}
            priority={true}
          />
        ))
       }
      </section>
    </div>
  );
};

export default Single;
