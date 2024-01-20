import { FC } from "react"

const Result: FC<{data: SearchResult[]}> = ({data}) => {


  return (
    <div>
      <h1>Resultado</h1>
      {JSON.stringify(data)}
    </div>
  )
}

export default Result