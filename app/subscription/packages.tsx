"use client";

import React, { useState } from "react";

const Packages: React.FC = () => {
  const packages = [
    {
      id: 1,
      level: "Silver",
      price: 0.2 + " ETH",
      description: {
        dailyMovies: "3 Daily videos",
        bonus:
          "bonus per video 0.001ETH\n+ additional 0.0005ETH for every friend who you invite",
        prizePool:
          "1 prize pool spin in a month to multiply your incomeLorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error fugiat eaque fugit alias dignissimos necessitatibus laudantium velit nulla cum!",
      },
    },
    {
      id: 2,
      level: "Gold",
      price: 0.3 + " ETH",
      description: {
        dailyMovies: "5 Daily Videos",
        bonus:
          "bonus per video 0.002 ETH\n + additional 0.0005 for every friend who you invite",
        prizePool:
          "2 prize pool spin in a month to multiply your incomeLorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error fugiat eaque fugit alias dignissimos necessitatibus laudantium velit nulla cum!",
      },
    },
    {
      id: 3,
      level: "Diamond",

      price: 0.5 + " ETH",
      description: {
        dailyMovies: "Unlimited Videos",
        bonus:
          "bonus per video 0.004 ETH\n+ additional 0.001 for every friend who you invite",
        prizePool:
          "2 prize pool spin in a month to multiply your incomeLorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error fugiat eaque fugit alias dignissimos necessitatibus laudantium velit nulla cum!",
      },
    },
  ];

  return (
    <>
      <div className="sub pt-16 items-center flex flex-col">
        <h1 className="text-3xl">Subscribe</h1>
        <p className="pt-3">
          Unlock exclusive content by joining the whitelist today
        </p>
      </div>
      <div className="packages flex gap-16 mx-28 mt-6 ">
        {packages.map((packageItem, id) => (
          <div
            key={id}
            className="item design  flex flex-col items-center   py-4 rounded-2xl opacity-100 bg-gray-800"
          >
            <div className="py-2 ">
              <strong>{packageItem.level}</strong>
            </div>
            <div className="py-4 bg-gray-600 w-full text-center">
              <p>
                <strong>{packageItem.price}</strong>
              </p>{" "}
            </div>
            <div className="description text-sm flex-col flex items-center py-2 px-6">
              <div className="py-2">{packageItem.description.dailyMovies}</div>
              <div className="py-2">{packageItem.description.bonus}</div>
              <div className="py-2">{packageItem.description.prizePool}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Packages;
