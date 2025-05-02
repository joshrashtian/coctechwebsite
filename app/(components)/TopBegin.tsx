"use client";
import React from "react";
import { motion } from "motion/react";
const TopBegin = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-zinc-100 text-zinc-800 w-full h-full dark:bg-zinc-700 dark:text-white p-10 text-2xl font-mono"
    >
      <ol className="flex-row flex">
        {"int year = 2025;".split("").map((c, i) => {
          if (c === " ") {
            return <ul key={i} className="mx-1" />;
          }
          return (
            <motion.h1
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.01, delay: i * 0.1 }}
              className={
                i < 4
                  ? "text-orange-800 dark:text-orange-300"
                  : "text-zinc-800 dark:text-white"
              }
            >
              {c === "" ? " " : c}
            </motion.h1>
          );
        })}
      </ol>
      <ol className="flex-row flex">
        {`String welcome = "Welcome to the Tech Club!";`
          .split("")
          .map((c, i) => {
            if (c === " ") {
              return <ul key={i} className="mx-1" />;
            }
            return (
              <motion.h1
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.01, delay: i * 0.1 + 1 }}
                className={
                  i < 6
                    ? "text-blue-800 dark:text-blue-300"
                    : "text-zinc-800 dark:text-white"
                }
              >
                {c}
              </motion.h1>
            );
          })}
      </ol>
      <ol className="flex-row flex">
        {`console.log(welcome);`.split("").map((c, i) => {
          if (c === " ") {
            return <ul key={i} className="mx-1" />;
          }
          return (
            <motion.h1
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.01, delay: i * 0.1 + 8 }}
              className={
                i < 12 || i > 18
                  ? "text-purple-800 dark:text-purple-300"
                  : "text-zinc-800 dark:text-white"
              }
            >
              {c}
            </motion.h1>
          );
        })}
      </ol>
      <ol className="my-1" />
    </motion.section>
  );
};

export default TopBegin;
