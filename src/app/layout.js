"use client";
import "./globals.css";
import UserContaxtProvider from "@/contaxt/userContaxt";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
// import { Container } from "@chakra-ui/react";
import { Vazirmatn } from "next/font/google";
import Cookies from "universal-cookie";

export default function RootLayout({ children }) {
  return (
    <html>
      <UserContaxtProvider>
        <body>
          <main className="font-vazirMatn  rtl">
            <Header />
            {children}
          </main>
        </body>
      </UserContaxtProvider>
    </html>
  );
}
