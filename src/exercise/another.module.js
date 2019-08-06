import { getCount } from '../common/add';
const btn = document.createElement('button');

btn.innerText = 'async 按钮';

btn.addEventListener('click', () => {
  const p = document.createElement('p');
  p.innerText = `总共点击了${getCount()}次`;
  document.body.appendChild(p);
});

document.body.appendChild(btn);
