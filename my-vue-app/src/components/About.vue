<template>
<!-- About The Page Section -->
<div class="w3-container" id="about" data-aos="fade-up">
  <div class="w3-content">
    <h5 class="tag">ABOUT THE CAFE</h5>
    <p>Welcome to my personal profile webpage!</p>
    <p>
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
</template>

<style>
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
}

/* Responsive Design for Mobile */
@media (max-width: 768px) {
    .owner-wrapper {
        flex-direction: column; /* Stack text & photos vertically */
        align-items: center;
        gap: 20px; /* Reduce gap to avoid too much space */
    }

    .owner-text {
        width: 100%; /* Ensures full width but stays left-aligned */
        text-align: justify; /* Keeps text justified on smaller screens */
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

/* --------------------------------------------- Interests ----------------------------------- */
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

</style>