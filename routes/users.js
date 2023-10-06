const express = require('express');
const Registration = require('../model/user');

//registrasi
async function registration(req, res){
    try {
        const registration = await Registration.create(req.body);
        res.json({ success: true, checkout });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
  }

  
// login

module.exports = registration;