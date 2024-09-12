//importing the necessary packages and modules
const express = require("express"); // a package
const app = express(); 

const path = require("path"); // core module that helps with file handling utilities

const { v4:uuidv4} = require('uuid');
//this package helps to  generate dynamic ids which will help to uniquely identify the user

const methodoveride = require("method-override");
//The method-override module in Node.js, specifically in an Express application, allows you to use HTTP verbs such as PUT, DELETE, and others in places where the client only supports GET and POST. This is particularly useful when working with HTML forms, which by default only support GET and POST methods.

app.use(methodoveride('_method'));//app.use()=>The app.use() function in an Express application is a fundamental method used to add middleware to the request-handling chain.
//methodoverride('_method');
//The string '_method' passed as an argument specifies how the middleware will identify which HTTP method to override.
// When an incoming request is received, the middleware looks for a hidden input field (or query parameter) named _method in the request. The value of this hidden input field is the HTTP method you want to simulate (e.g., PUT, DELETE).

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname, 'public')));
// Add these middleware functions before defining your routes
app.use(express.json()); // For JSON payloads
app.use(express.urlencoded({ extended: true })); // For URL-encoded form data
const port = 8080;

let blogs =[
    {
        "id":uuidv4(),
        "name":"Riya Jha",
        "title":"3 Ways To Implement Push Notifications In Frontend",
        "date":"3 June",
        "likes":48,
        "img":'https://miro.medium.com/v2/resize:fit:828/format:webp/1*pFInZ7u4KtZwtig-ULn56A.png',
        "initial":"Implementing push notifications in the frontend is a powerful way to engage users, providing real-time updates and information directly in the user's browser...",
        "content":"1. Browser Push Notifications Using Service Workers Overview: Browser push notifications allow you to send messages directly to a user's browser even when the webpage is not open. This method leverages Service Workers, which are background scripts that run separately from the web page.How It Works:Register a Service Worker: The service worker is a script that runs in the background. It listens for push events and displays notifications.Request User Permission: Ask the user for permission to send notifications.Subscribe to Push Service: Once permission is granted, subscribe the user's browser to a push service (usually provided by the browser).Send Push Notifications: The server sends a push notification to the subscribed user via the push service.Pros: Works even when the webpage is closed, supports most modern browsers.Cons: Requires HTTPS, implementation can be complex."
    },
    {
        "id":uuidv4(),
        "name":"Xieur Old",
        "title":"JavaScript Enters A New Era Of AI",
        "date":"Apr 14",
        "likes":27,
        "img":'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*GC1KKtt-XY2DeVU0l7Ca-w.png',
        "initial":"JavaScript has long been the language of the web, powering countless websites and applications. However, with the rapid advancements in artificial intelligence (AI) and machine learning (ML), JavaScript is entering a new era where it plays a pivotal role in bringing...",
        "content":"JavaScript, the most widely used programming language for web development, is entering a new era of AI, transforming how developers build intelligent applications. Here are some of the key aspects and developments that highlight this evolution:1. Integration of AI APIs and ServicesOverview: JavaScript developers can now easily integrate powerful AI capabilities into web applications using various AI APIs and services provided by tech giants like Google, Microsoft, and OpenAI. These services offer pre-built models for tasks such as natural language processing, image recognition, and speech synthesis.Examples:OpenAI's GPT Models: JavaScript libraries allow developers to interact with OpenAI's GPT models, enabling natural language understanding and generation directly within web applications.TensorFlow.js: A library that enables machine learning directly in the browser using JavaScript. Developers can create, train, and deploy models in the browser or on Node.js.Google Cloud AI: Offers APIs for translation, sentiment analysis, speech recognition, and more, all accessible via JavaScript.2. Machine Learning in the BrowserOverview: The emergence of libraries like TensorFlow.js and Brain.js allows developers to perform machine learning tasks directly in the browser, without needing a backend server. This opens up new possibilities for client-side AI, making it possible to run models for tasks like image classification, object detection, and even real-time predictions.Advantages:Performance: Running AI models in the browser reduces latency as computations are done locally.Privacy: Data remains on the client-side, which can be crucial for sensitive applications.Interactivity: Developers can create interactive AI applications that respond in real-time to user input.3. AI-Powered Developer ToolsOverview: AI is increasingly being integrated into developer tools to assist with code generation, debugging, and optimization. JavaScript developers can now leverage AI to automate repetitive tasks, generate boilerplate code, and even refactor existing codebases.Examples:GitHub Copilot: An AI-powered code completion tool that suggests entire lines or blocks of code as you type in JavaScript. It’s trained on billions of lines of code and helps developers write code faster and with fewer errors.TabNine: A code completion tool that uses machine learning to predict and suggest code snippets in real-time."
    },
    {
        "id":uuidv4(),
        "name":"Jan Kammerath",
        "title":"Make Every Software Project A Success With These Standarads",
        "date":"Feb 12",
        "likes":162,
        "img":'https://miro.medium.com/v2/resize:fit:828/format:webp/0*W3gAMMuPolMsx6MQ.jpeg',
         "initial":"  Here’s a guide to the key standards and practices that can help ensure the success of any software project...",
          "content":"Ensuring the success of every software project hinges on adherence to certain key standards and best practices that form the backbone of effective project management and execution. A strong foundation begins with clear and detailed requirements gathering. This process is crucial because it sets the stage for everything that follows. When you thoroughly understand what your clients or end-users need, you can craft a solution that truly meets their expectations. Engage all relevant stakeholders early on, conducting in-depth interviews to extract their needs and pain points. Translate these into well-defined user stories and use cases, which should be meticulously documented. This documentation not only serves as a guide throughout the development process but also as a reference point to avoid scope creep and ensure that everyone is on the same page.In tandem with gathering requirements, embracing an Agile methodology can significantly enhance the adaptability and responsiveness of your project. Agile's iterative development approach allows teams to deliver value incrementally while continuously incorporating feedback. This means that any changes in requirements or unexpected challenges can be addressed without derailing the entire project. Sprint planning is a core practice here, breaking down the project into manageable chunks, each with specific, achievable goals. Daily standups keep the team aligned, fostering transparency and quick resolution of issues. Moreover, implementing Continuous Integration (CI) ensures that code is regularly integrated, tested, and deployed, which reduces the risk of encountering significant bugs or integration issues late in the development cycle.Version control is another critical element of successful software projects. A robust version control system, such as Git, enables you to manage changes to the codebase efficiently, track the history of modifications, and collaborate seamlessly across teams. A well-defined branching strategy, like GitFlow, helps manage parallel development efforts, allowing for the smooth integration of new features, hotfixes, and releases. Regular commits with clear, descriptive messages not only make the development process more transparent but also make it easier to track down and fix issues. Code reviews, meanwhile, act as a quality assurance step, ensuring that the code meets the team’s standards and is consistent throughout the project."


      
    }
    ,{
        "id":uuidv4(),
        "name":"David Kyle",
        "title":"Vae For Time Series",
        "date":"34 days ago",
        "likes":68,
        "img":'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*ahqYrSCvS31vIjbv',
        "initial":"Variational Autoencoders (VAEs) are a class of generative models that can be adapted for time series data to capture complex temporal dependencies and generate new sequences. The application of VAEs to time series involves using a neural network architecture...",
         "content":"Variational Autoencoders (VAEs) are a powerful class of generative models that can be adapted to handle time series data, enabling the modeling of complex temporal patterns. Traditionally, VAEs are used to learn a probabilistic mapping from input data to a latent space and then generate new data by sampling from this latent space. The model consists of an encoder, which compresses the input data into a latent representation, and a decoder, which reconstructs the original data from this latent representation. However, when dealing with time series data, the challenge lies in capturing the temporal dependencies that exist within the data.To address this, VAEs for time series incorporate recurrent neural networks (RNNs), such as Long Short-Term Memory (LSTM) networks or Gated Recurrent Units (GRUs), into both the encoder and decoder. These RNNs are well-suited for handling sequential data because they can maintain a hidden state that captures information from previous time steps, allowing the VAE to model temporal dynamics effectively. By integrating these recurrent layers, the VAE can learn to encode time series data into a latent space that captures the underlying temporal patterns, and subsequently, generate or reconstruct sequences that maintain these patterns. This approach makes VAEs a versatile tool for various tasks involving time series data, such as anomaly detection, forecasting, and data generation."

    }

];
app.listen(port,(req,res)=>{
    console.log(`Listening on port no : ${port}`);
})
//root just to test if server is working
app.get("/",(req,res)=>{
    res.send('Yeah!! It is Working!!');
});

app.get("/blogs",(req,res)=>{
    //console.log(blogs[0].img);
    res.render("index.ejs",{blogs});
})

//route to read specific blog
app.get("/blogs/:id",(req,res)=>{

    let {id} = req.params;
    let blog = blogs.find((x)=>{return id===x.id});
    // console.log(blog);
    // res.send("Fine");
    res.render("specificblog",{blog});

});

//this route is for handling the edit request
app.get(("/blogs/:id/edit"),(req,res)=>{
    let {id} = req.params;

    let b = blogs.find((x)=>{return (x.id === id);});
    console.log(b);

    res.render("editform",{b});
})

//route to implement patch request
//inorder to modify the data 
app.patch("/blogs/:id",(req,res)=>{
    let {id} = req.params;

    let newtitle = req.body.title;
    let newContent = req.body.content;
    //  console.log(req.body.title);
    let blog = blogs.find((x)=>id === x.id);
    blog.content = newContent;
    blog.title = newtitle;
    res.redirect("/blogs");
});

app.delete("/blogs/:id/",(req,res)=>{
    let {id} = req.params;
    
    blogs = blogs.filter((b)=>{return b.id!==id});

    //console.log(blogs);
    res.redirect("/blogs");
})