const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const parent = question.parentElement;

        // Close other FAQs
        document.querySelectorAll(".faq-item").forEach((item) => {
            if (item !== parent) {
                item.classList.remove("active");
                item.querySelector(".icon").textContent = "+";
            }
        });

        // Toggle current FAQ
        parent.classList.toggle("active");

        const icon = question.querySelector(".icon");
        if (parent.classList.contains("active")) {
            icon.textContent = "−";
        } else {
            icon.textContent = "+";
        }
    });
});