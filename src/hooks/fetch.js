import { useState, useEffect } from "react";

const useFetch = () => {
  const [requestObject, request] = useState(null);
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    /**
     *  A custom react hook to handle the API calls
     */
    const fetchData = async () => {
      
      if (!requestObject) {
        return;
      }
      setIsLoading(true); 
      try {        
        requestObject.options.headers = { "Content-Type": "application/json" };
        
        const res = await fetch(requestObject.url, requestObject.options);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [requestObject]);

  
  return { request, response, error, isLoading };
};

export default useFetch;
