<template> 
    <nav class="navbar">
      <div class="logo">
        <img 
          src="https://scontent.fmnl33-1.fna.fbcdn.net/v/t1.15752-9/474667107_1150394953328908_453092773794161443_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFtTV2Y3K0jKg0_2qV1Ho2xsF94E5Xqu6ewX3gTleq7pyQODnFyHMmvOYxLBKQlWA6rilKeyHQG2zaatLODHo2A&_nc_ohc=rpQ5djOAujEQ7kNvgHIFAZB&_nc_zt=23&_nc_ht=scontent.fmnl33-1.fna&oh=03_Q7cD1gF1ICi8zBFjshzJ24XNdz3oZT7SBQdxXjfFdQZv9Wfp3w&oe=67BFD3DF"
          alt="Rain's Cafe Logo">
      </div>   
    
      <div class="nav-links">
          <a href="#home"><b>Home</b></a>
          <a href="#about"><b>About</b></a>
          <a href="#gallery"><b>Gallery</b></a>
          <a href="#contact"><b>Contact</b></a>
          <div class="dropdown">
              <button class="dropbtn">
                  <span class="dropdown-icon">&#x25BC;</span>
              </button>
              <div class="dropdown-content">
                  <div class="dropdown-section">
                    <h4 class="dropdown-title">Menu</h4>
                    <a href="#menu1">Coffees</a>
                    <a href="#menu2">Pastries</a>
                    <a href="#menu3">Specials</a>
                  </div>
                  <div class="dropdown-section">
                    <h4 class="dropdown-title">Contact Us</h4>
                    <a href="#location">Our Location</a>
                    <a href="#support">Customer Support</a>
                  </div>
                  <div class="dropdown-section">
                    <h4 class="dropdown-title">Social</h4>
                    <a href="#facebook">Facebook</a>
                    <a href="#instagram">Instagram</a>
                    <a href="#twitter">Twitter</a>
                  </div>
              </div>
          </div>
      </div> 
    </nav>
    
 <!------------------------------------------ Banner Section --------------------------------------------------------------------->
        <header id="banner">
          <div id="banner-content" class="row clearfix">
            <div class="col-38">
              <div class="section-heading">
                <h1>Rain's Digital Café</h1>
              </div>
              <a href="#" class="button">Get to know me!</a>
            </div>
          </div>
        </header>


<!-- About The Page Section -->
<div class="w3-container" id="about" data-aos="fade-up">
  <div class="w3-content">
    <h5 class="tag">ABOUT THE CAFE</h5>
    <p class="welcome-text"><b>Welcome to my personal profile webpage!</b></p>
    <p class="justified-text">
      This is my very first step into the world of web development. 
      I created this page to explore and learn the basics of building a website 
      while expressing my style through a cozy café-inspired theme. 
      It’s a small but meaningful project that represents the beginning of 
      my journey in web design and development.
    </p>
  </div>
</div>

<!-- About The Owner Section -->
<div class="w3-container" id="owner" data-aos="fade-up">
  <div class="w3-content owner-content">
    
    <!-- Title -->
    <div class="full-width">
      <h5 class="tag">ABOUT THE OWNER</h5>
    </div>

    <div class="owner-wrapper">
      <!-- Left Side: Text Content -->
      <div class="owner-text" data-aos="fade-right">
        <p><b> 🍵 Welcome to My Little Corner of the Internet Café! 🍵</b></p>
        <p>
          Just like a <span style="color: rgb(17, 71, 17)">well-whisked matcha</span>, I’m blending my passions into something smooth and vibrant. 
          I’m a <b>second-year Computer Science student specializing in Cybersecurity and Forensics</b>, 
          always striving to learn more and keep things secure—both online and in my dream café plans! 
          My goal? To brew a successful tech career in <b>Singapore</b>, but if a fulfilling path unfolds in the <b>Philippines</b>, 
          that would be just as refreshing.
        </p>
        <p>
          I’m also a <b>starting content creator</b> on TikTok, serving up beauty and 
          makeup content with the same care as crafting the <span style="color: rgb(17, 71, 17)">perfect iced matcha</span>. 
          One day, I hope to bring <b>SummerRain Café</b> to life—a cozy café featuring a library, boutique, and of course, delicious drinks and pastries!
        </p>

        <div class="w3-panel w3-leftbar w3-light-beige">
          <p><i>Life motto: "The sun will rise and we will try again"</i></p>
          <p><b>Founder: Rain Cel-Anne Sophia V. Presa</b></p> 
        </div>

        <!-- Interest List -->
        <h4 class="interest-title">🍵 A Few Things That Catch My Interest:</h4>
        <ul class="interest-list">
          <li>📺 Watching movies & series</li>
          <li>🎀 Collecting anything I find cute</li>
          <li>🎧 Listening to music</li>
          <li>💄 Makeup magic</li>
          <li>📖 Reading my heart out</li>
          <li>🍪 Baking sweet delights</li>
          <li>🎨 Exploring new hobbies (even if I struggle to finish them!)</li>
        </ul>

        <p>So, whether you're here for the matcha vibes, tech talk, or beauty content—stay a while, sip, and enjoy! ✨</p>
      </div>

      <!-- Right Side: Owner's Photos (Vertical) -->
      <div class="owner-gallery" data-aos="fade-left">
       <img src="https://github.com/rainvp/Personal-Profile-Webpage/blob/feature/4_rvp_finalswebsite/images/prof1.jpg?raw=true" alt="Owner's Photo">
       <img src="https://github.com/rainvp/Personal-Profile-Webpage/blob/feature/4_rvp_finalswebsite/images/prof2.jpg?raw=true" alt="Photo 1">
       <img src="https://github.com/rainvp/Personal-Profile-Webpage/blob/feature/4_rvp_finalswebsite/images/prof3.jpg?raw=true" alt="Photo 2">
       <img src="https://github.com/rainvp/Personal-Profile-Webpage/blob/feature/4_rvp_finalswebsite/images/prof4.jpg?raw=true" alt="Photo 3">
    </div>

    </div>

  </div>
</div>

<!--------------------------------------------- Footer ------------------------------------------------------------>
<footer class="footer">
  <div class="footer-content">
    <p> 2025 Rain's Café. All rights reserved.</p>
    <div class="social-icons">
      <a href="#"><i class="fab fa-facebook"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
    </div>
  </div>
</footer>
        
    </template>
    
    <style>
body, html {
    height: 100%;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    color: #4a3b2b;
    background-color: #fcf5e8;
}

 .bgimg {
    background-position: center;
    background-size: cover;
    background-image: url("https://github.com/rainvp/Personal-Profile-Webpage/blob/main/images/472690451_953965212896626_182944049874713246_n.jpg?raw=true");
    min-height: 75%;
}

 .menu {
    display: none;
 }

 a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;
}

p {
   font-size: 18px;
}


/*--------------------------------------------- Custom Styles------------------------------------------- */
.button.custom-bg {
    background-color: #f7e7d1; 
    color: #551f18;
}
  
  .button.custom-bg:hover {
    background-color: #795548 !important;
    color: #ffffff !important; 
  }

  .tag {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin: 40px; /* Spacing above and below the tag */
    font-size: 1.5rem; /* Adjust text size */
    font-weight: bold;
    color: #4a3b2b; /* Coffee-inspired color */
    text-transform: uppercase; /* Make the text all caps */
    letter-spacing: 2px; /* Add some spacing between letters */
    position: relative; /* For positioning the lines */
}

.tag {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .tag::before {
    content: "";
    flex: 1; 
    height: 3px; 
    flex-grow: 5; /* Makes the lines expand further */
    background: linear-gradient(to right, #d4b59b, #502917);
    margin: 0 15px;
}
.tag::after {
    content: "";
    flex: 1; 
    flex-grow: 5; /* Makes the lines expand further */
    height: 3px; 
    background: linear-gradient(to left, #d4b59b, #502917); /* Gradient effect */
    margin: 0 15px;
}

/* Set max-width for general content */
.w3-container,
.w3-content {
  max-width: 1500px; /* Adjust this value as per your design needs */
  margin: 0 auto; /* Centers the content */
}

/* ------------------- about cafe ------------------------- */
@media (max-width: 600px) {
    .welcome-text {
        text-align: center;
        font-weight: bold;
        color: #5a3d2b;
    }

    .justified-text {
        text-align: justify;
        line-height: 1.6;
    }
}


@media (max-width: 768px) {
    .w3-panel p {
        text-align: left !important;
        padding-left: 10px; /* Adjust if needed */
    }

}

/* ---------------------------------------- Navigation Bar ---------------------------------------------- */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #f7e7d1; 
    color: #4a3b2b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    z-index: 1000;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); 
}

.navbar .logo img {
    height: 65px; /* Adjust the height of the logo */
    width: auto; /* Maintain aspect ratio */
    display: block; /* Ensure proper spacing around the image */
}


.navbar a {
    color: #4a3b2b; 
    font-size: 20px;
    text-decoration: none; 
    padding: 10px 25px; 
    transition: background-color 0.3s ease, color 0.3s ease; 
}

.navbar a:hover {
    background-color: #d4b59b; 
    color: #fff; 
    border-radius: 5px;
}

/* Dropdown styling */
.dropdown {
    position: relative;
    display: inline-block;
}

.dropbtn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: #4a3b2b;
    padding: 10px 15px;
    transition: color 0.3s ease;
}

.dropbtn:hover {
    color: #d4b59b;
}

/* Dropdown icon */
.dropdown-icon {
    font-size: 16px;
    margin-left: 5px;
    transition: transform 0.3s ease; /* Animation for rotation */
}

/* Dropdown content */
.dropdown-content {
    display: none;
    position: absolute;
    right: 0; /* Align dropdown below the icon */
    background-color: #fff;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    min-width: 250px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px); /* Start with a slight downward position */
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease; /* Smooth fade-in and slide-up */
}

/* Dropdown sections */
.dropdown-section {
    padding: 15px;
    border-bottom: 1px solid #f7e7d1;
}

.dropdown-title {
    font-size: 16px;
    font-weight: bold;
    color: #4a3b2b;
    margin-bottom: 10px;
    text-transform: uppercase; /* Optional: Make titles uppercase for a neat look */
}

/* Dropdown items */
.dropdown-content a {
    color: #4a3b2b;
    padding: 8px 15px;
    text-decoration: none;
    display: block;
    transition: background-color 0.3s ease;
}

.dropdown-content a:hover {
    background-color: #f7e7d1;
}

/* Show dropdown on hover */
.dropdown:hover .dropdown-content {
    display: block;
    opacity: 1;
    visibility: visible;
    transform: translateY(0); /* Slide to the original position */
}

/* Rotate the arrow when dropdown is open */
.dropdown:hover .dropdown-icon {
    transform: rotate(180deg); /* Rotate arrow */
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    .nav-links a {
        font-size: 16px;  /* Decrease font size for small screens */
        padding: 8px 12px;
    }

    .dropdown-content a {
        font-size: 14px;  /* Make dropdown text smaller */
    }

    .dropbtn {
        font-size: 14px;  /* Adjust dropdown button size */
        padding: 8px 10px;
    }

    /* Reduce logo size for small screens */
    .navbar .logo img {
        height: 50px;
    }

    /* Reduce padding of navbar */
    .navbar {
        padding: 8px 15px;
    }
}
/* ------------------------------------------------ Banner & Header ---------------------------*/
#banner {
    height: 100vh;
    display: flex;
    justify-content: flex-start; 
    align-items: center; 
    padding-left: 90px;
    padding-top: 20px;  
    position: relative;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    background-image: url("https://github.com/rainvp/Personal-Profile-Webpage/blob/main/images/472690451_953965212896626_182944049874713246_n.jpg?raw=true");
    min-height: 75%;
}

/* Optional Gradient Overlay for a softer look */
#banner:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(241, 179, 121, 0.39), rgba(255, 255, 255, 0.5));
}

/* Banner content section */
#banner-content {
    animation: fadeInLeft 1.5s ease-out;
    max-width: 50%; /* Restrict the content width */
    z-index: 2; /* Ensures content is above the background */
    position: relative;
    text-align: left;
}

/* Header styling */
#banner h1 {
    font-size: 5em;
    color:#fffaf5;
    margin-bottom: 15px;
    animation: fadeInLeft 1.5s ease-out;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 2px; 
    font-weight: bold;
    line-height: 1.2;
}

/* Subheading styling */
#banner h2 {
    font-size: 1.8em;
    margin-bottom: 30px;
    animation: fadeInLeft 1.5s ease-out;
    font-style: italic;
    letter-spacing: 1px;
    font-family: 'Arial', sans-serif;
    line-height: 1.5;
}

/* Button styling */
#banner .button {
    background-color: #502917;
    color: #fff;
    margin-top: 15px;
    padding: 22px;
    text-decoration: none;
    border-radius: 30px;
    font-size: 20px;
    transition: background-color 0.3s, transform 0.3s;
    position: relative;
    display: inline-block; 
    text-align: center;
}

/* Add hover effect */
#banner .button:hover {
    background-color: #6a3d22;
    transform: scale(1.05); 
}

/* Responsive adjustments */
@media (max-width: 768px) {
    #banner .button {
        padding: 0.8em 1.5em; /* Adjust padding for smaller screens */
        font-size: 1rem; /* Adjust font size */
    }
}

@media (max-width: 480px) {
    #banner .button {
        padding: 0.6em 1em; /* Further adjust for very small screens */
        font-size: 0.9rem;
        margin: 0.5em;
    }
}

/* Fade-in left animation */
@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
.w3-tag {
    background-color: #887169; 
    color: #ffffff; 
}

.w3-light-beige {
    background-color: #f7e6d1 ;
}
.w3-leftbar {
    border-left: 5px solid #cab291 !important; 
}



 /* ---------------------------------------- Profile Picture ----------------------------------------------*/
/* Default layout (Desktop) */
.owner-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 150px; /* Keeps text in place */
}

/* Make sure text stays justified */
.owner-text {
    flex: 1;
    text-align: justify;
    line-height: 1.6; /* Improves readability */
}

/* Vertical photo layout */
.owner-gallery {
    display: flex;
    flex-direction: column;
    gap: 15px; 
}

/* Ensure images remain square */
.owner-gallery img {
    width: 100%;
    max-width: 150px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 10px;
    object-position: 20% 20%; /* Moves the focus */
}

/* Responsive Design for Mobile */
@media (max-width: 600px) {
    .owner-wrapper {
        flex-direction: column; /* Stack text & photos vertically */
        align-items: center;
        gap: 40px; /* Reduce gap to avoid too much space */
    }

    .owner-text {
        width: 100%; /* Ensures full width but stays left-aligned */
        text-align: justify; /* Keeps text justified on smaller screens */
        line-height: 1.6; /* Improves readability */
    }

    .owner-gallery {
        flex-direction: row; /* Display photos in a row instead of a long column */
        flex-wrap: wrap; /* Allow wrapping for more responsiveness */
        justify-content: center;
    }

    .owner-gallery img {
        max-width: 120px; /* Make images slightly smaller */

    }

    .owner-text p:first-of-type {
        text-align: center; /* Center only the first paragraph */
    }
}

/* ----------------------------- Interests ----------------------------------- */
/* Interest Section */
.interest-title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
  }
  
  .interest-list {
    list-style: none;
    padding: 0;
  }
  
  .interest-list li {
    font-size: 16px;
    padding: 5px 0;
    display: flex;
    align-items: center;
  }
  
  .interest-list li::before {
    content: ""; /* Custom bullet point */
    font-size: 18px;
    color: #502917;
    margin-right: 10px;
  }
   
  
  /* ------------------------------ footer ------------------------------*/
/* Full-Width Footer */
.footer {
    width: 100%; /* Ensures the footer spans the full width */
    background-color: #4a3b2b; /* Matching theme color */
    color: #fff;
    text-align: center;
    padding: 15px 20px;
    position: relative; /* Avoids unintended shifts */
}

  
.footer-content {
    margin: 0 auto; /* Centers the content */
    padding: 0 20px; /* Adds padding to prevent text from touching edges */
    display: flex;
    justify-content: space-between;
    align-items: center;
}


/* Footer Links */
.footer a {
    color: #f7e7d1;
    text-decoration: none;
    margin: 0 10px;
    font-size: 16px;
}

.footer a:hover {
    color: #d4b59b; /* Slight hover effect */
}

/* Social Media Icons */
.footer .social-icons {
    display: flex;
    gap: 15px;
}

.footer .social-icons a {
    font-size: 20px;
}

/* Responsive Footer */
@media (max-width: 600px) {

    /* Full-Width Footer */
    .footer {
    width: 100%; /* Ensures the footer spans the full width */
    background-color: #4a3b2b; /* Matching theme color */
    color: #fff;
    text-align: center;
    padding: 10px 10px;
    position: relative; /* Avoids unintended shifts */
}

.footer-content {
    margin: 0 auto; /* Centers the content */
    padding: 10px 10px; /* Adds padding to prevent text from touching edges */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    
}

}



    </style>
    