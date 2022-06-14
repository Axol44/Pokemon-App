import { useEffect, useState } from "react"

export const useFetch = (url) => {
  //Estado inicial

  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    setState({data: null, error: null, loading: true})

    fetch( url )
      .then( resp => resp.json() )
      .then( data => {

        setState({
          loading: false,
          error: null,
          data
        })
      })

  }, [url])
  
  return state

}
