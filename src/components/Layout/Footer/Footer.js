import classes from './Footer.module.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className={classes.footer}>
      Created by Brigi Horváth - 2022 - Aarhus
      <Link to="/credits">Credits</Link>
    </div>
  );
};

export default Footer;
