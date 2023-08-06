import Image from 'next/image';
import GameItem from '../../molecules/GameItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { promises } from 'dns';

export default function FeaturedGame() {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://wellstore-project-production.up.railway.app/api/v1/players/landingPage`)
      .then((res) => {
        setGameList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item) => (
            <GameItem
              key={item._id}
              title={item.name}
              category={item.category.name}
              thumbnail={`https://wellstore-project-production.up.railway.app/uploads/${item.thumbnail}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
