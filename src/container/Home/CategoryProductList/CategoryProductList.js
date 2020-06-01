import React from 'react';
import SingleProduct from './SingleProduct/SingleProduct'; ;


const CategoryProductList = props=>{
// console.log(props);

    let iterateProductResponse=()=>{

        let output = [];
        let data = props.data;
        for ( let key in data) { 
            if (props.data.hasOwnProperty(key)) { 
                let value = props.data[key]; 
                // console.log("PRODUCT LIST PROPS",key); 
                // console.log("hello",value); 

                output.push( <SingleProduct data={value} key={key}/>);
            } 
        }
         return output;
    }
     

// console.log("111111111111",props.data);
// console.log("111111111111",props.data[0]);
// console.log("111111111111",props.data[1]);

// let data = props.data===undefined?null:Array.of(props.data);
// console.log("222222222222",data);


        let list = ( <div className="container">
                <div className='row'>
                    {/* {data===undefined?null:data.map((element)=>{
                        return <SingleProduct key="1"/>
                    })} */}
                    {iterateProductResponse()}
                    {/* <SingleProduct key="2"/>
                    <SingleProduct key="3"/>
                    <SingleProduct key="4"/>
                    <SingleProduct key="5"/> */}
                </div>


        </div>)

        return list;


}

export default CategoryProductList;
