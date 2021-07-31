import React from "react";
import { IMonster } from "../../types/monster";

import "./card.styles.css";

type Props = {
  monster: IMonster;
};

const Card: React.FC<Props> = ({ monster }) => {
  const { name, email, id } = monster;

  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
