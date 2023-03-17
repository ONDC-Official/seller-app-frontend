import { useCallback, useEffect, useMemo, useState } from "react";
import cogoToast from "cogo-toast";
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
      /*
      closeBtn_callback:closeBtn_callback,
      pinImage:'pin.png', //custom pin image
      pinHeight:40
      */
    };
    // eslint-disable-next-line
    new MapmyIndia.placePicker(options);
    // picker.setLocation(location);
  }, [map, props])

  return (
    <div id="map" ref={ref} />
  );
}
