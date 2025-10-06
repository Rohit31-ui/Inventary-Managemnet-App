

# 🏪 Inventory Management System Backend

---

## 📖 Project Description
This is a **simple backend API** for an **Inventory Management System** built using **Node.js, Express.js, and MongoDB**.  
It allows you to manage products and their stock efficiently with complete CRUD operations.

You can:
- ✅ Create new products  
- ✅ Retrieve all products  
- ✅ Update product details  
- ✅ Delete products  
- ✅ Increase or decrease stock quantity  

This project demonstrates RESTful API design using **Express Router** and **Mongoose ODM**.

---

## 🛠️ Setup Instructions (Run Locally)

### 1️⃣ Clone the repository
```bash
git clone <YOUR_REPO_URL>
cd Inventory-Management-System/server
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

Add the following environment variables in the root folder:

```env
MONGODB_URL=mongodb://localhost:27017/inventory
PORT=3000
```

### 4️⃣ Start the server

```bash
# Using nodemon
nodemon server.js

# Or using npm script if added
npm run dev
```

**API Base URL:**

```
http://localhost:3000/api/products
```

---

## 🚀 API Endpoints

| Method     | Endpoint                     | Description                |
| ---------- | ---------------------------- | -------------------------- |
| **POST**   | `/api/products`              | Create a new product       |
| **GET**    | `/api/products`              | Get all products           |
| **GET**    | `/api/products/:id`          | Get a single product by ID |
| **PUT**    | `/api/products/:id`          | Update product details     |
| **DELETE** | `/api/products/:id`          | Delete a product           |
| **PATCH**  | `/api/products/:id/increase` | Increase stock quantity    |
| **PATCH**  | `/api/products/:id/decrease` | Decrease stock quantity    |

---

## 🧪 API Testing with Postman or REST Client

### 1️⃣ Create Product

**POST** `/api/products`
**Body (JSON):**

```json
{
  "name": "Laptop",
  "description": "High performance laptop",
  "stock_quantity": 10
}
```

**Response:**

```json
{
  "_id": "68dc166679cde131eff6c46e",
  "name": "Laptop",
  "description": "High performance laptop",
  "stock_quantity": 10,
  "__v": 0
}
```

---

### 2️⃣ Get All Products

**GET** `/api/products`
**Response:**

```json
[
  {
    "_id": "68dc166679cde131eff6c46e",
    "name": "Laptop",
    "description": "High performance laptop",
    "stock_quantity": 10,
    "__v": 0
  },
  {
    "_id": "68dc167e79cde131eff6c470",
    "name": "Iphone",
    "description": "High performance laptop",
    "stock_quantity": 45,
    "__v": 0
  }
]
```

---

### 3️⃣ Get Product by ID

**GET** `/api/products/68dc166679cde131eff6c46e`
**Response:**

```json
{
  "_id": "68dc166679cde131eff6c46e",
  "name": "Laptop",
  "description": "High performance laptop",
  "stock_quantity": 10
}
```

---

### 4️⃣ Update Product

**PUT** `/api/products/:id`
**Body (JSON):**

```json
{
  "name": "Laptop Pro",
  "description": "Upgraded version",
  "stock_quantity": 15
}
```

**Response:**

```json
{
  "_id": "68dc166679cde131eff6c46e",
  "name": "Laptop Pro",
  "description": "Upgraded version",
  "stock_quantity": 15,
  "__v": 0
}
```

---

### 5️⃣ Increase Stock

**PATCH** `/api/products/:id/increase`
**Body (JSON):**

```json
{
  "quantity": 5
}
```

**Response:**

```json
{
  "message": "Stock increased successfully",
  "updatedProduct": {
    "_id": "68dc166679cde131eff6c46e",
    "name": "Laptop Pro",
    "description": "Upgraded version",
    "stock_quantity": 20
  }
}
```

---

### 6️⃣ Decrease Stock

**PATCH** `/api/products/:id/decrease`
**Body (JSON):**

```json
{
  "quantity": 3
}
```

**Response:**

```json
{
  "message": "Stock decreased successfully",
  "updatedProduct": {
    "_id": "68dc166679cde131eff6c46e",
    "name": "Laptop Pro",
    "description": "Upgraded version",
    "stock_quantity": 17
  }
}
```

---

### 7️⃣ Delete Product

**DELETE** `/api/products/:id`
**Response:**

```json
{
  "message": "Product deleted successfully"
}
```

---

## 🧱 Folder Structure

```
Inventory-Management-System/
│
├── server.js
├── package.json
├── .env
├── /routes
│   └── productRoutes.js
├── /models
│   └── productModel.js
└── /controllers
    └── productController.js
```

---

## 💡 Design Decisions & Features

* 🗃️ **MongoDB with Mongoose** for schema-based data modeling
* 🧩 **Express Router** for modular route handling
* ⚙️ **Environment variables** managed using `dotenv`
* 🧠 **Error handling** with meaningful responses
* 🚀 **Tested using Postman** for all CRUD endpoints
* 🧾 **Validation** ensures all required fields are provided before saving

---

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB
* **ORM:** Mongoose
* **Environment Config:** dotenv
* **Testing Tool:** Postman

---

## 🔗 GitHub Repository

👉 [Inventory Management Backend](https://github.com/Rohit31-ui/Inventory-Management-Backend)

---

## 📫 Contact

* **Author:** Rohit Harihar Lad
* **Email:** [rohitlad012@gmail.com](mailto:rohitlad012@gmail.com)
* **LinkedIn:** [https://www.linkedin.com/in/rohit-lad-1550b4259/](https://www.linkedin.com/in/rohit-lad-1550b4259/)
* **Portfolio:** [https://rohitlportfolio.netlify.app/](https://rohitlportfolio.netlify.app/)




