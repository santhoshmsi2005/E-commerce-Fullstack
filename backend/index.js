const express = require('express')
const productsRouter = require('./src/routes/products/productRoutes')
const AuthRoutes = require('./src/routes/users/AuthRoutes');
const AdminRoutes = require('./src/routes/admin/AdminRoutes');
const helmet = require("helmet");
const cors = require("cors");
const compression = require('compression');
const CartRoutes = require('./src/routes/cart/CartRoutes');

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());

app.use(express.json());

app.use("/products", productsRouter)

app.use("/auth", AuthRoutes)

app.use("/admin", AdminRoutes)

app.use("/cart", CartRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use((err, req, res, next) => {
    console.log(err);
    
    res.status(500).json({
        success: false,
        message: err.message
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server started on port 3000')
})