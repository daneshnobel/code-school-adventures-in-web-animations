#code-school-adventures-in-web-animations - Practice code from the lecture given by Alyssa Nicoll in LinkedIn Learning 

The executable web application is in the dist folder.
Use any localhost web server, I have used live-server extension in the Visual studio code
You can directly see the output by opening the transforms.html

See the Gruntfile.js for playing around with the code.

For modifying code and develop,
1)/assets/css/sass/

    The above folder is watched by Grunt and any changes happen will construct
    a respective css file in 

2)/assets/css/

    Every file present in the above path, is again concatenated by Grunt into a single file
    like below
/public/css/app.css

The Grunt finally creates a dist folder
by copying files from
/public/
index.html
transforms.html

To create dist folder -> you have to input command in the terminal as below
1) to the code directory in the terminal
ex :  cd ~/projectfolder (LINUX)  
2) grunt prod
explanation: prod is a custom task registered in the Gruntfile.js

If you want to add any files into the dist folder,
go to Gruntfile.js and customize the task called "prod"

Thanks and Happy Coding!!











