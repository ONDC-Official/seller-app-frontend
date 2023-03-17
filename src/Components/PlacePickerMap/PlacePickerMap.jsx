import { useCallback, useEffect, useState } from "react";
import cogoToast from "cogo-toast";
import axios from "axios";
import ScriptTag from 'react-script-tag';
import './PlacePickerMap.css'

export default function MapPointer(props) {
  const {
    center = [28.62, 77.09],
    zoom = 15,
    zoomControl = true,
    search = true,
    hybrid = false,
    location,
    setLocation
  } = props
  const [map, setMap] = useState()
  const [apiKey, setApiKey] = useState()
  const [script1Loaded, setScript1Loaded] = useState(false)
  const [script2Loaded, setScript2Loaded] = useState(false)
  
  console.log('*********process.env.REACT_APP_BUYER_BACKEND_URL*********', process.env.REACT_APP_BUYER_BACKEND_URL)
  // fetch MMI API token
  useEffect(() => {
    axios.request({
      baseURL: 'https://buyer-app-preprod.ondc.org',
      url: '/mmi/api/fetch_tokens_for_mmi',
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
    }).then((res) => {
      setApiKey(res.data)
    })
  }, [])

  const ref = useCallback((node) => {
    // eslint-disable-next-line
    const map = new MapmyIndia.Map(node, { center, zoom, zoomControl, search });
    setMap(map)
  }, [])

  const onChange = (data) => {
    const { lat, lng } = data
    if (lat && lng) setLocation(data)
    else cogoToast.error('Location not found. Please try moving map.');
  }

  useEffect(() => {
    if (!map) return
    const options = {
      map,
      callback: onChange,
      location,//to open that location on map on initailization
      search: true,
      closeBtn: false,
      topText: 'Search location',
    };
    // eslint-disable-next-line
    new MapmyIndia.placePicker(options);
  }, [map, props])

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ScriptTag isHydrating={true} type="text/javascript" src={`https://apis.mapmyindia.com/advancedmaps/v1/${apiKey}/map_load?v=1.3`} onLoad={() => setScript1Loaded(true)} />
      <ScriptTag isHydrating={true} type="text/javascript" src={`https://apis.mapmyindia.com/advancedmaps/api/${apiKey}/map_sdk_plugins`} onLoad={() => setScript2Loaded(true)} />
      {script1Loaded && script2Loaded && <div id="map" ref={ref} />}
    </div>
  );
}
