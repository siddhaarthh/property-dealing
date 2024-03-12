"use client";

import { useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import { setDefaults, fromAddress } from "react-geocode";
import Spinner from "./Spinner";
import Image from "next/image";
import location from "@/public/assets/location-icon-black.svg";
import { set } from "mongoose";

function PropertyMap({ property }) {
  return <div>PropertyMap</div>;
}

export default PropertyMap;
