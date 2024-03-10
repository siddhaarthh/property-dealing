"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

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

  return <div>ProfileProperties</div>;
}

export default ProfileProperties;
