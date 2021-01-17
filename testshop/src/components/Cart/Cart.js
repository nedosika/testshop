import React, {useContext} from "react";
import Layout from "../Layout/Layout";
import {ShopContext} from "../../App";
import calculateTotalPrice from "../../utils/calculateTotalPrice";

import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import getImageSrc from "../../utils/getImageSrc";

export default function Cart() {
    const [state, addItem, decreaseItem, deleteItem] = useContext(ShopContext);

    return (
        <Layout title="Корзина" cartCount={state.cart.length}>
            <List>
                {state.cart.map((item) =>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt="img" src={getImageSrc(state.products, item)}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.count + "kg"}
                            secondary={item.name}
                        />
                        <ListItemText
                            primary={"Сумма:" + item.price * item.count}
                        />
                        <ListItemText
                            primary={"Скидка:" + item.discount}
                        />
                        <ListItemText
                            primary={"Всего:" + (item.price * item.count - item.discount)}
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" onClick={() => decreaseItem(item.id)}>
                                <IndeterminateCheckBoxIcon/>
                            </IconButton>
                            <IconButton edge="end" onClick={() => addItem(item.id)}>
                                <AddBoxIcon/>
                            </IconButton>
                            <IconButton edge="end" onClick={() => deleteItem(item.id)}>
                                <DeleteIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )}
            </List>
            <Divider/>
            <List>
                <ListItem>
                    <ListItemText
                        primary={"Итого: $" + calculateTotalPrice(state.cart) }
                    />
                </ListItem>
            </List>
        </Layout>
    )
}