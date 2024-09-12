var buf=Buffer.alloc(10); // create an empty buffer of size 10 bytes
console.log(buf);

var buf2=Buffer.alloc(10);
buf2.write("sonia");
console.log(buf2);
console.log(buf2.toString());

var buf3=Buffer.from("deepak");
console.log(buf3);
console.log(buf3.toJSON());

const bf=Buffer.alloc(5);
bf[0]=21;  // change the bit of 0'p
bf[1]=66;
console.log(bf);
console.log(bf.toJSON());
console.log(bf[1].toString());
console.log(bf.toString());


