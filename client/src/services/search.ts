class Search {
  private url: string = "http://localhost:8000"

  private config: RequestInit = {
    headers: {
      "Content-Type": "application/json"
    },
    mode: "cors",
    credentials: "include",
    cache: "no-cache",
    redirect: "follow",
    referrerPolicy: "no-referrer",
  }

  public query = async (query: string, locale?: string, lang?: string) => {
    const res = await fetch(`${this.url}/search?query=${query}${locale?`&locale=${locale}`:""}${lang?`&lang=${lang}`:""}`, {
      ...this.config,
      method: "GET"
    })

    if(res.ok){
      return res.json()
    }else{
      return false
    }
  }
}

export const search = new Search()