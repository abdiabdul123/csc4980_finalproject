# csc4980_finalproject
Group project for CSC 4980    
Group members: Aaron Morrison and Abdullahi

Link to presentation video: https://www.youtube.com/watch?v=Y6xUJz_pcw4&feature=youtu.be

To use this software, you will need to make sure you have Solidity and Truffle installed on your machine. Assuming you are using a Linux-based system, the following commands will download each, using the npm package manager:

```
npm i -g truffle
npm i -g solc
```

At this point, you should download Ganache by following the instructions listed on this page: https://www.codeooze.com/blockchain/ethereum-dev-environment-2019/

Also, you will need to install the metamask extension for your browser and create an account: https://metamask.io/

Finally, you will need to install Node.js on your machine by using:

```
sudo apt install nodejs
```

Now that you have downloaded the necessary software, move to the directory that you would like to store NewEstate in, and create a subdirectory for it. I named my subdirectory "FinalProject," but you can name it whatever you like.

```
mkdir FinalProject
cd FinalProject
```

At this point, download NewEstate from the main page of its GitHub repository by clicking the button "Clone or download" at the top right. Once it has downloaded, extract it to your created subdirectory using archive software of your choice.

Now move back to the subdirectory you've put the program files in and compile using:

```
truffle compile
```

This should compile the project with no errors. Now use the following to reset any previous migrations:

```
migrate --reset
```

Finally, to run the project, input the following command, which will launch it in a browser window:

```
npm run dev
```
