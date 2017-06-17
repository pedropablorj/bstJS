class BST {
	constructor(value){
		this.value	= value;
		this.left	= null;
		this.right	= null;
	}
}

BST.prototype.insert = (value) => { 
	if (value <= this.value){
		if(!this.left) this.left = new BST(value);
		else this.left.insert(value);

	}else if(value > this.value){
		if(!this.right) this.right = new BST(value);
		else this.right.insert(value);
	}
};

BST.prototype.contains = (value) => {
	if(value === this.value) return true;
	else if (value < this.value){
		if(!this.left) return false;
		else return this.left.contains(value);

	}else if (value > this.value){
		if(!this.right) return false;
		else return this.right.contains(value);
	}
};

BST.prototype.dft = (iteratorFunc, order) => {
	if(order === 'pre-order') iteratorFunc(this.value);

	if(this.left) this.left.dft(iteratorFunc, order);

	if(order === 'in-order') iteratorFunc(this.value);
	
	if(this.right) this.right.dft(iteratorFunc, order);

	if(order === 'post-order') iteratorFunc(this.value);
};

BST.prototype.bft = (iteratorFunc) => {
	var queue = [this];

	while(queue.length){
		var treeNode = queue.shift();

		iteratorFunc(treeNode);
		if(treeNode.left) queue.push(treeNode.left);
		if(treeNode.right) queue.push(treeNode.right);
	}
};

BST.prototype.getMinVal = function(){
	if(this.left) return this.left.getMinVal();
	else return this.value;
};

BST.prototype.getMaxVal = function(){
	if(this.right) return this.right.getMaxVal();
	else return this.value;
};


module.exports = BST;