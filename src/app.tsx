export function App() {

  return (
    <div className="bg-orange-skin flex w-[1180px] h-[700px] rounded-3xl justify-between p-8 my-24">
      <div className="flex flex-row gap-10 py-5 flex-shrink-0">
        <div className="flex flex-col gap-10">
          <img className="w-[400px] h-[500px] flex rounded-xl outline outline-2 outline-black" src="../public/my-photo2.jpg"></img>
          <div className="flex flex-row gap-4">
            <input type='image' src='button-skills.svg' />
            <input type='image' src='button-portfolio.svg' />
            <input type='image' src='button-contact.svg' />
          </div>
        </div>
        <div className="flex flex-col py-4 gap-4">
          <h1 className="text-5xl text-cyan-800 font-bold drop-shadow-lg">Arthur Stein Darros</h1>
          <p className='w-[550px] text-2xl text-zinc-100'>I am a Front End Developer with a lifelong passion for technology and video games. 
            I studied game programming for a while, but my current focus is on web development. 
            I am a calm person who enjoys solving problems, learns quickly, and has a strong focus. 
            I thrive on challenges and love learning new things.
          </p>
          <p className='w-[550px] text-2xl text-zinc-100'>I am seeking new challenges and an opportunity to start my career in the technology field. 
            Although my studies have been more focused on front-end web development, 
            I am open to any role in the field. I am eager to learn, and if I don't know something, 
            I will certainly take the initiative to learn it.
          </p>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

