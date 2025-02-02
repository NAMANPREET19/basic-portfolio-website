# basic-portfolio-website
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PORTFOLIO</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Namanpreet Singh</h1>
    </header>

    <section id="bio">
        <h2>About Me</h2>
        <p>Hi! I'm Namanpreet, a passionate developer with a keen interest in web development. I am learning to create interactive and visually appealing websites and applications. My goal is to continuously learn and improve my skills to build innovative digital solutions.</p>
    </section>

    <section id="skills">
        <h2>Skills</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>C/C++</li>
        </ul>
    </section>

    <section id="projects">
        <h2>Projects</h2>
        <div class="project">
            <h3>Project 1: Portfolio Website</h3>
            <p>This is a responsive portfolio website that I built to showcase my skills and projects. It’s a simple, clean layout with all the key information about me and my work.</p>
        </div>
        <div class="project">
            <h3>Project 2: INVEST IQ</h3>
            <p>Designed and developed InvestIQ, an investment tracking web application, using JavaScript, HTML, TypeScript
            .The application allows users to track and manage their investments in real time, providing valuable insights into
                portfolio performance and trends</p>
        </div>
    </section>

    <section id="contact">
        <h2>Contact Me</h2>
        <form id="contactForm">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
            
            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Send Message</button>
        </form>
    </section>

    <button id="changeColorButton">Change Background Color</button>
    
    
    
    <script src="portfolio.js"></script>
</body>
</html>
