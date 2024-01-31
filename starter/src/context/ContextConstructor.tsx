import React from "react";
import { createContext, useEffect, useState } from "react";

interface Location {
  latitude?: number;
  longitude?: number;
}
interface StreetCityType {
  street: string;
  city: string;
}
interface LocationType {
  location: Location;
  streetCity: StreetCityType;
  getAddressDetails: (latitude: number, longitude: number) => void;
}
interface Props {
  children: React.ReactNode;
}
export const LocationContext = createContext<LocationType>({
  location: {},
  streetCity: {
    street: "",
    city: "",
  },
  getAddressDetails: (latitude: number, longitude: number) => {},
});

const ContextConstructor = ({ children }: Props) => {
  const [location, setLocation] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });
  const [streetCity, setStreetCity] = useState<StreetCityType>({
    street: "",
    city: "",
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  const getAddressDetails = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Extract street and city details from the response
      const address = data.address || {};
      const street = address.road;
      const city = address.city;

      setStreetCity({
        street,
        city,
      });
    } catch (error) {
      console.error("Error during geocoding request:", error);
    }
  };

  return (
    <LocationContext.Provider
      value={{ location, streetCity, getAddressDetails }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default ContextConstructor;
