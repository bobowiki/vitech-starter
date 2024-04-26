// test.ts

import { MockMethod, MockConfig } from 'vite-plugin-mock'
// import fs from 'fs'
// import path from 'path'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: 'vben'
        }
      }
    }
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben'
      }
    }
  }
  //   {
  //     url: '/api/text',
  //     method: 'get',
  //     rawResponse: async (req, res) => {
  //       const imagePath = path.join(__dirname, 'demo.png')
  //       fs.readFileSync(imagePath, (err, data) => {
  //         if (err) {
  //           res.statusCode = 500
  //           res.setHeader('Content-Type', 'text/plain')
  //           res.end('error: unable to read image file')
  //         } else {
  //           res.setHeader('Content-Type', 'image/jpeg')
  //           res.statusCode = 200
  //           res.end(data)
  //         }
  //       })
  //     }
  //   }
] as MockMethod[]
