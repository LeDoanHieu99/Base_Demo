# Check if Docker is installed, if not, install it
if ! command -v docker &> /dev/null; then
    echo "Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    # sudo usermod -aG docker $USER
else
    echo "Docker is already installed. Updating Docker..."
    sudo apt-get install --only-upgrade -y docker-ce docker-ce-cli containerd.io
fi

# Ensure Docker is enabled and started
sudo systemctl enable docker
sudo systemctl start docker