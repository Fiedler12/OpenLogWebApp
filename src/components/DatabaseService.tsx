import axios from 'axios'
import React, { useState } from 'react'

const DatabaseService = {

  getLogs: async function ()  {
        const data = axios.get('http://localhost:3001/logs').then(response => {
            return response.data; 
        })
        return data; 
      },
  postLog: async function (log: {}) {
      axios.post('http://localhost:3001/logs', log).then(response => {
          console.log(response.data); 
      })
  },
  getValues: async function() {
      const data = axios.get('http://localhost:3001/values').then(response => {
          var values = response.data;
          return values
      })
      return data; 
  },
  postValue: async function(value: {}) {
      const status = axios.post('http://localhost:3001/values', value).then(response => {
          console.log(response.data); 
      })
  }
}; 

export default DatabaseService; 
