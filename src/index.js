/*
* @Author: zhangzhao
* @Date:   2017-11-15 20:48:48
* @Last Modified by:   zhangzhao
* @Last Modified time: 2017-11-20 19:50:46
*/
import _ from 'lodash';
import './style/style.css';
import Icon from './img/test.png';
import print from './app'

function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button');

	// Lodash, currently included via a script, is required for this line to work
	// Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	var myIcon = new Image();
	myIcon.src = Icon;

	btn.innerHTML = 'Click me';
	btn.onclick = print;

	element.appendChild(myIcon);
	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());