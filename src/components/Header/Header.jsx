import React from 'react';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
        <EmojiNatureIcon className={classes.icon} fontSize='3rem' />
        <h2> Note Bumble</h2>
    </div>
  )
}

export default Header