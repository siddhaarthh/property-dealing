"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import PropertyPagePropertyCard from "./PropertyPagePropertyCard";
import { deleteProperty } from "@/utils/propertyHandler";

function ProfileProperties() {
  const { data: session } = useSession();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all properties from the database
    const fetchUserProperties = async (userId) => {
      if (!userId) return;

      setLoading(true);

      try {
        const res = await fetch(
          `http://localhost:3000/api/properties/user/${userId}`,
        );

        if (!res.ok)
          throw new Error(
            "Something went wrong while fetching user properties",
          );

        const data = await res.json();
        setProperties(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.id) fetchUserProperties(session.user.id);
  }, [session]);

  return (
    <div className="flex flex-col gap-5">
      {properties.map((property) => (
        <PropertyPagePropertyCard key={property._id} property={property}>
          {/* <Buttons /> */}
          <div className="flex items-center gap-5">
            <button className="rounded-lg bg-primary-500 px-3 py-1 text-white">
              Edit
            </button>
            <button
              onClick={() => deleteProperty(property._id)}
              className="rounded-lg bg-primary-500 px-3 py-1   text-white"
            >
              Delete
            </button>
          </div>
        </PropertyPagePropertyCard>
      ))}
    </div>
  );
}

export default ProfileProperties;
