import { add } from '../common/add';
const h = document.createElement('h1');
const btn = document.createElement('button');

h.innerText = 'Hello!';
btn.innerText = '点击调用add()';

btn.addEventListener('click', () => {
  import(/* webpackChunkName:"another.module.async" */ './another.module');
  const p = document.createElement('p');
  p.innerText = `点击一次，调用add，运行add(12,3,4),结果为${add(12, 3, 4)}`;
  document.body.appendChild(p);
});

document.body.appendChild(h);
document.body.appendChild(btn);
