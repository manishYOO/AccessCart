document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('home-btn');
    const helpBtn = document.getElementById('help-btn');
    const modal = document.getElementById('help-modal');
    const closeModal = document.querySelector('.close');
    const submitbtn = document.getElementById('submit');
   
    submitbtn.addEventListener('click', () => {
        console.log("uploded Successfully !");
        window.location.href = 'main.html';
    }); 

    homeBtn.addEventListener('click', () => {
        window.location.href = 'main.html';
    });

    helpBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
