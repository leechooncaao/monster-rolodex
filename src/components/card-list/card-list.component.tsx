import React from "react";
import { IMonster } from "../../types/monster";

import Card from "../card/card.component";

import "./card-list.styles.css";

type Props = {
  monsters: IMonster[];
};

const CardList: React.FC<Props> = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
