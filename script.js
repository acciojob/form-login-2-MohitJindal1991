//your JS code here. If required.
const Form=document.querySelector('#form');
Form.addEventListener('submit',(e)=>{
	const FirstName=document.querySelector('#firstName');
	const LastName=document.querySelector('#lastName');
	const Phone=document.querySelector('#phone');
	const Email=document.querySelector('#email');

	alert(`First Name: ${FirstName.value} Last Name: ${LastName.value} Phone Number: ${Phone.value} Email ID: ${Email.value}`)
})