import React, { Component } from 'react';
import {ListItem, TextField,IconButton} from "@material-ui/core"
import SaveIcon from '@material-ui/icons/Save';
import axios from "axios"

class AddCategoryMetadata extends Component {
    state = { 
        
    }
    onChangeHandler=(e)=>{
        this.setState({
            name:e.target.value
        });
        console.log(this.state);  
    }

    addButtonClicked=()=>{
        axios({
            method:"POST",
            url:"/admin/add-metadata-field",
            headers:{
                'Authorization': `bearer ${this.props.token}`
            },
            data:{
                ...this.state
            }
        })
        .then((response)=>{
            this.setState({});
            this.props.refreshList();
        })
        .catch((error)=>{
            console.log("some error");
            
        })
        
    }

    render() { 
        return ( 
            <ListItem>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    autoFocus
                    fullWidth
                    onChange={(event)=>this.onChangeHandler(event)}
                />
                <IconButton edge="end" aria-label="Save" onClick={this.addButtonClicked}>
                    <SaveIcon />
                </IconButton>
            </ListItem>
         );
    }
}
 
export default AddCategoryMetadata;