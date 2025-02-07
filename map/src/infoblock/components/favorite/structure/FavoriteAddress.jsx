import {IconButton, ListItemText, TextField} from "@mui/material";
import {Delete} from "@mui/icons-material";
import React from "react";
import contextMenuStyles from "../../../styles/ContextMenuStyles";

export default function FavoriteAddress({favoriteAddress, setFavoriteAddress, setClose}) {

    const menuStyles = contextMenuStyles();

    return (<ListItemText>
            <TextField
                className={menuStyles.favouriteLineInfo}
                id="address"
                label="Address"
                fullWidth
                onChange={(e) => setFavoriteAddress(e.target.value)}
                value={favoriteAddress}
                autoFocus={true}
            />
            <IconButton
                variant="contained"
                type="button"
                onClick={() => {
                    if (setClose) {
                        setClose(false);
                    }
                    setFavoriteAddress('');
                }}
            >
                <Delete fontSize="small"/>
            </IconButton>
        </ListItemText>
    )
}