

var fourSum = function (nums, target) {
    nums = nums.sort((a, b) => a - b);
    let res = {};
    let Head = 0;
    let Tail = nums.length - 1;
    console.log(nums)
    while (Head < Tail - 2) {
        let HeadAsst = Head + 1;
        let TailAsst = Tail - 1;
        let HT = nums[Head] + nums[Tail];
        console.log(nums[Head], nums[HeadAsst],nums[TailAsst],nums[Tail])
        if (HT > target) {
            while (HeadAsst < TailAsst) {
                if (HT + nums[HeadAsst] + nums[TailAsst] > target) {
                    TailAsst--;
                }
                else {
                    if (HT + nums[HeadAsst] + nums[TailAsst] == target) {
                        res[nums[Head]+""+nums[HeadAsst]+""+nums[TailAsst]+""+nums[Tail]] = [nums[Head], nums[HeadAsst],nums[TailAsst],nums[Tail]] ;
                    }
                    HeadAsst++;
                }
            }
            Tail--;
        }
        else if(HT< target) {
            while (HeadAsst < TailAsst) {
                if (HT + nums[HeadAsst] + nums[TailAsst] > target) {
                    TailAsst--;
                }
                else {
                    if (HT + nums[HeadAsst] + nums[TailAsst] == target) {
                        res[nums[Head]+""+nums[HeadAsst]+""+nums[TailAsst]+""+nums[Tail]] = [nums[Head], nums[HeadAsst],nums[TailAsst],nums[Tail]] ;
                    }
                    HeadAsst++;
                }
            }
            Head++;
        }
        else if(HT==target) {
            while (HeadAsst < TailAsst) {
                if (HT + nums[HeadAsst] + nums[TailAsst] > target) {
                    TailAsst--;
                }
                else {
                    if (HT + nums[HeadAsst] + nums[TailAsst] == target) {
                        res[nums[Head]+""+nums[HeadAsst]+""+nums[TailAsst]+""+nums[Tail]] = [nums[Head], nums[HeadAsst],nums[TailAsst],nums[Tail]] ;
                    }
                    HeadAsst++;
                }
            }
            Head++;
            Tail--;
        }
    }
    return (Object.values(res))
};

console.log(fourSum([-3,-2,-1,0,0,1,2,3],0))