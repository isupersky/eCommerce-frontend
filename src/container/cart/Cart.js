import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/index';

const useStyles = makeStyles({
    container: {
        padding: 16
    }
});

const Cart =(props)=> {
    const classes = useStyles();

    const handleDelete = (varitionId) => {
        props.deleteItem(varitionId);      
    }

    return (
        <div>
        <div style={{marginTop: "30px","height":"50px", "width":"100%", "border":"1px solid black",paddingTop:"5px", background: "#F0FFF0" }}>
            <h3>CART</h3>
        </div>
        <Container className={classes.container} maxWidth="md">
           <List>
                {props.items.map((item)=>{
                        return (
                        <ListItem key={item.id} button>
                            <ListItemIcon>
                                <img width="50px" height="50px" src={item.primaryImageName} alt={item.productId.name}/>
                            </ListItemIcon>
                            <ListItemText primary={item.productId.name} secondary={item.productId.brand}/>
                            <ListItemText primary={item.price} secondary="Price" />
                            <ListItemText primary={item.Quantity} secondary="Quantity"/>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>)
                })}
                </List>
        </Container>
        </div>
    )

}

const mapStateToProps = (state) => {    
    return {
        items: state.cart}
}

const mapDispatchToProps = dispatch => {
    return {
        deleteItem: (item) => dispatch(actions.deleteFromCart(item)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);