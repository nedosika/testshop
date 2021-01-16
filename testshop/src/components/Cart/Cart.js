import React, {useContext} from "react";
import Layout from "../Layout/Layout";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import {ShopContext} from "../../App";
import Divider from "@material-ui/core/Divider";

const getImageSrc = (products, item) => {
    const index = products.findIndex(product => product.id === item.id);
    return products[index].img;
}

export default function Cart() {
    const [state, addItemToCard, decItemFromCard, delItemFromCard] = useContext(ShopContext);

    const reducer = (accumulator, currentValue) => ({...accumulator, total: accumulator.total + currentValue.total});
    const totalPrice = state.cart.reduce(reducer).total;

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
                            <IconButton edge="end" onClick={() => decItemFromCard(item.id)}>
                                <IndeterminateCheckBoxIcon/>
                            </IconButton>
                            <IconButton edge="end" onClick={() => addItemToCard(item.id)}>
                                <AddBoxIcon/>
                            </IconButton>
                            <IconButton edge="end" onClick={() => delItemFromCard(item.id)}>
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
                        primary={"Итого: $" + totalPrice }
                    />
                </ListItem>
            </List>
        </Layout>
    )
}