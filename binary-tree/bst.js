function Node(val, oLeft, oRight) {
    this.value = val;
    this.left = oLeft;
    this.right = oRight;
}

let BST = {
    root: undefined,
    insert: function (val) {
        if (this.root === undefined) {
            this.root = new Node(val);
            return true
        }

        let oCurrentNode = this.root;

        while (oCurrentNode.value < val) {
            if (oCurrentNode.value < val) {
                oCurrentNode.right = oCurrentNode;
            }else if(oCurrentNode > val){
                oCurrentNode.left = oCurrentNode;
            }else{
                return false;
            }

        }

    }
}