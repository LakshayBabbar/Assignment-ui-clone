"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { modelState } from "@/store/modelSlice";
import { IoMdClose } from "react-icons/io";

const Model = () => {
  const dispatch = useDispatch();
  const { isOpen, videoLink } = useSelector((state) => state.model);
  return (
    isOpen && (
      <div className="fixed top-0 h-lvh w-full bg-[rgba(56,56,56,0.46)] flex items-center justify-center z-[999]">
        <div className="bg-white border-[6px] relative drop-shadow-2xl">
          <IoMdClose
            onClick={() => dispatch(modelState())}
            className="absolute -top-8 text-white -right-8 text-3xl"
          />
          <iframe
            src={videoLink}
            className="aspect-video w-[560px] h-[315px]"
          ></iframe>
        </div>
      </div>
    )
  );
};

export default Model;
