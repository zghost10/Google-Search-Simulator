import { useEffect, useState } from "react"
import { search } from "../services/search"
import { CgMenuGridO } from "react-icons/cg"
import { PiGear } from "react-icons/pi"
import { Link, useSearchParams } from "react-router-dom"

const Result = () => {
  const [searchField, setSearchField] = useState("")
  const [searchResult, setSearchResult] = useState<SearchResult[]|null>(null)
  const [searchParams, setSearchParams] = useSearchParams()
  
  const options = [
    'Vídeos',
    'Imagens',
    'Notícias',
    'Shopping',
    'Maps',
    'Livros',
    'Voos',
    'Finanças'
  ]

  const handleSearch = async () => {
    if(searchField !== ""){
      searchParams.delete("query")
      searchParams.set("query", searchField)
      setSearchParams(searchParams)
      setSearchResult(await search.query(searchField))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSearch()
  }

  useEffect(() => {
    const fetch = async (query: string) => setSearchResult(await search.query(query))
    const query = searchParams.get("query")
    setSearchField(query!.split("+").join(" "))
    fetch(query!.split("+").join(" "))
  },[])

  return (
    <div className="relative flex flex-col h-full gap-3">
      <div className="container mx-auto max-w-screen-lg flex flex-col mb-2 px-8 md:px-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex shrink-0 justify-start items-center pt-7 pb-4 gap-10">
            <Link to="/"><img className="w-[92px] h-[30px]" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png" alt="google_logo" /></Link>
            
            <form onSubmit={handleSubmit}>
              <input
                type="text" id="searchField" required
                className="
                  bg-[#303134] hover: focus: text-gray-200 text-sm 
                  rounded-full focus:outline-none block w-[32rem] h-[2.82rem] py-3 px-5
                "
                value={searchField} onChange={(e) => setSearchField(e.target.value)}
              />
            </form>
          </div>

          <div className="absolute right-0 top-0 h-full hidden md:block">
            <div className="flex items-center pt-7 pb-4 px-6 gap-2">
              <button className="bg-transparent bg-transparent hover:bg-[#303134] p-2 rounded-full">
                <PiGear className="w-[1.5rem] h-[1.5rem]"/>
              </button>

              <button className="bg-transparent bg-transparent hover:bg-[#303134] p-2 rounded-full">
                <CgMenuGridO className="w-[1.5rem] h-[1.5rem]"/>
              </button>

              <button className="border border-4 border-transparent hover:border-[#303134] focus:border-[#303134] rounded-full">
                <div className="relative inline-flex items-center justify-center w-[32px] h-[32px] overflow-hidden bg-slate-800 rounded-full">
                  <span className="font-medium text-sm text-gray-200">BM</span>
                </div>
              </button>
            </div>            
          </div>
        </div>

        <div className="flex gap-1">
          {
            options.map((opt, key) => (
              <button key={key} className="text-sm px-3 py-2 bg-transparent hover:bg-[#303134] border border-zinc-600 rounded-full">
                {opt}
              </button>
            ))
          }
        </div>
      </div>

      <hr className="h-px border border-zinc-700 w-full"/>

      <div className="container mx-auto max-w-screen-lg px-8 md:px-0">
        <div className="flex flex-col items-start py-6 pb-10 gap-8 max-w-xl">
        {
          searchResult ?
          searchResult.map((res) => (
            <div>
              <a 
                href={res.link??"#"}
                className="text-xl text-blue-300"
              >
                <h4>{res.title}</h4>
              </a>
              <p>{res.snippet}</p>
            </div>
          ))
          : (
            <div>
              <h1>Back-end is offline!</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Result