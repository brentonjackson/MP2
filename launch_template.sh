#!/bin/bash
sudo apt-get update
sudo apt-get install stress-ng -y
sudo apt-get install htop -y
sudo apt-get install python3-pip -y
pip3 install flask
sudo apt-get install git -y
cd /home/ubuntu
git clone https://github.com/brentonjackson/MP2.git
cd /home/ubuntu/MP2
python3 serve.py
