import { Button } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import ScriptTag from "react-script-tag";

const pts = [
  { lat: 29.218021299904706, lng: 76.82642543790467 },
  { lat: 29.531130256948174, lng: 77.6832293345214 },
  { lat: 29.266254550408533, lng: 78.84406042026126 },
  { lat: 28.807123725237517, lng: 80.36419636587112 },
  { lat: 27.980462962586188, lng: 79.75614198762679 },
  { lat: 27.368543382867884, lng: 80.61294588424352 },
  { lat: 26.80257167123321, lng: 80.03253034137452 },
  { lat: 26.876555928133286, lng: 78.92697692638541 },
  { lat: 26.258550770601545, lng: 79.00989343250956 },
  { lat: 26.72853911997632, lng: 76.9093419440307 },
  { lat: 28.004868266263415, lng: 75.36156716304546 },
  { lat: 28.66171186165053, lng: 75.69323318754206 },
];

const PolygonMap = (props) => {
  const { openPolygonMap, polygonPoints, setPolygonPoints, setOpenPolygonMap } = props;

  const [apiKey, setApiKey] = useState();
  const [map, setMap] = useState(null);
  const [script1Loaded, setScript1Loaded] = useState(false);
  const [editablePolygon, setEditablePolygon] = useState(polygonPoints);
  const [polygon, setPolygon] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.post("/api/v1/auth/mmi/token").then((res) => {
      setApiKey(res.data.access_token);
    });
  }, []);

  const resetPolygon = () => {
    window.mappls.remove({ map: map, layer: polygon });
    setToggle(!toggle);
    setPolygonPoints([]);
    setEditablePolygon([]);
  };

  const ref = useCallback(
    (node) => {
      if (node != null) {
        // eslint-disable-next-line

        function initMap1() {
          const newMap = new window.mappls.Map(node, {
            center: [28.61, 77.23],
            zoomControl: true,
            location: true,
            search: true,
          });

          setMap(newMap);

          newMap.addListener("load", function () {
            var options = {
              fillColor: "red",
              lineGap: 10,
              strokeOpacity: 1.0,
            };

            if (editablePolygon.length > 0) {
              let poly = new window.mappls.Polygon({
                map: newMap,
                paths: editablePolygon,
                fillColor: "red",
                fitbounds: true,
              });
              setPolygon(poly);
              poly.setEditable(true);
              newMap.addListener("mousemove", function () {
                const newPath = poly.getPath();
                setEditablePolygon(newPath);
              });
            } else {
              window.mappls.draw({
                map: newMap,
                type: "polygon",
                callback: drawCallback,
                options: options,
              });
            }
          });

          function drawCallback(data) {
            const points = data.getPath();
            setPolygonPoints(points);
          }
        }
        initMap1();
        window.initMap1 = initMap1();
      }
    },
    [toggle]
  );

  return (
    <div>
      <ScriptTag
        isHydrating={true}
        type="text/javascript"
        src={`https://apis.mappls.com/advancedmaps/api/${apiKey}/map_sdk?layer=vector&v=3.0&callback=initMap1`}
        onLoad={() => setScript1Loaded(true)}
      />
      {script1Loaded && <div id="map" ref={ref} style={{ height: "70vh", borderRadius: 4 }} />}
      <div className="flex justify-end mt-4">
        <Button style={{ marginRight: 14 }} variant="outlined" onClick={() => setOpenPolygonMap(false)}>
          Cancel
        </Button>
        <Button color="error" style={{ marginRight: 14 }} size="small" variant="outlined" onClick={resetPolygon}>
          Reset
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            if (editablePolygon.length > 0) setPolygonPoints(editablePolygon);
            setOpenPolygonMap(false);
          }}
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default PolygonMap;
