"use client";
import { useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Spinner from "./Spinner";
import { Map, Marker } from "react-map-gl";
import pin from "@/public/assets/pin.svg";
import Image from "next/image";

function PropertyMap({ property }) {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 12,
    width: "100%",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchCoords = async () => {
        const address = `${property?.location?.street}, ${property?.location?.city}, ${property?.location?.state}, ${property?.location?.zipCode}`;
        const res = await fetch(
          `https://us1.locationiq.com/v1/search?key=pk.7fe98a59cfa987130ef05645879ead58&q=${address}&format=json`,
        );

        const data = await res.json();
        setLat(data[0]?.lat);
        setLng(data[0]?.lon);
        setViewport({
          ...viewport,
          latitude: lat,
          longitude: lng,
        });
        setLoading(false);
      };

      fetchCoords();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  if (loading) return <Spinner />;

  if (!lat || !lng) return <div>Map not available</div>;

  return (
    !loading && (
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
        mapLib={import("mapbox-gl")}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 15,
        }}
        style={{ width: "100%", height: "400px" }}
        mapStyle={"mapbox://styles/mapbox/streets-v9"}
      >
        <Marker longitude={lng} latitude={lat} anchor="bottom">
          <Image src={pin} alt="location icon" width={40} height={40} />
        </Marker>
      </Map>
    )
  );
}

export default PropertyMap;
