var minDepth = function(root,step=1) {

   if(!root) return step;

   if(!root.left) return minDepth(root.right,step+1);

   if(!root.right) return minDepth(root.left,step+1);

   return Math.min(minDepth(root.left,step+1),minDepth(root.right,step+1));
};