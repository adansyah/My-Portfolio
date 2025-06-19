import DataImage from "./data"
// import { gsap } from "gsap";
import {listTools, listProyek} from "./data"
import { useEffect, useState } from "react";
import { Typewriter } from 'react-simple-typewriter';
function App() {
  // const textRef = useRef(null);

  // useEffect(() => {
  //   gsap.to(textRef.current, {
  //     x: 200,
  //     duration: 2,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: "power1.inOut",
  //   });
  // }, []);

   const fullText = "Syahdan Mutahariq";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const delay = isDeleting ? 70 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
        }
      } else {
        setDisplayText(fullText.substring(0, index - 1));
        setIndex(index - 1);

        if (index - 1 === 0) {
          setIsDeleting(false); // restart typing
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <>
       <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <q>Kode yang indah, Lahir dari ketekunan.😁</q>
          </div>
          <h1 className="text-4xl/tight font-bold top-10 mb-6">Hai, Saya {displayText}</h1>
          <p className="text-base/loose mb-6 opacity-50">Saya mempunyai ketertarikan dalam bidang Programming dan Designer, terutama pada pembuatan Website dan Desain seperti Poster, Pamflet serta Banner, ketertarikan pada bidang ini sudah berlangsung lebih dari 4 Tahun untuk semua Bidang.</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 [box-shadow:0_0_10px_transparent] active:[box-shadow:0_0_5px_transparent] active:translate-y-[5px]">Download CV <i className="ri-download-line ri-lg"></i></a>
            <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 [box-shadow:0_0_10px_zinc] active:[box-shadow:0_0_5px_transparent] active:translate-y-[5px]">Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px]  md:ml-auto animate__animated animate__fadeInUp animate__delay-3s" loading="lazy" />
       </div>

       {/* about */}
       <div className="about mt-32 py-10" id="about">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" className="xl:w-2/3 lg:w3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
        <img src={DataImage.HeroImage} alt="Image" loading="lazy" className="w-12 rounded-md mb-10 sm:hidden" />
          <p className="text-base/loose mb-10">Hi, perkenalkan saya Syahdan Mutahariq, seorang Full Stack Web Developer dan Designer untuk UI/UX Design maupun Product Digital, Saya percaya bahwa desain dan fungsionalitas harus berjalan beriringan, sehingga setiap proyek yang saya kembangkan tidak hanya terlihat menarik tetapi juga memberikan pengalaman pengguna yang optimal.</p>
          <div className="flex item-center justify-between ">
            <img src={DataImage.HeroImage} alt="Image About" loading="lazy" className="w-12 h-12 rounded-md sm:block hidden" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">45 <span className="text-violet-500">+</span></h1>
              <p>Proyek Selesai</p>
              </div>  
              <div>
                <h1 className="text-4xl mb-1">4 
                  <span className="text-violet-500">+</span></h1>
              <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

      {/* Tools */}
        <div className="tools mt-32">
          <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" className="text-4xl/snug font-bold mb-4 text-center ">Tools yang dipakai</h1>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true" className="text-center  text-base/snug opacity-50">Berikut ini beberapa tools yang biasa saya pakai untuk membuat Website ataupun Design</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map(tools => (
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tools.dad} data-aos-once="true" className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800" key={tools.id}>
              <img src={tools.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
              <div>
                <h4 className="font-bold">{tools.nama}</h4>
                <p className="opacity-50">{tools.ket}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
       </div>

       {/* Proyek */}
       <div className="proyek mt-32 py10" id="proyek">
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" className="text-center text-4xl font-bold mb-2">Project</h1>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true" className="text-base/loose text-center opacity-50">Berikut ini beberapa projek yang telah saya buat.</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4">
            {listProyek.map(proyek => (
              <div key={proyek.id} className="p-4 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
                <img src={proyek.gambar} alt="Proyek image" loading="lazy" />
                <div>
                  <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2 ">
                    {proyek.tools.map((tool, index) =>(
                      <p className="py1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Lihat Website</a>
                  </div>
                </div>
              </div>
            ))}
        </div>
       </div>

       {/* Kontak */}
       <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" className="text-4xl font-bold text-center">Kontak</h1>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true" className="text-base/loose text-center mb-10 opacity-50">Mari terhubung dengan saya.</p>
        <form action="https://formsubmit.co/adansyah225@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full  mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" className="border border-zinc-500 p-2 rounded-md" placeholder="Masukan Nama..." required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-semibold">Email</label>
              <input type="email" name="email" className="border border-zinc-500 p-2 rounded-md" placeholder="Masukan Email..." required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" className="border border-zinc-500 p-2 rounded-md" cols="45" rows="7" id="" placeholder="Pesan..." required></textarea>
            </div>
            <div className="text-center">
             <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600 ">Kirim Pesan</button>
            </div>
          </div>
        </form>
       </div>

       
    </>
  )
}

export default App
