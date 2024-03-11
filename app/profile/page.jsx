import ProfileProperties from "@/components/ProfileProperties";
import Spinner from "@/components/Spinner";
import { authOptions } from "@/utils/authOption";
import { getServerSession } from "next-auth";

import Image from "next/image";
import { Suspense } from "react";

async function Profile() {
  const { user } = await getServerSession(authOptions);

  return (
    <section className="relative mx-auto mb-10 w-full  xl:w-[80%]">
      <div className="flex gap-5 p-4">
        <div className="w-[20%] rounded-lg p-4">
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-full">
              <Image
                src={user.image}
                height={100}
                width={100}
                alt="profile"
                className="rounded-full"
                priority={true}
              />
            </div>
            <div className="text-center text-xl">
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
        <div className="w-[80%]  p-4">
          <h3 className="mb-5 text-lg font-semibold uppercase">
            Your Listings
          </h3>
          <Suspense fallback={<Spinner />}>
            <ProfileProperties />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export default Profile;
