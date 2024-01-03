## 介紹

- 透過 CRUD 練習後端 Node 語言開 API
- 在 Node 程式碼內 使用 mongoose 套件串接 MongoDB

## 練習方式

- 在 routes 檔案 製作 CRUD API
- 將 routes 檔案內的 CRUD 拆解成 MVC 架構 => controller + model
- Server 部署在 cyclic.sh 平台

## 可用以下 url 在 Postman call API

- API 部署在 cyclic.sh 平台
  - GET API - 全部 products
    - https://practice-node-bth4.onrender.com/practice/productList
  - POST API - 新增 product
    - https://practice-node-bth4.onrender.com/practice/product
    - Postman body 範例可以給以下
    ```
    {
      "title": "productA"
    }
    ```
  - DELETE API - 刪除 product
    - https://practice-node-bth4.onrender.com/practice/deleteProduct
    - Postman body 範例可以給以下
    ```
    須先call GET API 取得想刪除的 id
    再到 Postman DELETE API的body 給id
    {
      "id": "放GET API 取得想刪除的 id"
    }
    ```
- locallhost
  - run 起 local project
    - npm install
    - npm start
  - GET API - 全部 products
    - http://localhost:3000/practice/productList
  - POST API - 新增 product
    - http://localhost:3000/practice/product
    - Postman body 範例可以給以下
    ```
    {
      "title": "productA"
    }
    ```
  - DELETE API - 刪除 product
    - http://localhost:3000/practice/deleteProduct
    - Postman body 範例可以給以下
    ```
    須先call GET API 取得想刪除的 id
    再到 Postman DELETE API的body 給id
    {
      "id": "GET API 取得想刪除的 id"
    }
    ```
