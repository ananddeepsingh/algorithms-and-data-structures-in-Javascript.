/*                  4
/           2               6
/       1       3       5       7
/
*/

// explationation
// https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/


// solution by below post
// https://stackoverflow.com/a/39054650/1716053

let tree = {
    data: 4,
    left: {
        data: 2,
        left: {
            data: 1,
            left: null,
            right: null
        },
        right: {
            data: 3,
            left: null,
            right: null
        }
    },
    right: {
        data: 6,
        left: {
            data: 5,
            left: null,
            right: null
        },
        right: {
            data: 7,
            left: null,
            right: null
        }
    }
};

let depthFirth = function(node){
    if(node){
        console.log(node.data);
        depthFirth(node.left);
        depthFirth(node.right);
    }
}

console.log(depthFirth(tree))