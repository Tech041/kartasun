import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GrTwitter } from "react-icons/gr";
const iconsStyles =
  "w-[40px] h-[40px] rounded-[50px] flex justify-center items-center cursor-pointer bg-green-800 hover:bg-green-400";

const Icons = () => {
  return (
    <div className="flex gap-5">
      <div className={iconsStyles}>
        <Link
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61559353923492&mibextid=ZbWKwL"
        >
          <FaFacebookF size={25} color="white" />
        </Link>
      </div>
      <div className={iconsStyles}>
        <Link
          target="_blank"
          href="https://x.com/kartsunenergy?t=hVUhqHn_nCB7RvrPT5q5yg&s=09"
        >
          <GrTwitter size={25} color="white" />
        </Link>
      </div>
      <div className={iconsStyles}>
        <Link
          target="_blank"
          href="https://www.instagram.com/kaarta504?igsh=NGV3a3FzM2diemZt"
        >
          <FaSquareInstagram size={25} color="white" />
        </Link>
      </div>
      <div className={iconsStyles}>
        <Link
          target="_blank"
          href="https://www.tiktok.com/@kartsunenergysolution1?_t=8oRHbRAWp9B&_r=1"
        >
          <FaTiktok size={25} color="white" />
        </Link>
      </div>
    </div>
  );
};

export default Icons;
