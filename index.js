import React from "react";

const initialValues = {
  data: {},
  status: "success"
}

export const useGeoLocation = () => {
  const URL = "http://ip-api.com/json";
  const [geoLocation, setGeoLocation] = React.useState(initialValues)
  const getIP = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setGeoLocation({ data, status: data.status })
    } catch (e) {
      setGeoLocation({data:null, status: "error"})
    }
  }

  React.useEffect(()=> {
    getIP()
  }, [])

  return { geoLocation }
}