#!/bin/bash

# Kiểm tra quyền sudo
if [ "$EUID" -ne 0 ]; then
    echo "Vui lòng chạy script với quyền sudo"
    exit 1
fi

# Update and upgrade system packages
echo "Updating and upgrading system packages..."
sudo apt-get update -y
sudo apt-get upgrade -y

# Install essential build tools and libraries
echo "Installing essential build tools and libraries..."
sudo apt-get install -y curl wget git


# Install Node.js and npm
# echo "Installing Node.js and npm..."
#curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
# sudo apt-get install -y nodejs


# Đường dẫn đến các file script khác
CREATE_FILE_SCRIPT="./create_file.sh"
CREATE_ACC_SCRIPT="./create_acc.sh"
NGINX_CONFIG_SCRIPT="./nginx_config.sh"
DOCKER_CONFIG_SCRIPT="./docker_config.sh"

# Đặt quyền thực thi cho các script
echo "Đang đặt quyền thực thi cho các script..."
chmod +x $CREATE_ACC_SCRIPT $NGINX_CONFIG_SCRIPT $DOCKER_CONFIG_SCRIPT $CREATE_FILE_SCRIPT


# Thực hiện các bước cấu hình

# Bước 1: Tạo các thư mục cần thiết
echo "Đang tạo các thư mục cần thiết..."
bash $CREATE_FILE_SCRIPT

# Bước 2: Tạo người dùng mới
echo "Đang tạo người dùng mới..."
bash $CREATE_ACC_SCRIPT

# Bước 3: Cấu hình Nginx
echo "Đang cấu hình Nginx..."
bash $NGINX_CONFIG_SCRIPT

# Bước 4: Cấu hình Docker
echo "Đang cấu hình Docker..."
bash $DOCKER_CONFIG_SCRIPT



# Cleaning up
echo "Cleaning up..."
# sudo apt-get autoremove -y
sudo apt-get clean

echo "Hoàn tất cấu hình. Khởi động lại server để kiểm tra thay đổi."
