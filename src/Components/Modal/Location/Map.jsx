import React, { useState, useEffect, useRef } from "react";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
import ModalLayout from "../../Layout/ModalLayout";
import { AiOutlineClose, AiOutlineAim } from "react-icons/ai";
import { getPlaceDetails, haversineDistance } from "../../../Utils/helper";
import { useDispatch } from "react-redux";
import {
  setAdress,
  setPincode,   
  setPlace,
} from "../../../Redux/User/Actions";
import { toast } from "react-toastify";

const libraries = ["places"];
const googleMapsApiKey = "AIzaSyDvrWxFHbRpg_yQJLzMK-l8Y5yWeac7AVo";

const LocationSet = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isWithinRadius, setIsWithinRadius] = useState(true);
  const [autocomplete, setAutocomplete] = useState(null);
  const inputRef = useRef(null); // Ref for input element

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  const dispatch = useDispatch();

  const onLoad = (autoC) => setAutocomplete(autoC);
  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      setSelectedLocation({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  const SetToCurrentLocation = async () => {
    if (currentLocation) {
      const location = await getPlaceDetails(
        currentLocation.lat,
        currentLocation.lng,
        googleMapsApiKey
      );
      if (location) {
        console.log(location);
        dispatch(setPlace(location.placeName));
        dispatch(setPincode(location.postalCode));
        dispatch(setAdress(location.address));
        toast.success("Location set to current location");
        onClose();
      } else {
        toast.error("Allow Location to set the current location");
      }
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          const place = getPlaceDetails(
            position.coords.latitude,
            position.coords.longitude,
            googleMapsApiKey
          );
          // console.log(place);
        },
        () => null
      );
    }
  }, []);

  useEffect(() => {
    if (currentLocation && selectedLocation) {
      const distance = haversineDistance(
        currentLocation.lat,
        currentLocation.lng,
        selectedLocation.lat,
        selectedLocation.lng
      );
      // console.log(distance);
      setIsWithinRadius(distance <= 10);
    }
    // console.log(currentLocation, selectedLocation);
  }, [currentLocation, selectedLocation]);

  if (loadError) return <ModalLayout>Error loading maps</ModalLayout>;
  if (!isLoaded) return <ModalLayout>Loading Maps</ModalLayout>;
  return (
    <ModalLayout>
      <div className="relative">
        <h2 className="text-2xl font-semibold text-indigo-950 border-b-2 border-blue-800 pb-3 w-full mb-4 text-center">
          Set Your Location
        </h2>
        <button
          className="ml-auto absolute top-0 right-0 text-xl p-1  rounded-md mb-8 bg-red-700 text-white  "
          onClick={onClose}
        >
          <AiOutlineClose />
        </button>
      </div>{" "}
      <form>
        <div className="mb-4 py-5">
          <div
            onClick={SetToCurrentLocation}
            className="flex mb-3 justify-center cursor-pointer rounded-lg py-1  border-y-2 items-center"
          >
            <button className=" text-blue-700 text-xl">
              <AiOutlineAim />
            </button>
            <p> Set current Location</p>
          </div>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <input
              onChange={() => {
                setIsWithinRadius(false);
              }}
              ref={inputRef}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-700 focus:border-green-700 sm:text-sm"
              type="text"
              placeholder="Enter a place"
            />
          </Autocomplete>
          {isWithinRadius !== null && (
            <p className="text-red-600">
              {isWithinRadius
                ? ""
                : "This place is not available for devlivery,Please selct a place within 10 KM"}
            </p>
          )}
        </div>

        <div className="flex items-center justify-center">
          {isWithinRadius && (
            <button
              type="submit"
              className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Set Location
            </button>
          )}
        </div>
      </form>
    </ModalLayout>
  );
};

export default LocationSet;
