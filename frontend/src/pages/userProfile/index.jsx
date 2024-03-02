import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import styles from "./style.module.css";
import FlipBox from "../../components/flipbox";
import InteractiveImage from "../../components/interactiveImage";
import generateQRCode from "../../utils/qrCode";
import { getUserfromId } from "../../utils/function";
import { doSignOut } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    profilePhoto: "",
    coverPhoto: "",
    gender: "",
    dob: "",
  });

  const getuser = async () => {
    const response = await getUserfromId(id);
    if (response) {
      setUser(response.data);
      
    }
  };

  const url = useLocation();
  

  const [qrSrc, setQrSrc] = useState("");

  const setQrcode = async () => {
    const baseUrl = "https://b95b-103-88-236-139.ngrok-free.app";
    setQrSrc(await generateQRCode(baseUrl + url.pathname));
  };

  useEffect(() => {
    setQrcode();
    getuser();
  }, []);

  const logout = async () => {
    await doSignOut();
    navigate('/login')
  };

  return (
    <div className={styles.userProfile}>
      <div>
        <button onClick={logout}>Logout</button>
      </div>
      <img className={styles.coverImg} src={user.coverPhoto} alt="" />
      <img className={styles.profileImg} src={user.profilePhoto} alt="" />
      <h2>{user.name}</h2>

      <div className={styles.main}>
        <div className={styles.userInfo}>
          <FlipBox
            data={{ label: "Gender", value: user.gender }}
            color1={"#502274"}
            color2={"#061492"}
          />
          <FlipBox
            data={{ label: "Phone", value: user.phone }}
            color1={"#70764D"}
            color2={"##780016"}
          />
          <FlipBox
            data={{ label: "D.O.B", value: user.dob }}
            color1={"#D6A336"}
            color2={"#E9C0E9"}
          />
        </div>
        <div className={styles.qrHolder}>
          <InteractiveImage src={qrSrc} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
