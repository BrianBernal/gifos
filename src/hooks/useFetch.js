import { useState } from "react";

const INITIAL_ERROR = { isError: false, error: null };
const INITIAL_SUCCESS = { isSuccess: false, data: {} };

function useFetch() {
  const [error, setError] = useState(INITIAL_ERROR);
  const [success, setSuccess] = useState(INITIAL_SUCCESS);
  const [loading, setLoading] = useState(false);

  const fetchService = async (endpoint, successFn, failFn) => {
    setSuccess(INITIAL_SUCCESS);
    setError(INITIAL_ERROR);
    setLoading(true);
    try {
      const res = await fetch(endpoint);
      const dataResponse = await res.json();
      if (!res.ok) {
        throw new Error(
          dataResponse.message || `${res.status}: ${res.statusText}`
        );
      }
      setSuccess({ isSuccess: true, data: dataResponse });
      successFn(dataResponse);
    } catch (error) {
      setSuccess(INITIAL_SUCCESS);
      setError({ isError: true, error: error });
      if (typeof failFn === "function") failFn(error);
    } finally {
      setLoading(false);
    }
  };

  return { success, error, loading, fetchService };
}

export default useFetch;
