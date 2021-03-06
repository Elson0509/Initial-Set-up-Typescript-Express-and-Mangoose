/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */

import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'

class App {
  public express: express.Application;

  public constructor () {
    dotenv.config()
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database () {
    mongoose.connect(
      'mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@cluster0.hwbdb.mongodb.net/gq?retryWrites=true&w=majority'
    )
    useNewUrlParser: true
  }

  private routes () {
    this.express.use(routes)
  }
}

export default new App().express
