"use client";
import { useContext, useState, useEffect } from "react";
import { useGlobalContext } from "../../Context/store";

export default async function OutputPage() {
  const { portInput } = useGlobalContext();


  return <div>The input value is: {portInput}</div>;
}
