import React from "react";

export default function Data(props) {
       return (
              <div>
                     <p>{JSON.stringify(props.data, null, 2)}</p>
              </div>
       );
}
