import { motion } from "framer-motion";
import React, { useState } from 'react';
import { useContext } from "react";
import {NotesContext} from '../../App'
import { useEffect } from "react";
export default function ColoredButtons() {
  const {notes, setNotes} = useContext(NotesContext)
  const handleAddNote = (color, text) => {
    setNotes(prev => [...prev, {id: prev.length, color, text}])
  }
    useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]); 
    useEffect(() => {
      const savedNotes = localStorage.getItem('notes');
      if (savedNotes) {
        setNotes(JSON.parse(savedNotes));
      }
    }, []);
  return (
    <div className="flex mt-10 flex-col gap-5 *:cursor-pointer">
      <motion.button
        className="rounded-full w-8 h-8"
        style={{ backgroundColor: "#ffca70" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleAddNote("#ffca70", "")}
      />
      <motion.button
        className="rounded-full w-8 h-8"
        style={{ backgroundColor: "#ff9d71" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleAddNote("#ff9d71", "")}
      />
      <motion.button
        className="rounded-full w-8 h-8"
        style={{ backgroundColor: "#b392fc" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleAddNote("#b392fc", "")}
      />
      <motion.button
        className="rounded-full w-8 h-8"
        style={{ backgroundColor: "#02d4fe" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleAddNote("#02d4fe", "")}
      />
      <motion.button
        className="rounded-full w-8 h-8"
        style={{ backgroundColor: "#e4ef8f" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleAddNote("#e4ef8f", "")}
      />
    </div>
  );
}
