(function() {
  const image = document.querySelector(".img");
  const name = document.querySelector(".name");
  const rating = document.querySelector(".rating");
  const testimonialText = document.querySelector(".text");
  const prevbtn = document.querySelector(".prevbtn");
  const nextbtn = document.querySelector(".nextbtn");
  const buttons = document.querySelectorAll(".btn");
  let counter = 0;
  const testimonials = [
    {
      image: "pix1", name: "Catherine", rating: "&#9733;&#9733;&#9733;&#9733;&#9733;", testimonial: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone"
    },
    {
      image: "pix2", name: "Sharon", rating: "&#9733;&#9733;&#9733;", testimonial: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words."
    },
    {
      image: "pix3", name: "Juliet", rating: "&#9733;&#9733;&#9733;&#9733;", testimonial: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for them."
    },
    {
      image: "pix4", name: "Mark", rating: "&#9733;&#9733;&#9733;&#9733;&#9733;", testimonial: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly."
    },
    {
      image: "pix5", name: "Shelly", rating: "&#9733;&#9733;&#9733;&#9733;", testimonial: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab."
    }
  ];

  function count() {
    image.style.backgroundImage = `url(image/${testimonials[counter].image}.jpg)`;
    name.textContent = testimonials[counter].name;
    rating.innerHTML = testimonials[counter].rating;
    testimonialText.textContent = testimonials[counter].testimonial;
  }
  
  buttons.forEach(button => {
    button.addEventListener("click", function() {
      if ( this.classList.contains("prevbtn") && (counter >= 1) ) {
        counter--;
        count();
      } else if ( this.classList.contains("nextbtn") && (counter < testimonials.length - 1) ) {
        counter++;
        count();
      }
    });
  });
  
})()


