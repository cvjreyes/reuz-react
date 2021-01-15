import "./Button.css";

const createBtn = ( text = 'no text') => {
const btn = document.createElement('button');
btn.innerText= text;
document.body.appendChild(btn);
return btn;
};

export default createBtn;