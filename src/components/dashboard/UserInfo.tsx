"use client";

import Image from "next/image";

interface UserInfoProps {
  userName: string;
  userImage: string;
}

export default function UserInfo({ userName, userImage }: UserInfoProps) {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-medium">{userName}</span>
      <Image
        src={userImage}
        alt="User Avatar"
        width={40}
        height={40}
        className="rounded-full"
      />
    </div>
  );
}
