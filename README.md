# 🎖 Active Developer Badge Bot

Bot Discord siêu gọn để kích hoạt huy hiệu **Active Developer**.  
Chỉ cần chạy bot → gọi lệnh `/ping` → `/active` → claim huy hiệu.

------

### 📌 1. Yêu cầu
- [Node.js 18+](https://nodejs.org/) hoặc mới hơn
- Một bot Discord đã tạo trong [Developer Portal](https://discord.com/developers/applications)
- Token bot, Client ID, Guild ID (ID server bạn muốn test)

---

### 📌 2. Cài đặt
1. Clone hoặc tải project về  
2. Cài thư viện cần thiết:
```npm install discord.js dotenv```

---

### 📌 3. Cấu hình
Tạo file .env trong thư mục bot

TOKEN=token_bot_của_bạn
CLIENT_ID=id_app_của_bạn
GUILD_ID=id_server_của_bạn

---

### 📌 4. Chạy bot

node index.js
Bot sẽ:
Đăng ký lệnh /ping
Đăng ký lệnh /active

---

### 📌 5. Sử dụng
/ping → Test bot hoạt động
/active → Lấy link claim huy hiệu

Link claim: https://discord.com/developers/active-developer

---

## 🎯 Ghi chú
Chỉ cần bot phản hồi thành công 1 lệnh là bạn đủ điều kiện claim huy hiệu.
Huy hiệu gắn vào tài khoản Discord của bạn, không phải bot.
---
