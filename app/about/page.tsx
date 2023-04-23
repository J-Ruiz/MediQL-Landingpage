import Image from 'next/image';
export default async function About() {
  return (
    <>
      <div className="flex ml-10 mt-10 space-x-20">
        <div className="flex space-x-20">
          <div className="space-y-24 flex flex-col items-center space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <Image
                className="text-xl hover:animate-pulse"
                alt="red cross what is mediql"
                src="/red-cross.jpg"
                width={200}
                height={200}
              />
              <div>What is MediQL?</div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                className="hover:animate-pulse"
                alt="hammer picture for why we built the app"
                src="/hammer-1.jpg"
                width={200}
                height={200}
              />
              <div>Why we built it</div>
            </div>
          </div>

          <div className="space-y-24 flex flex-col items-center space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <Image
                className="hover:animate-pulse"
                alt="arrow up picture for why it enhances development"
                src="/arrow-up.jpg"
                width={180}
                height={180}
              />
              <div>Enhanced development</div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                className="hover:animate-pulse"
                alt="picture of a computer chip signifying what technologies we used"
                src="/chip.jpg"
                width={180}
                height={180}
              />
              <div>Technology</div>
            </div>
          </div>
        </div>

        <div className="text-3xl mt-32">
          Text that updates when you click on each image
        </div>
      </div>
    </>
    // <div>
    //   <h1 className="bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent text-5xl  drop-shadow font-extrabold">
    //     About Us
    //   </h1>
    // </div>
  );
}
