import React, { useState } from "react";

function Body(props) {
  const [imgURL, setImgURL] = useState(null);

  async function GetImg() {
    //gets the server root path
    const env = process.env.REACT_APP_API_URL;

    //initiates a GET request
    const response = await fetch(`${env}/api`);

    //parse it as JSON
    const data = await response.json();

    setImgURL(`${env}${data.beImg}`);
  }

  return (
    <div>
      <button onClick={GetImg}>Get img</button>
      {imgURL && <img src={imgURL} alt="from server" />}
    </div>
  );
}

export default Body;
