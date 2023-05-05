"use client";
import { useState, createContext } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { useGlobalContext } from "../../Context/store";

const PortInputPage: NextPage = () => {
  const { portInput, setPortInput } = useGlobalContext();

  return (
    <>
      <div>
        <h1 className="bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent text-5xl  drop-shadow font-extrabold">
          Port Input Page
        </h1>
      </div>
      <div>
        <form>
          <input
            type="text"
            onChange={(e) => setPortInput(e.target.value)}
          ></input>
          <Link href="/mediql-page">
            <button>submit</button>
          </Link>
        </form>
      </div>
      <p>{portInput}</p>
    </>
  );
};

export default PortInputPage;
