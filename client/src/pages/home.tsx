import { FaMagnifyingGlass } from 'react-icons/fa6'
import { Button } from '../components/Button'
import { CgMenuGridO } from 'react-icons/cg'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home: FC = () => {
  const navigate = useNavigate()
  const [searchField, setSearchField] = useState("")

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/search?query=${searchField.split(" ").join("+")}`)
  }

  const bottomLeft = [
    'Sobre',
    'Publicidade',
    'Negócios',
    'Como funciona a Pesquisa'
  ]

  const bottomRight = [
    'Privacidade',
    'Termos',
    'Configurações'
  ]

  return (
    <div className="flex flex-col justify-between items-center w-full h-full">
      <div className="flex flex-col w-full">
        <div className="flex justify-end items-center h-16 p-4 gap-4 w-full">
          <a href="#" className="text-sm text-white hover:underline">Gmail</a>

          <a href="#" className="text-sm text-white hover:underline">Imagens</a>

          <button className="bg-transparent bg-transparent hover:bg-[#303134] p-2 rounded-full">
            <CgMenuGridO className="w-[1.5rem] h-[1.5rem]"/>
          </button>
          
          <button className="border border-4 border-transparent hover:border-[#303134] focus:border-[#303134] rounded-full">
            <div className="relative inline-flex items-center justify-center w-[32px] h-[32px] overflow-hidden bg-slate-800 rounded-full">
              <span className="font-medium text-sm text-gray-200">BM</span>
            </div>
          </button>
        </div>

        <form onSubmit={handleSearch} className="flex flex-col justify-center items-center gap-7 mb-16">
          <label htmlFor="searchField">
            <img className="h-[92px]" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png" alt="google_logo" />
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
              <FaMagnifyingGlass className="w-[0.8rem] h-[0.8rem] text-gray-400"/>
            </div>
            <input 
              type="text" id="searchField" required
              className="
                bg-transparent hover:bg-[#303134] focus:bg-[#303134] border border-zinc-600 text-gray-200 text-sm 
                rounded-full focus:outline-none block w-[27rem] lg:w-[37rem] h-[2.9rem] ps-10 p-3
              "
              value={searchField} onChange={(e) => setSearchField(e.target.value)}
            />
          </div>
          <div className='flex justify-center gap-3'>
            <Button submit>
              Pesquisa Google
            </Button>

            <Button >
              Estou com sorte
            </Button>
          </div>
        </form>
      </div>

      <div className="w-full flex flex-col bg-[#171717]">
        <div className="flex px-8 py-3.5">
          <a href="#" className="text-sm">
            Brasil
          </a>
        </div>
        <hr className="h-px border-0 bg-gray-700"></hr>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center md:px-2">
          <div className="flex text-center justify-center md:justify-start items-center px-8 py-3.5 gap-8">
            {
              bottomLeft.map((option, key) => (
                <a key={key} href="#" className="text-sm">{option}</a>
              ))
            }
          </div>

          <div className="flex justify-start items-center px-8 py-3.5 gap-8">
            {
              bottomRight.map((option, key) => (
                <a key={key} href="#" className="text-sm">{option}</a>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
