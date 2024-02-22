import React from "react";
import { HomeItems } from "../constants";
import Contents from './RibbonSlide'

function Ribbons({ ribbons }: {ribbons: HomeItems}) {
  return (
    <>
      {ribbons?.map((items: any, index: number) => {
        return (
          <div key={`ribbons-${index}`}>
            <h3>{items?.name}</h3>
            <Contents contents={items?.items} />
          </div>
        );
      })}
    </>
  )
}

export default Ribbons