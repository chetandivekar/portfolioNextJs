import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Hero = () => {
  return (
    <div className="bg-red-500 flex flex-col items-center w-[250px] gap-[150px] lg:w-[288px]">
      <ul className="flex gap-4">
        <li>
          <Link href="https://google.com">
            <AiFillGithub className="text-[24px]" />
          </Link>
        </li>
        <li>
          <Link href="https://google.com">
            <AiFillLinkedin className="text-[24px]" />
          </Link>
        </li>
        <li>
          <Link href="https://google.com">
            <AiOutlineInstagram className="text-[24px]" />
          </Link>
        </li>
        <li>
          <Link href="https://google.com">
            <AiOutlineTwitter className="text-[24px]" />
          </Link>
        </li>
      </ul>
      <Image
        src="https://drive.google.com/uc?export=view&id=1xPB7mibTHYRoHoxoxgd_bLI5yLCI1QOK"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Hero;
