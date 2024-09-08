const form = () => {
    const textInputs = document.querySelectorAll('input[Placeholder="Ваше имя"]');
    const textArea = document.querySelector(
        'input[Placeholder="Ваше сообщение"]'
    );
    const emailInputs = document.querySelectorAll('input[Type="email"]');
    const telInputs = document.querySelectorAll('input[Type="tel"]');

    textInputs.forEach((item) => {
        item.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я -]/g, "");
        });
    });
    textArea.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я -]/g, "");
    });
    emailInputs.forEach((item) => {
        item.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^0-9a-zA-Z@-_.!~*']/g, "");
        });
    });
    telInputs.forEach((item) => {
        item.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^0-9()-]/g, "");
        });
    });
};
export default form;