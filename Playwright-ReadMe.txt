********************************************
		Playwright Automation Tool
********************************************

Understand Browser Engineering first to know how a brower works

Browser fundemental/process:
============================
Security ---> Browsers are not suppose to leak data and vulnurable for hacking
Location ---> use to identify the element and the functionality
Input	 ---> eg. button, textbox etc

Rendering:
==========
Rendering means look and feel of a webpage which happens when we input something. Rendering happens through Javascript and stylesheet. 

Worker Thread:
==============
Helps to render everything including network calls.

Understand how Playwright differs from Selenium on browser automation:
======================================================================
	Selenium communicates only with the DOM and not beyond that.
	Playwright communicates with Browser Process(Security, Location and Input), Render Process(JS and Workers), Network Process(APIs) and Service Worker Process.
	Playwright supports multiple browser testing and compatability testing in one go. eg. Scripts can be run in different version of the chrome browsers.
	
Working Process:
===============

Selenium Java------------> W3C API+Dev tool API-------------> Chrome Driver---------------> Chrome Browser
			  API Command						API Request					Internal Call
			  
			   Websocket Command				 Websocket Request							Internal Call
Playwright Java------------------> Websocket API-------------------> Playwright Node Server----------------> Chrome Browser


API and Websocket differences:
==============================
1) Open a connection----> do a transaction------> close the connection=======> this porcess needs to be repeated if there're multiple API calls
2) In Websocket open a connection once----> perform a transaction as many times you want ----once complete---------> close the connection.


Info:
****
Playwright is built on a node server which is a server side JS. Most of the actions are written in Typescript, hence we prefer to learn Playwright with Typescript.

Prerequisite Softwares to learn Playwright:
===========================================
1) NodeJS
		Download the exe and install.
		Run node -v and npm -v in the command prompt
		
		==> NodeJs is an runtime environment which allows us to execute JS code. NodeJS is bundled with NPM(Node Package Manager) which is a super handy tool to manage JS packages. 
		==> Playwright itself is distrubuted as NPM package.
		==> NodejS helps us to handle dependency including Playwright and provides tools to manage packages.
		
2) Visual Studio Code editor
		Download the exe and install
		
3) Install Playwright through VS code editor
		==> Create a workspace folder locally and open it in the VS code editor
		==> GoTo View--> Terminal and run 
				npm init playwright@latest
		==> For all the prompt such as tests folder as default test location, github action workflow and install Playwright browser say Y or true
		==> Finally look for Playwright directory structure created inside the workspace
		
		
How to run JS or TS code?
	Go back to the terminal and cd tests 
		==> npx playwright test .\launch.spec.js

Note:
*****
	Typescript is a wrapper language built upon JS.
	


JS Evolution:
=============
Initially JS was client side programming language. Due to its asynchronous nature, later supports server side programming as well. But JS can be tune up to behave synchronous with the introduction of await and promise concept.
eg. We can make Websocket call to hold until username and password is validated in the login page

Java and Javascript:
====================
Both are different from each other and no connection between them as they work on different principles.

.java---------> .class ----> run the program
	  compile
	       
		   has inbuilt 
.javascript------------> interprets and run the program
			JIT
			Just In Time Compiler
			
			
Browser Engine: V8 for Chrome
		Every browser has in-built JS engine wihch let developers to debug and log information through the DEV tool console.

	


















