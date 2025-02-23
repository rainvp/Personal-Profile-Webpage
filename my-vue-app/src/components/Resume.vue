<template>
  <nav class="navbar">
    <div>
      <div class="logo">
        <img 
          src="https://scontent.fmnl33-1.fna.fbcdn.net/v/t1.15752-9/474667107_1150394953328908_453092773794161443_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFtTV2Y3K0jKg0_2qV1Ho2xsF94E5Xqu6ewX3gTleq7pyQODnFyHMmvOYxLBKQlWA6rilKeyHQG2zaatLODHo2A&_nc_ohc=rpQ5djOAujEQ7kNvgHIFAZB&_nc_zt=23&_nc_ht=scontent.fmnl33-1.fna&oh=03_Q7cD1gF1ICi8zBFjshzJ24XNdz3oZT7SBQdxXjfFdQZv9Wfp3w&oe=67BFD3DF"
          alt="Rain's Cafe Logo">
      </div>   
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

    <!-- Banner Section -->
    <header id="banner">
        <div id="banner-content" class="row clearfix">
            <div class="col-38">
                <div class="section-heading">
                    <h1>Steamed & Skilled</h1>
                </div>
            </div>
        </div>
    </header>


    <div class="resume-container">


        <section class="resume-section">
            <h2 class="section-title">Education & Achievements</h2>
            <div class="card">
                <p><b>Bachelor of Science in Information Systems</b> - APC</p>
                <p>Officer, Junior Information Systems Security Association</p>
            </div>
        </section>

        <section class="resume-section">
            <h2 class="section-title">Skills</h2>
            <div class="skills-container">
                <div class="skill">Python</div>
                <div class="skill">JavaScript (Vue.js, Vite)</div>
                <div class="skill">Supabase</div>
                <div class="skill">MySQL</div>
                <div class="skill">Figma</div>
                <i class="fab fa-vuejs"></i>
                <i class="fas fa-database"></i>
                <i class="fas fa-laptop-code"></i>
                <i class="fab fa-python"></i>
            </div>
        </section>

        <section class="resume-section">
            <h2 class="section-title">IT Experience</h2>
            <div class="experience-icons">

            </div>
            <ul>
                <li>Developed Vue.js-based personal website with multi-page navigation</li>
                <li>Worked on a coffee quality prediction project using regression models</li>
            </ul>
        </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        logoUrl:
          "https://scontent.fmnl33-1.fna.fbcdn.net/v/t1.15752-9/474667107_1150394953328908_453092773794161443_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFtTV2Y3K0jKg0_2qV1Ho2xsF94E5Xqu6ewX3gTleq7pyQODnFyHMmvOYxLBKQlWA6rilKeyHQG2zaatLODHo2A&_nc_ohc=rpQ5djOAujEQ7kNvgHIFAZB&_nc_zt=23&_nc_ht=scontent.fmnl33-1.fna&oh=03_Q7cD1gF1ICi8zBFjshzJ24XNdz3oZT7SBQdxXjfFdQZv9Wfp3w&oe=67BFD3DF",
        skills: ["Python", "JavaScript (Vue.js, Vite)", "Supabase", "MySQL", "Figma"],
        experiences: [
          "Developed Vue.js-based personal website with multi-page navigation",
          "Worked on a coffee quality prediction project using regression models",
        ],
      };
    },
  };
  </script>
  
  <style scoped>
    body, html {
        height: 100%;
        font-family: 'Poppins';
        margin: 0;
        color: #4a3b2b;
        background-color: #fcf5e8;
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
    #banner {
        height: 100vh;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 90px;
        padding-top: 20px;
        position: relative;
        overflow: hidden;
        
        /* Background Image */
        background-image: url("https://github.com/rainvp/Personal-Profile-Webpage/blob/feature/4_rvp_finalswebsite/images/banner2.jpg?raw=true");
        background-repeat: no-repeat;
        background-position: 20% 60%;
    }
    
    /* Header styling */
#banner h1 {
    font-size: 55px;
    color:#5a391f;
    margin-bottom: 15px;
    animation: fadeInLeft 1.5s ease-out;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 2px; 
    font-weight: bold;
    line-height: 1.2;
}
.resume-container {
    max-width: 900px;
    margin: auto;
    padding: 20px;
}

.resume-section {
    margin-bottom: 30px;
}

.card {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
}

.skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
}

.skill {
    background: #5a391f;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: bold;
}

.experience-icons {
    display: flex;
    gap: 15px;
    font-size: 24px;
    justify-content: center;
}
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        font-size: 1.2rem;
        padding: 5px 0;
    }
  </style>
  