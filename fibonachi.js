var L = C = R = 1;
console.log(L, C);
R += C;
console.log(R);
C = R;
R += L;
console.log(R);

while(1){
	L = C;
	C = R;
	R += L;
	console.log(R);
}
