import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProductVariation from "./ProductVariation"

export default function ProductVariationList(props) {

    let iterateProductResponse=()=>{

        let output = [];
        let data = props.data;
        let keyCount = 0;
        for ( let key in data) { 
            if (props.data.hasOwnProperty(key)) { 
                let value = props.data[key]; 
                // console.log(key, value); 
                // console.log(value[0]); 

                output.push( <Grid key={keyCount} item xs={12} sm={3}>
                    <ProductVariation keyCount={keyCount} setMainVariation={props.setMainVariation} data={value}/>
                    </Grid>);
                    keyCount=keyCount+1;
            } 
        }
        
         return output;
    }

  return (
      <Grid container spacing={3}>
          {iterateProductResponse()}
      </Grid>
      
  );
}
