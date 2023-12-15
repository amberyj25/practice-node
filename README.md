## 介紹
透過CRUD 練習後端Node語言開API
- 在routes檔案 製作CRUD API
- 將routes檔案內的CRUD 拆解成MVC架構 => controller + model
- API部署在Render.com平台

## 可用以下url在Postman call API
- locallhost
  - run起 local project
    - npm install
    - npm start
  - GET 全部products
    - http://localhost:3000/practice/productList
  - POST product
    - http://localhost:3000/practice/product
    - Postman body 範例可以給以下   
    ```
    {
      "title": "productA"
    }
    ```
  - DELETE product
    - http://localhost:3000/practice/deleteProduct
    - Postman body 範例可以給以下   
    ```
     因為id是使用uuid套件隨機產生
     須先call GET API 取得想刪除的 id
    {
      "id": "GET API 取得想刪除的 id"
    }
    ```
- API部署在Render.com平台
  - GET 全部products
    - https://hostdemo.onrender.com/practice/productList
  - POST product
    - https://hostdemo.onrender.com/practice/product
    - Postman body 範例可以給以下   
    ```
    {
      "title": "productA"
    }
    ```
  - DELETE product
    - https://hostdemo.onrender.com/practice/deleteProduct
    - Postman body 範例可以給以下   
    ```
     因為id是使用uuid套件隨機產生
     須先call GET API 取得想刪除的 id
     再到 Postman DELETE API的body 給id
    {
      "id": "GET API 取得想刪除的 id"
    }
    ```
