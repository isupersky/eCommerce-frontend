import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from "axios";
import {Container,List,ListItem,ListItemText} from "@material-ui/core"
import AddCategoryMetadata from "./AddCategoryMetadata"
import Spinner from "../../../../Utility/Spinner/Spinner"

class CategoryMetadataList extends Component {
    state = {
        isLoading:true, 
        data:[]
     }
    componentDidMount(){
        axios({
            method:"get",
            url:"/admin/metadata",
            headers:{
                'Authorization': `bearer ${this.props.token}`
            }
        })
        .then((response)=>{
            this.setState({
                ...this.state,
                isLoading:false,
                data: response.data.data
            });

        })
    }
    
    refreshList=()=>{
        axios({
            method:"get",
            url:"/admin/metadata",
            headers:{
                'Authorization': `bearer ${this.props.token}`
            }
        })
        .then((response)=>{
            console.log("Ye bhi hua", response);
            
            this.setState({
                ...this.state,
                data: response.data.data
            });

        })
    }

    render() { 
        return ( 
            <Container  maxWidth="md">
                {this.state.isLoading?
                <Spinner/>
            :
           <List>
                {this.state.data.map((item)=>{
                        return (
                            <ListItem key={item.id} button>
                            <ListItemText primary={item.name} />
                            </ListItem>
                        )
                })}
                </List>
    }
                    <AddCategoryMetadata 
                    token={this.props.token}
                    refreshList={this.refreshList}/>
        </Container>
         );
    }
}
const mapStateToProps = (state) => {
    return {
      token: state.login.token,
    };
  };
  
  export default connect(mapStateToProps)(CategoryMetadataList);