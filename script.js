document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    const links = document.querySelectorAll("nav ul li a, .cta-button");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Dynamic Testimonials Update
    const testimonials = [
        { quote: "Thanks to the counseling I received, I now feel more confident about family planning.", author: "Sarah M." },
        { quote: "I was unsure about birth control options, but this program helped me make the best choice.", author: "Anonymous" },
        { quote: "Access to affordable reproductive healthcare changed my life.", author: "David K." }
    ];

    let currentTestimonial = 0;
    function updateTestimonial() {
        const testimonialContainer = document.querySelector("#testimonials .testimonial blockquote");
        const authorContainer = document.querySelector("#testimonials .testimonial p");

        if (testimonialContainer && authorContainer) {
            testimonialContainer.textContent = `"${testimonials[currentTestimonial].quote}"`;
            authorContainer.textContent = `- ${testimonials[currentTestimonial].author}`;
        }

        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }

    setInterval(updateTestimonial, 5000); // Change testimonial every 5 seconds
});
