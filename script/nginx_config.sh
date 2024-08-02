# Check if Nginx is installed, if not, install it
if ! dpkg -l | grep -q nginx; then
    echo "Installing Nginx..."
    sudo apt-get install -y nginx
else
    echo "Nginx is already installed. Updating Nginx..."
    sudo apt-get install --only-upgrade -y nginx
fi

# Ensure Nginx is enabled and started
sudo systemctl enable nginx
sudo systemctl start nginx


# Kiểm tra xem người dùng có quyền sudo không
if [ "$EUID" -ne 0 ]; then 
    echo "Vui lòng chạy script với quyền sudo"
    exit 1
fi

# Đường dẫn tới thư mục cấu hình Nginx
NGINX_CONF_DIR="/etc/nginx"
SITES_ENABLED_DIR="$NGINX_CONF_DIR/sites-enabled"
SITES_AVAILABLE_DIR="$NGINX_CONF_DIR/sites-available"
PROJECT_CONF="project.conf"

# Tạo file cấu hình mới trong thư mục sites-available
echo "Tạo file cấu hình mới cho Nginx: $SITES_AVAILABLE_DIR/$PROJECT_CONF"
cat <<EOL > $SITES_AVAILABLE_DIR/$PROJECT_CONF
server {
    listen 80;
    server_name your_domain_or_ip;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOL

# Tạo symlink tới sites-enabled
echo "Tạo liên kết tới file cấu hình mới trong thư mục sites-enabled"
ln -s $SITES_AVAILABLE_DIR/$PROJECT_CONF $SITES_ENABLED_DIR/$PROJECT_CONF

# Kiểm tra và cập nhật file nginx.conf
NGINX_CONF_FILE="$NGINX_CONF_DIR/nginx.conf"
INCLUDE_STATEMENT="include $SITES_ENABLED_DIR/*;"

if ! grep -q "$INCLUDE_STATEMENT" $NGINX_CONF_FILE; then
    echo "Thêm dòng include vào file nginx.conf"
    sed -i "/http {/a\\    $INCLUDE_STATEMENT" $NGINX_CONF_FILE
else
    echo "Dòng include đã tồn tại trong file nginx.conf"
fi

# Kiểm tra cấu hình Nginx và reload dịch vụ
echo "Kiểm tra cấu hình Nginx"
nginx -t

if [ $? -eq 0 ]; then
    echo "Cấu hình hợp lệ. Reload dịch vụ Nginx"
    systemctl reload nginx
else
    echo "Cấu hình không hợp lệ. Vui lòng kiểm tra lại"
fi

echo "Hoàn tất"
