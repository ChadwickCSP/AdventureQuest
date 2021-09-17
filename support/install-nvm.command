brew update
brew install nvm

mkdir -p ~/.nvm

INSTALL_LOCATION="$(brew --prefix nvm)"

echo '' >> ~/.bash_profile
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bash_profile
echo "[ -s \"$INSTALL_LOCATION/nvm.sh\" ] && . \"/usr/local/opt/nvm/nvm.sh\"  # This loads nvm" >> ~/.bash_profile
echo "[ -s \"$INSTALL_LOCATION/etc/bash_completion.d/nvm\" ] && . \"$INSTALL_LOCATION/etc/bash_completion.d/nvm\"  # This loads nvm bash_completion" >> ~/.bash_profile

echo '' >> ~/.bashrc
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
echo "[ -s \"$INSTALL_LOCATION/nvm.sh\" ] && . \"/usr/local/opt/nvm/nvm.sh\"  # This loads nvm" >> ~/.bashrc
echo "[ -s \"$INSTALL_LOCATION/etc/bash_completion.d/nvm\" ] && . \"$INSTALL_LOCATION/etc/bash_completion.d/nvm\"  # This loads nvm bash_completion" >> ~/.bashrc

echo '' >> ~/.zshrc
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo "[ -s \"$INSTALL_LOCATION/nvm.sh\" ] && . \"/usr/local/opt/nvm/nvm.sh\"  # This loads nvm" >> ~/.zshrc
echo "[ -s \"$INSTALL_LOCATION/etc/bash_completion.d/nvm\" ] && . \"$INSTALL_LOCATION/etc/bash_completion.d/nvm\"  # This loads nvm bash_completion" >> ~/.zshrc

echo '' >> ~/.zprofile
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zprofile
echo "[ -s \"$INSTALL_LOCATION/nvm.sh\" ] && . \"/usr/local/opt/nvm/nvm.sh\"  # This loads nvm" >> ~/.zprofile
echo "[ -s \"$INSTALL_LOCATION/etc/bash_completion.d/nvm\" ] && . \"$INSTALL_LOCATION/etc/bash_completion.d/nvm\"  # This loads nvm bash_completion" >> ~/.zprofile
