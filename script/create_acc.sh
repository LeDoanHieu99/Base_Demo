#!/bin/bash

# Kiểm tra xem có tên tài khoản không
if [ -z "$1" ]; then
    echo "Vui lòng cung cấp tên tài khoản. Ví dụ: ./createAcc.sh newacc"
    exit 1
fi

ACCOUNT=$1

# Kiểm tra tài khoản đã tồn tại chưa
if id -u "$ACCOUNT" >/dev/null 2>&1; then
    echo "Tài khoản $ACCOUNT đã tồn tại."
    exit 1
fi

# Tạo tài khoản mới
echo "Tạo tài khoản mới: $ACCOUNT"
sudo adduser --disabled-password --gecos "" $ACCOUNT

# Đặt mật khẩu cho tài khoản
echo "Vui lòng nhập mật khẩu tài khoản mới: $ACCOUNT"
sudo passwd $ACCOUNT

# Kiểm tra tài khoản có quyền sudo không
if sudo grep -q "^$ACCOUNT" /etc/sudoers; then
    echo "Xóa quyền sudo tài khoản $ACCOUNT"
    sudo deluser $ACCOUNT sudo
else
    echo "tài khoản $ACCOUNT không có quyền sudo."
fi

echo "Hoàn tất việc tạo tài khoản: $ACCOUNT"
