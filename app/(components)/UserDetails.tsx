"use client";

import { getState } from "@/store";
import Image from "next/image";

export const UserDetails = () => {
  const { user } = getState().session;

  console.log({ user });

  if (!user) return <></>;

  return (
    <div>
      <p>First Name: {user?.firstName}</p>
      <p>Last Name: {user?.lastName}</p>
      <Image width={100} height={100} src={user?.image!} alt="Profile Image" />
    </div>
  );
};
