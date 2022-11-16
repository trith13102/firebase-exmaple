# **Firebase Exmaple**

Ví dụ về cách kết nối và sử dụng [**Firebase Realtime Database**](https://firebase.google.com/docs/database).
<br>
<br>

### **✨HƯỚNG DẪN CÁCH CÀI ĐẶT VÀ SỬ DỤNG✨**

<br>

**1. Clone repository**<br>

```
git clone https://github.com/trith13102/firebase-exmaple.git
```

<br>

**2. Bên trong folder vừa clone về tạo file .env**<br>

```
# FIREBASECONFIG

APIKEY="apiKey của ứng dụng"
AUTHDOMAIN="authDomain của ứng dụng"
DATABASEURL="databaseURL của ứng dụng"
PROJECTID="projectId của ứng dụng"
STORAGEBUCKET="storageBucket của ứng dụng"
MESSAGINGSENDERID="messagingSenderId của ứng dụng"
APPID="appId của ứng dụng"
... các thông tin config khác
```

**Ghi chú**: Các giá trị được đặt trong dấu nháy đôi "..."

<br>

**4. Cài các packages<br>**

```
npm install
```

hoặc

```
npm i
```

<br>

**3. Build ứng dụng<br>**

```
npm run build
```

**Ghi chú**: <br>

- Mặc định trong file [firebase.js](./src/js/firebase.js) đang lấy dữ liệu từ bảng **phones**, nếu bạn muốn lấy dữ liệu từ bảng với tên khác thì chỉ cần đổi **phones** thành tên bảng đó.
- Có thể cấu hình lại **webpack** bằng cách thay đổi các thuộc tính ở file [webpack.config.json](./webpack.config.js)

```
const path = require("path");
const dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/js/firebase.js",              //vị trí file nguồn
  output: {
    path: path.resolve(__dirname, "dist/js"), //vị trí file đích
    filename: "firebase.bundle.js",           //tên file đích
  },
  plugins: [new dotenv()],
};

```
