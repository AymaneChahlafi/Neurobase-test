# Neurobase Test

This project contains both the front-end and back-end of the **Neurobase Test** application, which is a simple CRUD (Create, Read, Update, Delete) system for managing products.

## Back-End (API)

The back-end is built with **Laravel** and exposes a RESTful API to manage products. The API includes the following endpoints:

### Endpoints:

- `GET /api/products`: Fetch all products
- `GET /api/products/{id}`: Fetch a specific product by ID
- `POST /api/products`: Create a new product
- `PUT /api/products/{id}`: Update an existing product
- `DELETE /api/products/{id}`: Delete a product by ID

### Features:
- **Product Management**: Allows creating, reading, updating, and deleting products with fields for `name`, `price`, and `description`.
- **Authentication**: The API requires JWT-based authentication for secure access to the endpoints.
- **CORS Issue**: There is currently a CORS (Cross-Origin Resource Sharing) issue when trying to access the API from the front-end. This issue prevents certain requests, like POST, PUT, and DELETE, from being successful due to browser security restrictions. The problem needs to be addressed by properly configuring CORS in the back-end.

### CORS Issue:
At the moment, the front-end cannot make requests to the API from a different domain due to CORS. You might need to update the CORS settings in the back-end to resolve this issue. The Laravel back-end uses the `barryvdh/laravel-cors` package, but CORS might need further configuration.

## Front-End (React)

The front-end is built with **React** and communicates with the back-end API to perform CRUD operations.

### Features:
- **Product Listing**: Displays a list of all products fetched from the back-end API.
- **Product Creation**: Allows creating a new product using a form.
- **Product Edit**: Allows editing an existing product using a form pre-populated with the product's details.
- **Product Deletion**: Allows deleting a product after confirming the action.

### Routes:
- `/products`: Displays a list of products with options to edit or delete each product.
- `/edit/:id`: Displays a form to edit an existing product (based on the product's ID).
- `/create`: Displays a form to create a new product.

### Known Issue:
- **CORS**: The front-end is having issues making API requests to the back-end due to CORS restrictions. This causes the front-end to fail when trying to create, update, or delete products. The problem is under investigation and requires fixing the back-end CORS settings.

## Setup and Installation

### 1. Clone the repository:

```bash
git clone https://github.com/AymaneChahlafi/Neurobase-test.git
cd Neurobase-test
