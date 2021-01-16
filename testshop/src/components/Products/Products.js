import React, {useContext} from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Layout from "../Layout/Layout";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {ShopContext} from "../../App";

export default function Products() {
    const [state, addItemToCard] = useContext(ShopContext);

    return (
        <Layout title="Продукты" cartCount={state.cart.length}>
            <List>
                {state.products.map((item) =>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="img" src={item.img}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={"$" + item.price + " / kg"}
                            secondary={item.name}
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" onClick={() => addItemToCard(item.id)}>
                                <AddCircleIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )}
            </List>
        </Layout>
    )
}