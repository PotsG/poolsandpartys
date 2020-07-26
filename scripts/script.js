document.addEventListener('DOMContentLoaded', () => {
    console.clear();
    console.log('dikke feest');

    const form = document.querySelector('#form');


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const name = formData.get('name');
        const content = formData.get('content');

        let obj = {
            name,
            content
        };
        console.log(obj);
    };

    form.addEventListener('submit', handleSubmit);
});