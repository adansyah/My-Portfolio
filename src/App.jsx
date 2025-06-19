import DataImage from "./data"
import {listTools, listProyek} from "./data"
function App() {

  return (
    <>
       <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <q>Kode yang indah, Lahir dari ketekunan.😁</q>
          </div>
          <h1 className="text-4xl/tight font-bold top-10 mb-6">Hi, Saya Syahdan Mutahariq</h1>
          <p className="text-base/loose mb-6 opacity-50">Saya mempunyai ketertarikan dalam bidang Programming dan Designer, terutama pada pembuatan Website dan Desain seperti Poster, Pamflet serta Banner, ketertarikan pada bidang ini sudah berlangsung lebih dari 4 Tahun untuk semua Bidang.</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 [box-shadow:0_0_10px_transparent] active:[box-shadow:0_0_5px_transparent] active:translate-y-[5px]">Download CV <i class="ri-download-line ri-lg"></i></a>
            <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 [box-shadow:0_0_10px_zinc] active:[box-shadow:0_0_5px_transparent] active:translate-y-[5px]">Lihat Proyek <i class="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px]  md:ml-auto" loading="lazy" />
       </div>

       {/* about */}
       <div className="about mt-32 py-10">
        <div className="xl:w-2/3 lg:w3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
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
          <h1 className="text-4xl/snug font-bold mb-4 text-center ">Tools yang dipakai</h1>
          <p className="text-center  text-base/snug opacity-50">Berikut ini beberapa tools yang biasa saya pakai untuk membuat Website ataupun Design</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map(tools => (
            <div className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800" key={tools.id}>
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
       <div className="proyek mt-32 py10">
        <h1 className="text-center text-4xl font-bold mb-2">Project</h1>
        <p className="text-base/loose text-center opacity-50">Berikut ini beberapa projek yang telah saya buat.</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4">
            {listProyek.map(proyek => (
              <div key={proyek.id} className="p-4 bg-zinc-800 rounded-lg">
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
                    <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 ">Lihat Website</a>
                  </div>
                </div>
              </div>
            ))}
        </div>
       </div>
    </>
  )
}

export default App
