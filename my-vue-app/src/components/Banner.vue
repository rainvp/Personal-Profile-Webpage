<template>
    <!-- Banner Section -->
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
</template>

<style>
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

</style>