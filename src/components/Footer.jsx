import React from 'react';
import { createUseStyles } from 'react-jss';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const useStyles = createUseStyles({
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: '2rem',
    marginTop: 'auto',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  },
  copyright: {
    fontSize: '0.85rem',
    color: '#999',
    borderBottom: '1px solid #333',
    paddingBottom: '1.5rem',
    width: '100%',
    textAlign: 'center',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  socialLink: {
    color: '#999',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      color: '#fff',
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.copyright}>
          © 2026 Brand Marketplace. All rights reserved.
        </div>
        <div className={classes.socialLinks}>
          <a href="#" className={classes.socialLink} title="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className={classes.socialLink} title="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#" className={classes.socialLink} title="Twitter">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
