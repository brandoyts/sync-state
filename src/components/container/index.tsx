import React, { ReactElement } from "react";

type props = {
  children: ReactElement;
};

function Container({ children }: Readonly<props>) {
  return <div className="max-w-[75%]  mx-auto my-12">{children}</div>;
}

export default Container;
