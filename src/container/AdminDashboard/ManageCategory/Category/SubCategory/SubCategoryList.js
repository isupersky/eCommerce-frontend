import React, { Component } from 'react';
import {Container,List,ListItem,ListItemSecondaryAction,TextField,IconButton} from "@material-ui/core"
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import AddSubCategory from "./AddSubCategory"

import Spinner from "../../../../../Utility/Spinner/Spinner"

import axios from "axios"
import {connect} from "react-redux"


class SubCategoryList extends Component {
    state = { 
        disabled:true,
        isLoading:true
     }

    componentDidMount(){
        const { categoryId } = this.props.match.params
        axios({
            method:"get",
            url:`/admin/categories/${categoryId}`,
            headers:{
                'Authorization': `bearer ${this.props.token}`
            }
        })
        .then((response)=>{
            console.log(response.data.data);
            
            this.setState({
                ...this.state,
                isLoading:false,
                data :response.data.data
            });
            console.log(">>>>initially",this.state);
            
        })
    }

    onChangeHandler=(index,event,key)=>{
        let temp = this.state.data;
        temp[index] ={
            ...temp[index],
            id: key,
            name :event.target.value}
        
        this.setState({
            ...this.state,
            data: temp
        })
        console.log("NEW STATE :" ,this.state);
        
    }

    refreshList=()=>{
        console.log("Called");
        const { categoryId } = this.props.match.params
        axios({
            method:"get",
            url:`/admin/categories/${categoryId}`,
            headers:{
                'Authorization': `bearer ${this.props.token}`
            }
        })
        .then((response)=>{
            this.setState({
                ...this.state,
                data: response.data.data
            });

        })
    }

    editIconClick=()=>{
        this.setState({
            ...this.state,
            disabled:false
        })

    }

    saveIconClick=(index)=>{

        axios({
            method:"put",
            url:"/admin/update-category",
            headers:{
                'Authorization': `bearer ${this.props.token}`
            },
            data:{
                ...this.state.data[index],
                
            }
        })
        .then((response)=>{

            this.setState({
                ...this.state,
                disabled:true
            });
            this.refreshList()
        })
        
    }

    render() { 
        
        return ( 
            <Container  maxWidth="md">
            <div></div>
            {this.state.isLoading?
            <Spinner/>
        :
       <List>
            {this.state.data.map((item,index)=>{
                    return (
                        <ListItem style={{width:"90%"}} key={item.id} button>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            disabled={this.state.disabled?true:false}
                            value={item.name}
                            onChange={(event)=>this.onChangeHandler(index,event,item.id)}
                        />
                        <ListItemSecondaryAction style={{marginLeft:"50px"}}>
                        {this.state.disabled?
                            <IconButton edge="end" aria-label="edit" onClick={this.editIconClick}  >
                                <EditIcon />
                            </IconButton>
                            :<IconButton edge="end" aria-label="save" onClick={()=>this.saveIconClick(index)} >
                                <SaveIcon />
                            </IconButton>
                        }
                        <IconButton edge="end" aria-label="save" onClick={()=>console.log("CLICKED")} >
                                <KeyboardArrowRightIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                        </ListItem>
                        
                    )
            })}
            </List>
            
}   
    <AddSubCategory
    refreshList={this.refreshList}
    token={this.props.token}
    parentId={this.props.match.params.categoryId}/>
    </Container>
     
         );
    }
}
const mapStateToProps = (state) => {
    return {
      token: state.login.token,
    };
  };
  
  export default connect(mapStateToProps)(SubCategoryList);