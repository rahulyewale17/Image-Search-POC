import React from "react";
import ImageToText from "./imagetotext";
import './SearchTypes.scss';

interface searchProps {
 showImageTotext: boolean;
  setSearchBoxVal(val: any): any;
}

const SearchTypes: React.FC<searchProps> = (props: any) => {
  return (
    <>
     
      {props.showImageTotext ? (
        <ImageToText setSearchBox={props.setSearchBoxVal} />
      ) : null}
    </>
  );
};

export { SearchTypes };
