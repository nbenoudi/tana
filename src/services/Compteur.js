






import { useState } from "react";
function ⴰⵙⵙⵉⴷⵏ() {
    const [ⵙⵙⵉⴷⵏ, ⴱⴷⴰⵍⵙⵙⵉⴷⵏ] = useState(0); // ⴰ ⴹⵉⴽⵍⴰⵔⴰ  ⵍ ⵠⴰⵔⵢⴰⴱⵍ "ⵙⵙⵉⴷⵏ"
  
    return (
      <div>
        <p>ⴰ ⵙⵙⵉⴷⵏ </p>
        <p> ⵀⴰⵛ ⵜⴰⴽⵍⵉⴽⴽⴰⴷ ⵖⵉⴼⵙ {ⵙⵙⵉⴷⵏ} ⵏ ⵜⵉⴽⵍⵜ</p>
        <button onClick={() => ⴱⴷⴰⵍⵙⵙⵉⴷⵏ(ⵙⵙⵉⴷⵏ + 1)}>
       +
        </button>
      </div>
    );
  }
  export default ⴰⵙⵙⵉⴷⵏ;