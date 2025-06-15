import DataImage from "./data"
function App() {

  return (
    <>
       <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <q>Kode yang indah, Lahir dari ketekunan.😁</q>
          </div>
          <h1 className="text-4xl/tight font-bold top-10 mb-6">Hi, Saya Syahdan Mutahariq</h1>
          <p className="text-base/loose mb-6 opacity-50">Saya mempunyai ketertarikan dalam bidang Programming dan Designer, terutama pada pembuatan Website dan Desain seperti Poster, Pamflet serta Banner, ketertarikan pada bidang ini sudah berlangsung lebih dari 4 Tahun untuk semua Bidang.</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i class="ri-download-line ri-lg"></i></a>
            <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Proyek <i class="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" />
       </div>
    </>
  )
}

export default App
