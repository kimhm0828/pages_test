const form = document.getElementById("contact_form");
const modal = document.getElementById("modal_container");
const text = document.getElementById("modal_text");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    try {
        const response = await fetch("https://formspree.io/f/xzzglkvb", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            showModal("전송에 성공했습니다!");
            form.reset();
        } else {
            showModal("전송에 실패했습니다.");
        }
    } catch (error) {
        showModal("에러가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        console.error(error);
    }
});

function showModal(message){
    text.textContent = message;
    modal.classList.remove("hidden");
}

function closeModal(){
    modal.classList.add("hidden");
}