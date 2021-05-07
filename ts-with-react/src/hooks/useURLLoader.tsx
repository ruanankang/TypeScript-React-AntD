import { useState, useEffect } from "react";
import axios from "axios";

const useURLLoader = (url: string, deps: any[] = []) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    axios.get(url).then(res => {
      setData(res.data);
      setLoading(false);
    })
  }, [url])

  return [data, loading]
}

export default useURLLoader;