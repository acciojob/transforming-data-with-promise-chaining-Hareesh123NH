//your JS code here. If required.
const input=document.getElementById("ip");
const btn=document.getElementById("btn");
const output=document.getElementById("output");

function perform() {
	const num=input.value;
	const first=new Promise((res)=>{
		setTimeout(()=>{
			// console.log(num);
			output.textContent=`Result: ${num}`;
			res(num);
		},2000);
	});

	first
		.then((num)=>{
			return new Promise((res)=>{
				setTimeout(()=>{
					const r=num*2;
					res(r);
					// console.log(r);
					output.textContent=`Result: ${r}`;
				},1000);
			});
		})
		.then((num)=>{
			return new Promise((res)=>{
				setTimeout(()=>{
					const r=num-3;
					res(r);
					// console.log(r);
					output.textContent=`Result: ${r}`;
				},1000);
			});
		})
		.then((num)=>{
			return new Promise((res)=>{
				setTimeout(()=>{
					const r=num/2;
					res(r);
					// console.log(r);
					output.textContent=`Result: ${r}`;
				},1000);
			});
		})
		.then((num)=>{
			return new Promise((res)=>{
				setTimeout(()=>{
					const r=num+10;
					res(r);
					// console.log(r);
					output.textContent=`Result: ${r}`;
				},1000);
			});
		})
		.then((num)=>{
			// console.log(num);
			output.textContent=`Final Result: ${num}`;
		})
		.catch((err)=>{
			console.log(err);
		});
}
btn.addEventListener("click",perform);
