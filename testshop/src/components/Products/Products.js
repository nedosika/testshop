import React, {useContext} from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Layout from "../Layout/Layout";
import {ShopContext} from "../../App";
import Button from "@material-ui/core/Button";

export default function Products() {
    const [state, addItem] = useContext(ShopContext);

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
                            <Button variant="contained" onClick={() => addItem(item.id)}>Купить</Button>
                        </ListItemSecondaryAction>
                    </ListItem>
                )}
            </List>
        </Layout>
    )
}