# D3.js LaNT Hackathon

This tutorial and starter kit is intended for data scientists or people with similar background. We expect that you know R, Python, or a similar programming language.

## Introduction
This hackathon is going to come at you like a fire hose. 
To be able to create [D3](https://d3js.org/) web pages, you will need to know 
HTML, CSS, Scalable Vector Graphics (SVG), and JavaScript (JS). This is not going to be easy. If this were easy, we wouldn't do this for a hackathon. This tutorial is here to help you get a quick start.

#### Why am I learning D3? I am not a web developer.
Basics of web development are great to have skills in your toolbox. This is especially true of D3 when you're a data scientist. Displaying data, models, algorithms, results, plots, and tables from your research is very important. D3 allows you to produce amazing things. See the [gallery](https://d3js.org/), 
or [this example](http://www.martindaniel.co/cross/2X-Cross-Sell.html) of displaying complicated data, or [this example](https://bost.ocks.org/mike/algorithms/) of visualizing algorithms.

We hope that you build something cool that you can show off at the end of this hackathon. But, even if you do not build something you are proud of, we think that you will learn a lot in the process. If you happen to like what you do during this hackathon, then you can improve your skills in the future. If you do not enjoy this topic or if you decide that D3 (or web technologies, in general) simply isn't your cup of tea, you have only lost one day. Stay tuned for other hackathon topics.

If you do build something really cool, you can add it your portfolio and to your resume. Even basic experience with data visualization technology like D3 will be useful. 

## Tutorial Aims
There are tons of resources available on the web to learn D3. In this tutorial, we have attempted to distill the essence from various sources so that even an absolute beginner (in web development) can start to develop using D3. This repository provides a _starter kit_ that contains code, basic examples, and instructions to get you started. This tutorial does not discuss the aims and the specific requirements of the hackathon topic itself. This tutorial simply focuses on getting you started with D3.

Before we begin, we recommend that you complete the following prerequisites before the hackathon. 

## Prerequisites
1. Decide on a web browser and a text editor. We recommend Google Chrome and Sublime Text (or Emacs). Make sure you can access **Developer Tools** on your web browser. On Google Chrome, click on _More Tools > Developer Tools_.
2. Setup an account at [CodePen](http://codepen.io), take the tour, and try out a _pen_. CodePen provides you a text editor entirely on the web. You can edit HTML, CSS, and JS in one browser window and see the results live. This is great for debugging snippets. You can share your _pens_ with others, which will come in handy when want another set of eyes to debug. Once you setup an account, post a link to `#d3` channel on Slack and ask fellow hackers to see if they can see your _pen_.


## Basic Guidelines
1. Focus on D3 and JS. Don't fret about the HTML, CSS.
2. Do not expect to build something professional quality. It's a hackathon!
3. Don't get stuck on one aspect for too long. 
4. If you need help, ask the organizer or even better ask in `#d3` slack channel. Example questions could be as simple as "_What is the function to read a CSV file?_" or as detailed as "_Help be debug this pen!_".


## Getting Started

#### What is D3.js?
D3.js is a JavaScript library. In fact, it's simply one file of JavaScript code that contains a bunch of useful functions. Take a look [here](https://github.com/mbostock/d3/blob/master/d3.js). It's not that scary. JavaScript itself is a programming language, much like Python with some C-like constructs. If you know Python, you don't need to spend a lot of time learning JavaScript to start working with D3. As an analogy, JavaScript is to D3 as R is to ggplot2. Or, if you're a python person, JavaScript is to D3 as Python is to matplotlib.

D3.js is not the only JS library that does data visualization. Checkout 
[sigmajs](http://sigmajs.org/) for an amazing way to draw graphs.


#### Awesome Resources

###### Interactive Data Visualization for the Web: book by Scott Murray
There is an awesome, **free-to-read online**, and surprisingly short [book](http://chimera.labs.oreilly.com/books/1230000000345) on D3 by Scott Murray. There is even a GitHub [repository](https://github.com/alignedleft/d3-book) containing the sample code used in this book! Thank you, Scott! 

If you have the time, read the entire book; it's great. But, if you're short on time, you can skip Chapter 1. If you're looking for context and background on D3, read up [Chapter 2](http://chimera.labs.oreilly.com/books/1230000000345/ch02.html), but you can skip it too if you don't care. [Chapter 3](http://chimera.labs.oreilly.com/books/1230000000345/ch03.html) describes web fundamentals (HTML, CSS, JS, SVG) and you should at least skim it if you're a total beginner to web technologies. This [great intro](https://square.github.io/intro-to-d3/web-standards/) also provides a sort of equivalent but more concise introduction to web fundamentals. We recommend that you at least take a look at the [SVG section](http://chimera.labs.oreilly.com/books/1230000000345/ch03.html#SVG_3). The remaining chapters describe how to setup everything and how to use D3. 


###### Data Visualization and D3.js: Udacity course
There is an [awesome course](https://www.udacity.com/course/data-visualization-and-d3js--ud507) on D3 at Udacity, complete with video lectures, quizzes, and projects. This is a 7-week course at the rate of 6 hours/week. It's a great course to complete on your own time, but not during the hackathon. If you feel that you are already ready to get started, then you don't need to look into this course. But, for those who prefer video lectures to reading a book, we list below only the essential lectures to give you a quick start.

The [Up and Down the Visualization Spectrum](https://classroom.udacity.com/courses/ud507/lessons/3068848585/concepts/30952087320923) lecture provides good context and background. Feel free to skip this if you don't care. 
The second lesson titled [D3 Building Blocks](https://classroom.udacity.com/courses/ud507/lessons/3168888599/concepts/30952087390923) starts with Developer Tools, downloading and setting up D3, working with JS console, and moves on details on D3. We recommend you take a look at this lesson and learn concepts as you require them. These video lectures also serve as a great reference resource when you get stuck. 

###### Other references
Once you have looked through the basics, the following quick references can offer a lot of help.

1. [Official d3 Wiki](https://github.com/d3/d3/wiki)
2. http://website.education.wisc.edu/~swu28/d3t/concept.html
3. For JS objects, reading files: http://learnjsdata.com/read_data.html
4. [Extra credit] Add synchronous behavior using [D3 Queue](https://github.com/d3/d3-queue).

## Starter Kit
This repository contains the following files. You should clone this repository to your local machine.

```
.
├── README.md
├── custom.js
├── diamonds.csv
├── examples.custom.js
├── examples.html
└── index.html
```

We recommend that you start with the `examples.html` file. You can simply open this file in a browser and see a few examples we have created to get you started. Open the Console to see some very helpful messages. Note that it is possible that you this page does not load JS for you because of security issues. You can simply start a HTTP server and avoid this issue.

```bash
# In a shell like bash
python -m SimpleHTTPServer 8000
```

Now, simply open [http://0.0.0.0:8000/examples.html](http://0.0.0.0:8000/examples.html). Note that `examples.html` file uses `examples.custom.js` to make the examples work. We recommend that you look over the source of these files and use them as reference.

Note that there is no CSS file in this starter kit. The reason is that we want you to focus on D3. Feel free to add your own CSS to your hackathon solution.

We also provide `index.html` and `custom.js` files for you to put your hackathon solution in. You can simply open `index.html` file in a browser or go to [http://0.0.0.0:8000](http://0.0.0.0:8000) if you started an HTTP server. As you update these two files, you can simply refresh the browser page to reload the HTML and re-run the JS. 



## Acronyms

DOM - Document Object Model
SVG - Scalable Vector Graphics
D3 - Data-Driven Documents
JS - JavaScript

























