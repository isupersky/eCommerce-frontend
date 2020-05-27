import React from "react";
import SingleCategory from "./SingleCategory/SingleCategory";

const ProductList = (props) => {
  let iterateProductResponse = () => {
    let output = [];
    let data = props.data.data;
    // console.log(data);

    for (let key in data) {
      // if (props.data.hasOwnProperty(key)) {
      let value = data[key];
      //     // console.log(key, value);
      //     // console.log(value[0]);

      output.push(<SingleCategory data={value} key={value.id} />);
      // }
    }
    return output;
  };

  // console.log("111111111111",props.data);
  // console.log("111111111111",props.data[0]);
  // console.log("111111111111",props.data[1]);

  // let data = props.data===undefined?null:Array.of(props.data);
  // console.log("222222222222",data);

  let list = (
    <div className="container">
      <div className="row">
        {/* {data===undefined?null:data.map((element)=>{
                        return <SingleProduct key="1"/>
                    })} */}
        {iterateProductResponse()}
        {/* <SingleProduct key="2"/>
                    <SingleProduct key="3"/>
                    <SingleProduct key="4"/>
                    <SingleProduct key="5"/> */}
      </div>
    </div>
  );

  return list;
};

export default ProductList;
