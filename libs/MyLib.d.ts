 
export default class MyLib{
	constructor(serverAddress: string);
	connect: (streamToken: string) => void;
	disconnect: (streamToken: string) => void;
}