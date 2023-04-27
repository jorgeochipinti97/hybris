import React, { FC, ReactNode } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import Head from 'next/head';
import { FooterComponent } from "./Footer";

interface Props {
  children: any;
  title:string
  isCharge:boolean
}

export const Layout: FC<Props> = ({ children, title, isCharge }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
      <FooterComponent isCharge={isCharge}/>
    </>
  );
};
